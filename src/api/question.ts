import { IQuestionAndAnswer } from "@/interfaces/examInterfaces";
import { request } from ".";

export const createQuestionRequest = ({ questionData, userId }: { questionData: IQuestionAndAnswer, userId: number }) => {
  return request({ url: '/question/create', method: 'post', data: { questionData, userId } });
}

export const createQuestionsRequest = ({ questionsData, userId }: { questionsData: IQuestionAndAnswer[], userId: number }) => {
  return request({ url: '/question/createMany', method: 'post', data: { questionsData, userId } });
}

export const updateQuestionRequest = ({ questionData, id, userId }: { questionData: IQuestionAndAnswer, id: number, userId: number }) => {
  return request({ url: '/question/update', method: 'post', data: { questionData, id, userId } });
}

export const getAllQuestionsRequest = () => {
  return request({ url: '/question/getAll', method: 'get', data: {} });
}

export const getQuestionsRequest = (topicId:number) => {
  console.log("getting questions");
  return request({ url: '/question/getByTopicId', method: 'get', params:{topicId} });
}

export const getQuestionRequest = (questionId:number) => {
  return request({ url: '/question/getByQuestionId', method: 'get', params:{questionId} });
}

export const deleteQuestionRequest = (id: number) => {
  return request({ url: '/question/delete', method: 'delete', data: { id } });
}

export const deleteQuestionsRequest = (ids: number[]) => {
  return request({ url: '/question/deleteMany', method: 'delete', data: { ids } });
}