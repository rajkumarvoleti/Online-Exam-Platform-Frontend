import { ISubject } from "@/interfaces/examInterfaces";
import { request } from ".";
import { ICreateSubjectTopic } from "@/interfaces/formikInterfaces";

export const createSubjectRequest = ({ subjectData, userId }: { subjectData: ISubject, userId: number }) => {
  return request({ url: '/subject/create', method: 'post', data: { subjectData, userId } });
}

export const createSubjectAndTopicRequest = ({ subjectTopicsData, userId }: { subjectTopicsData: ICreateSubjectTopic, userId: number }) => {
  return request({ url: '/subject/create2', method: 'post', data: { subjectTopicsData, userId } });
}

export const updateSubjectRequest = ({ subjectData, id }: { subjectData: ISubject, id: number }) => {
  return request({ url: '/subject/update', method: 'post', data: { subjectData, id } });
}

export const getAllSubjectsRequest = () => {
  return request({ url: '/subject/getAll', method: 'get', data: {} });
}

export const getAllQuestionBanksRequest = () => {
  return request({ url: '/subject/getQuestionBanks', method: 'get', data: {} });
}

export const getSubjectRequest = (id:number) => {
  return request({ url: '/subject/get', method: 'get', params: {subjectId:id} });
}

export const deleteSubjectRequest = (id: number) => {
  return request({ url: '/subject/delete', method: 'delete', data: { id } });
}