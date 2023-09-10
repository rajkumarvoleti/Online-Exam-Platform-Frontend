import { ICreateTestData, ITestDetailsForm, ITestPricingForm, ITestSettingsForm } from "@/interfaces/formikInterfaces";
import { testDetailsInitialValues, testPricingInitialValues, testSettingsInitialValues } from "@/utils/formik/initialValues";
import { testDetailsValidationSchema, testPricingValidationSchema, testSettingsValidationScehma } from "@/utils/validationScehma";
import { validateYupSchema } from "formik";
import { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";
import { useToast } from "./useToast";
import { MutateOptions, useMutation, useQueryClient } from "@tanstack/react-query";
import { createExamRequest, deleteExamsRequest } from "@/api/exam";
import useUser from "./useUser";
import { useRouter } from "next-nprogress-bar";


const useCreateExamMutation = ({ request, options }: { request: ({ testData, userId }: { testData: ICreateTestData, userId: number }) => Promise<any>, options: any }) => {
  return useMutation(
    async ({ testData, userId }: { testData: ICreateTestData, userId: number }) => request({ testData, userId }),
    options,
  )
}

const useDeleteExamMutation = ({ request, options }: { request: (ids:number[]) => Promise<any>, options: any }) => {
  return useMutation(
    async (ids:number[]) => request(ids),
    options,
  )
}

const testDataAtom = atom<ICreateTestData>({
  key: "createTestData",
  default: {
    pricing: testPricingInitialValues,
    testDetails: testDetailsInitialValues,
    testSettings: testSettingsInitialValues
  },
})

const testFormIndexAtom = atom<number>({
  key: "testFormIndex",
  default: 0,
})

const publishAttemptedAtom = atom<boolean>({
  key: "publishAttempted",
  default: false,
})

const testDataErrorAtom = atom<boolean[]>({
  key: "testDataError",
  default: [false, false, false],
})

const createTestLoadingAtom = atom<boolean>({
  key:"createTestLoading",
  default: false,
})

export default function useCreateTest() {
  const [testData, setTestData] = useRecoilState<ICreateTestData>(testDataAtom);
  const [index, setIndex] = useRecoilState<number>(testFormIndexAtom);
  const [publishAttempted, setPublishAttempted] = useRecoilState<boolean>(publishAttemptedAtom);
  const [testDataError, setTestDataError] = useRecoilState<boolean[]>(testDataErrorAtom);
  const [loading, setLoading] = useRecoilState(createTestLoadingAtom);
  const {successToast, errorToast} = useToast();
  const queryClient = useQueryClient();
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if(!publishAttempted)
      return;
    validateForms();
  }, [testData])

  const mutationOptions: MutateOptions = {
    onSuccess: async (data: any, variables: any) => {
      if (data.error)
        errorToast({ msg: data.error });
      else {
        successToast({ msg: "Exam Created Successfully" });
        router.push("/user/create/test/display");
        queryClient.invalidateQueries(["exams"], { exact: true });
      }
    },
    onError: (error: any, variables: any) => {
      errorToast({ msg: "Internal Server Error" });
    },
  }

  const deleteMutationOptions: MutateOptions = {
    onSuccess: async (data: any, variables: any) => {
      if (data.error)
        errorToast({ msg: data.error });
      else {
        successToast({ msg: "Deleted Successfully" });
        queryClient.invalidateQueries(["exams"], { exact: true });
      }
    },
    onError: (error: any, variables: any) => {
      errorToast({ msg: "Internal Server Error" });
    },
  }
  
  const createExamMutationQuery = useCreateExamMutation({ request: createExamRequest, options: mutationOptions });
  const deleteExamMutationQuery = useDeleteExamMutation({ request: deleteExamsRequest, options: deleteMutationOptions });

  useEffect(() => {
    const isLoading = createExamMutationQuery.isLoading;
    setLoading(prev => isLoading);
  }, [createExamMutationQuery.isLoading])

  const handleNext = () => setIndex(prev => prev+1);
  const handleBack = () => setIndex(prev => prev-1);

  const handleDetailsForm = (values:ITestDetailsForm) => {
    setTestData(prev => ({...prev,testDetails:values}));
  }

  const handleSettingsForm = (values:ITestSettingsForm) => {
    setTestData(prev => ({...prev,testSettings:values}));
  }

  const handlePricingForm = (values:ITestPricingForm) => {
    setTestData(prev => ({...prev,pricing:values}));
  }

  const validateForms = async () => {
    const newError = [...testDataError];
    const handleChange = (index:number,error: boolean) => {
        newError[index] = error;
    }
    await Promise.all([
    validateYupSchema(testData.testDetails,testDetailsValidationSchema).then((e) => handleChange(0,false),(e) => handleChange(0,true)),
    validateYupSchema(testData.testSettings,testSettingsValidationScehma).then((e) => handleChange(1,false),(e) => handleChange(1,true)),
    validateYupSchema(testData.pricing,testPricingValidationSchema).then((e) => handleChange(2,false),(e) => handleChange(2,true))
    ]);
    setTestDataError(prev => newError);
    return newError;
  }


  const publishTest = async () => {
    if(!user || !user.id)
      return;
    setPublishAttempted(true);
    const error = await validateForms()
    if(error.find(err => err === true)){
      errorToast({msg: "invalid forms"});
      return;
    }
    createExamMutationQuery.mutate({testData,userId:user.id});
    return createExamMutationQuery.data;
  }

  const handleDelete = (ids:number[]) => {
    deleteExamMutationQuery.mutate(ids);
  }

  return {handleDetailsForm, handlePricingForm, handleSettingsForm, handleBack, handleNext, index, setIndex, testData, publishAttempted, publishTest, testDataError, validateForms, loading, handleDelete};
} 