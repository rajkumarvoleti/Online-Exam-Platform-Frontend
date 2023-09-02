import { ICreateTestData, ITestDetailsForm, ITestPricingForm, ITestSettingsForm } from "@/interfaces/formikInterfaces";
import { testDetailsInitialValues, testPricingInitialValues, testSettingsInitialValues } from "@/utils/formik/initialValues";
import { testDetailsValidationSchema, testPricingValidationSchema, testSettingsValidationScehma } from "@/utils/validationScehma";
import { validateYupSchema } from "formik";
import { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";
import { useToast } from "./useToast";
import { error } from "console";

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

export default function useCreateTest() {
  const [testData, setTestData] = useRecoilState<ICreateTestData>(testDataAtom);
  const [index, setIndex] = useRecoilState<number>(testFormIndexAtom);
  const [publishAttempted, setPublishAttempted] = useRecoilState<boolean>(publishAttemptedAtom);
  const [testDataError, setTestDataError] = useRecoilState<boolean[]>(testDataErrorAtom);
  const {successToast, errorToast} = useToast();

  useEffect(() => {
    if(!publishAttempted)
      return;
    validateForms();
  }, [testData])
  
  useEffect(() => {
    console.log(testDataError)
  }, [testDataError])
  

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
    setPublishAttempted(true);
    const error = await validateForms()
    if(error.every(err => err === false))
      successToast({msg: "Forms are valid"});
    else
      errorToast({msg: "invalid forms"});
  }

  return {handleDetailsForm, handlePricingForm, handleSettingsForm, handleBack, handleNext, index, setIndex, testData, publishAttempted, publishTest, testDataError, validateForms};
} 