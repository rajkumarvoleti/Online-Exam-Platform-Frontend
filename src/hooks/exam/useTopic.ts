import { MutateOptions, useMutation, useQueryClient } from "@tanstack/react-query";
import useUser from "../useUser"
import { useToast } from "../useToast";
import { ITopic } from "@/interfaces/examInterfaces";
import { createTopicRequest, deleteTopicRequest, updateTopicRequest } from "@/api/topic";

const useTopicMutation = ({ request, options }: { request: ({ topicData, userId }: { topicData: ITopic, userId: number }) => Promise<any>, options: any }) => {
  return useMutation(
    async ({ topicData, userId }: { topicData: ITopic, userId: number }) => request({ topicData, userId }),
    options,
  )
}

const useUpdateTopicMutation = ({ request, options }: { request: ({ topicData, id }: { topicData: ITopic, id: number }) => Promise<any>, options: any }) => {
  return useMutation(
    async ({ topicData, id }: { topicData: ITopic, id: number }) => request({ topicData, id }),
    options,
  )
}

const useDeleteTopic = ({ request, options }: { request: (id: number) => Promise<any>, options: any }) => {
  return useMutation(
    async (id: number) => request(id),
    options,
  )
}

export const useTopic = () => {
  const user = useUser();
  const queryClient = useQueryClient();

  const { successToast, errorToast, loadingToast } = useToast();

  const mutationOptions: MutateOptions = {
    onSuccess: async (data: any, variables: any) => {
      if (data.error)
        errorToast({ msg: data.error });
      else {
        successToast({ msg: "Topic Created Successfully" });
        queryClient.invalidateQueries(["topics",variables.topicData.subjectId],{exact: true})
        queryClient.invalidateQueries(["subjects"], {exact: true});
      }
    },
    onError: (error: any, variables: any) => {
      errorToast({ msg: "Internal Server Error" });
    },
  }

  const updateMutationOptions: MutateOptions = {
    onSuccess: async (data: any, variables: any) => {
      if (data.error)
        errorToast({ msg: data.error });
      else {
        successToast({ msg: "Topic Updated Successfully" });
        console.log(variables.topicData.subjectId);
        queryClient.invalidateQueries(["topics"])
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
        console.log(data);
        successToast({ msg: "Topic Deleted Successfully" });
        queryClient.invalidateQueries(["topics", data.topic.subjectId]);
        queryClient.invalidateQueries(["subjects"], {exact: true});
      }
    },
    onError: (error: any, variables: any) => {
      errorToast({ msg: "Internal Server Error" });
    },
  }

  const topicMutationQuery = useTopicMutation({ request: createTopicRequest, options: mutationOptions });
  const updatetopicMutationQuery = useUpdateTopicMutation({ request: updateTopicRequest, options: updateMutationOptions });

  const topicDeleteMutationQuery = useDeleteTopic({ request: deleteTopicRequest, options: deleteMutationOptions });

  const createTopic = (topicData: ITopic) => {
    if (!user?.id)
      return;
    topicMutationQuery.mutate({ topicData: topicData, userId: user?.id });
    if (topicMutationQuery.isLoading)
      loadingToast({ msg: "Creating topic" });
    return topicMutationQuery.data;
  }

  const updateTopic = (topicData: ITopic) => {
    if (!topicData.id)
      return;
    updatetopicMutationQuery.mutate({ topicData: topicData, id: topicData.id });
    if (updatetopicMutationQuery.isLoading)
      loadingToast({ msg: "Updating topic" });
    return updatetopicMutationQuery.data;
  }

  const deleteTopic = (id: number) => {
    topicDeleteMutationQuery.mutate(id);
    if (topicDeleteMutationQuery.isLoading)
      loadingToast({ msg: "Deleting topic" });
  }

  return { createTopic, deleteTopic, updateTopic };

}