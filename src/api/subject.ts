import { ISubject } from "@/interfaces/examInterfaces";
import { request } from ".";

export const createSubjectRequest = ({ subjectData, userId }: { subjectData: ISubject, userId: number }) => {
  return request({ url: '/subject/create', method: 'post', data: { subjectData, userId } });
}

export const updateSubjectRequest = ({ subjectData, id }: { subjectData: ISubject, id: number }) => {
  return request({ url: '/subject/update', method: 'post', data: { subjectData, id } });
}

export const getAllSubjectsRequest = () => {
  return request({ url: '/subject/getAll', method: 'get', data: {} });
}

export const deleteSubjectRequest = (id: number) => {
  return request({ url: '/subject/delete', method: 'delete', data: { id } });
}