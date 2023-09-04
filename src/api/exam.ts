import { IResultQuery } from "@/interfaces/quizInterfaces";
import { request } from ".";
import { ICreateTestData } from "@/interfaces/formikInterfaces";

export const getAllExamsRequest = () => {
  return request({ url: '/exam/getAll', method: 'get', data: {} });
}

export const createExamRequest = ({testData, userId}:{testData:ICreateTestData, userId:number}) => {
  return request({ url: '/exam/create', method: 'post', data: {testData, userId} });
}

export const getExamRequest = (id:number) => {
  return request({ url: '/exam/get', method: 'get', params: {examId:id} });
}

export const getResultRequest = (data:IResultQuery[]) => {
  return request({ url: '/exam/getResult', method: 'get', params: {data} });
}
