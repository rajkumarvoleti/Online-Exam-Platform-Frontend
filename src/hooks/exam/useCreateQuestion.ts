import { MutateOptions, useMutation, useQueryClient } from "@tanstack/react-query";
import useUser from "../useUser"
import { useToast } from "../useToast";
import { IQuestionAndAnswer } from "@/interfaces/examInterfaces";
import { createQuestionRequest, createQuestionsRequest, deleteQuestionRequest, deleteQuestionsRequest, updateQuestionRequest } from "@/api/question";

const useQuestionMutation = ({ request, options }: { request: ({ questionData, userId }: { questionData: IQuestionAndAnswer, userId: number }) => Promise<any>, options: any }) => {
  return useMutation(
    async ({ questionData, userId }: { questionData: IQuestionAndAnswer, userId: number }) => request({ questionData, userId }),
    options,
  )
}

const useCreateManyQuestionMutation = ({ request, options }: { request: ({ questionsData, userId }: { questionsData: IQuestionAndAnswer[], userId: number }) => Promise<any>, options: any }) => {
  return useMutation(
    async ({ questionsData, userId }: { questionsData: IQuestionAndAnswer[], userId: number }) => request({ questionsData, userId }),
    options,
  )
}

const useUpdateQuestionMutation = ({ request, options }: { request: ({ questionData, id, userId }: { questionData: IQuestionAndAnswer, id: number, userId: number }) => Promise<any>, options: any }) => {
  return useMutation(
    async ({ questionData, id, userId }: { questionData: IQuestionAndAnswer, id: number, userId:number }) => request({ questionData, id, userId }),
    options,
  )
}

const useDeleteQuestion = ({ request, options }: { request: (id: number) => Promise<any>, options: any }) => {
  return useMutation(
    async (id: number) => request(id),
    options,
  )
}

const useDeleteQuestions = ({ request, options }: { request: (ids: number[]) => Promise<any>, options: any }) => {
  return useMutation(
    async (ids: number[]) => request(ids),
    options,
  )
}

export const useQuestion = () => {
  const user = useUser();
  const queryClient = useQueryClient();

  const { successToast, errorToast, loadingToast } = useToast();

  const mutationOptions: MutateOptions = {
    onSuccess: async (data: any, variables: any) => {
      if (data.error)
        errorToast({ msg: data.error });
      else {
        successToast({ msg: "Question Created Successfully" });
        const topicId = data.question.topicId;
        queryClient.invalidateQueries(["questions",topicId], { exact: true });
      }
    },
    onError: (error: any, variables: any) => {
      errorToast({ msg: "Internal Server Error" });
    },
  }

  const createManyMutationOptions: MutateOptions = {
    onSuccess: async (data: any, variables: any) => {
      if (data.error)
        errorToast({ msg: data.error });
      else {
        successToast({ msg: "Questions Created Successfully" });
        // const topicId = data.question.topicId;
        // queryClient.invalidateQueries(["questions",topicId], { exact: true });
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
        successToast({ msg: "Question Updated Successfully" });
        const topicId = data.question.topicId;
        const questionId = data.question.questionId;
        queryClient.invalidateQueries(["questions",topicId], { exact: true })
        queryClient.invalidateQueries(["question",questionId], { exact: true })
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
        successToast({ msg: "Questions Deleted Successfully" });
        queryClient.invalidateQueries(["questions",data.topicId], { exact: true })
      }
    },
    onError: (error: any, variables: any) => {
      errorToast({ msg: "Internal Server Error" });
    },
  }

  const QuestionMutationQuery = useQuestionMutation({ request: createQuestionRequest, options: mutationOptions });
  const CreateManyQuestionsMutationQuery = useCreateManyQuestionMutation({ request: createQuestionsRequest, options: createManyMutationOptions });
  const updateQuestionMutationQuery = useUpdateQuestionMutation({ request: updateQuestionRequest, options: updateMutationOptions });

  const QuestionDeleteMutationQuery = useDeleteQuestion({ request: deleteQuestionRequest, options: deleteMutationOptions });

  const QuestionsDeleteMutationQuery = useDeleteQuestions({ request: deleteQuestionsRequest, options: deleteMutationOptions });

  const createQuestion = (questionData: IQuestionAndAnswer) => {
    if (!user?.id)
      return;
    QuestionMutationQuery.mutate({ questionData: questionData, userId: user?.id });
    if (QuestionMutationQuery.isLoading)
      loadingToast({ msg: "Creating Question" });
    return QuestionMutationQuery.data;
  }

  const createQuestions = (questionsData: IQuestionAndAnswer[]) => {
    if (!user?.id)
      return;
    CreateManyQuestionsMutationQuery.mutate({ questionsData: questionsData, userId: user?.id });
    if (CreateManyQuestionsMutationQuery.isLoading)
      loadingToast({ msg: "Creating Question" });
    return CreateManyQuestionsMutationQuery.data;
  }

  const updateQuestion = ({questionData, id}:{questionData: IQuestionAndAnswer, id:number}) => {
    if(!user || !user.id)
      return;
    updateQuestionMutationQuery.mutate({ questionData: questionData, id:id, userId:user?.id });
    if (updateQuestionMutationQuery.isLoading)
      loadingToast({ msg: "Updating Question" });
    return updateQuestionMutationQuery.data;
  }

  const deleteQuestion = async ({id, topicId}:{id: number,topicId:number}) => {
    QuestionDeleteMutationQuery.mutate(id);
    if (QuestionDeleteMutationQuery.isLoading)
      loadingToast({ msg: "Deleting Question" });
  }

  const deleteQuestions = async ({ids, topicId}:{ids: number[],topicId:number}) => {
    QuestionsDeleteMutationQuery.mutate(ids);
    if (QuestionsDeleteMutationQuery.isLoading)
      loadingToast({ msg: "Deleting Questions" });
  }

  return { createQuestion, deleteQuestion, updateQuestion, createQuestions, deleteQuestions };

}