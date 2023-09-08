import { ITopic } from "@/interfaces/examInterfaces";
import { request } from ".";

export const createTopicRequest = ({ topicData, userId }: { topicData: ITopic, userId: number }) => {
  return request({ url: '/topic/create', method: 'post', data: { topicData, userId } });
}

export const updateTopicRequest = ({ topicData, id }: { topicData: ITopic, id: number }) => {
  return request({ url: '/topic/update', method: 'post', data: { topicData, id } });
}

export const getAllTopicsRequest = ({ subjectId }: { subjectId: number }) => {
  return request({ url: '/topic/getAll', method: 'get', params: {subjectId} });
}

export const getTopicsFromTopicIdRequest = (topicId:number) => {
  return request({ url: '/topic/getTopicsFromTopicId', method: 'get', params: {topicId} });
}

export const getTopicRequest = (topicId: number) => {
  return request({ url: '/topic/get', method: 'get', params: {topicId} });
}

export const deleteTopicRequest = (id: number) => {
  return request({ url: '/topic/delete', method: 'delete', data: { id } });
}