import { request } from ".";

export const getAllExamsRequest = () => {
  return request({ url: '/exam/getAll', method: 'get', data: {} });
}

export const getExamRequest = (id:number) => {
  return request({ url: '/exam/get', method: 'get', params: {examId:id} });
}
