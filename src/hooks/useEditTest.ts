import { ICreateTestData, ITestDetailsForm, ITestPricingForm, ITestSettingsForm } from "@/interfaces/formikInterfaces";
import { testDetailsInitialValues, testPricingInitialValues, testSettingsInitialValues } from "@/utils/formik/initialValues";
import { testDetailsValidationSchema, testPricingValidationSchema, testSettingsValidationScehma } from "@/utils/validationScehma";
import { validateYupSchema } from "formik";
import { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";
import { useToast } from "./useToast";
import { MutateOptions, useMutation, useQueryClient } from "@tanstack/react-query";
import { createExamRequest, deleteExamsRequest, editExamRequest } from "@/api/exam";
import useUser from "./useUser";
import { useRouter } from "next-nprogress-bar";
import { ISelectedQuestionBankTopic } from "@/interfaces/otherInterfaces";


const useCreateExamMutation = ({ request, options }: { request: ({ testData, userId }: { testData: ICreateTestData, userId: number }) => Promise<any>, options: any }) => {
  return useMutation(
    async ({ testData, userId }: { testData: ICreateTestData, userId: number }) => request({ testData, userId }),
    options,
  )
}

const useEditExamMutation = ({ request, options }: { request: ({ testData, userId, examId }: { testData: ICreateTestData, userId: number, examId:number }) => Promise<any>, options: any }) => {
  return useMutation(
    async ({ testData, userId, examId }: { testData: ICreateTestData, userId: number, examId:number }) => request({ testData, userId, examId }),
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
  key: "editTestData",
  default: {
    pricing: testPricingInitialValues,
    testDetails: testDetailsInitialValues,
    testSettings: testSettingsInitialValues
  },
})

const testFormIndexAtom = atom<number>({
  key: "editTestFormIndex",
  default: 0,
})

const publishAttemptedAtom = atom<boolean>({
  key: "editPublishAttempted",
  default: false,
})

const testDataErrorAtom = atom<boolean[]>({
  key: "editTestDataError",
  default: [false, false, false],
})

const createTestLoadingAtom = atom<boolean>({
  key:"editCreateTestLoading",
  default: false,
})

const initializeDataLoadingAtom = atom<boolean>({
  key:"editinitializeDataLoading",
  default: true,
})

export default function useEditTest() {
  const [testData, setTestData] = useRecoilState<ICreateTestData>(testDataAtom);
  const [index, setIndex] = useRecoilState<number>(testFormIndexAtom);
  const [publishAttempted, setPublishAttempted] = useRecoilState<boolean>(publishAttemptedAtom);
  const [testDataError, setTestDataError] = useRecoilState<boolean[]>(testDataErrorAtom);
  const [loading, setLoading] = useRecoilState(createTestLoadingAtom);
  const [initializeDataLoading, setInitializeDataLoading] = useRecoilState(initializeDataLoadingAtom);
  const {successToast, errorToast} = useToast();
  const queryClient = useQueryClient();
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if(!publishAttempted)
      return;
    validateForms();
  }, [testData])

  const initializeData = (data:ICreateTestData) => {
    console.log({data});

    const questionBankTopics:ISelectedQuestionBankTopic[] = data.testDetails.questionBankTopics.map(topic => ({...topic,uuid:Math.random()}));
    const marksPerQuestion = data.testSettings.totalMarks/data.testDetails.totalQuestions;
    const testDurationMinutes = data.testSettings.testDuration % 60;
    const testDurationHours = data.testSettings.testDuration - testDurationMinutes;

    const testDetails:ITestDetailsForm =  {...data.testDetails,questionBankTopics};
    const testSettings:ITestSettingsForm = {...data.testSettings,marksPerQuestion,testDurationHours,testDurationMinutes};
    const pricing:ITestPricingForm = {...data.pricing};
    const newData:ICreateTestData = {testDetails,testSettings,pricing};

    setTestData(prev => newData);
    setInitializeDataLoading(prev => false);
  }

  const resetData = () => {
    setInitializeDataLoading(prev => true);
  }

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

  const editExamMutationOptions: MutateOptions = {
    onSuccess: async (data: any, variables: any) => {
      if (data.error)
        errorToast({ msg: data.error });
      else {
        successToast({ msg: "Exam Updated Successfully" });
        setTestData({pricing: testPricingInitialValues,
          testDetails: testDetailsInitialValues,
          testSettings: testSettingsInitialValues});
        setIndex(0);
        setPublishAttempted(false);
        setTestDataError([false, false, false]);
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
  const editExamMutationQuery = useEditExamMutation({ request: editExamRequest, options: editExamMutationOptions });
  const deleteExamMutationQuery = useDeleteExamMutation({ request: deleteExamsRequest, options: deleteMutationOptions });

  useEffect(() => {
    const isLoading = createExamMutationQuery.isLoading || editExamMutationQuery.isLoading;
    setLoading(prev => isLoading);
  }, [createExamMutationQuery.isLoading, editExamMutationQuery.isLoading , deleteExamMutationQuery.isLoading]);

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

  const handleEdit = (id:number) => {
    if(!user?.id)
      return;
    editExamMutationQuery.mutate({testData,userId:user.id,examId:id})
  }

  return {handleDetailsForm, handlePricingForm, handleSettingsForm, handleBack, handleNext, index, setIndex, testData, publishAttempted, publishTest, testDataError, validateForms, loading, handleDelete, initializeData, initializeDataLoading, handleEdit, resetData};
} 