import { MutateOptions, useMutation, useQueryClient } from "@tanstack/react-query";
import useUser from "../useUser"
import { useToast } from "../useToast";
import { IQuestionAndAnswer } from "@/interfaces/examInterfaces";
import { createQuestionRequest, createQuestionsRequest, deleteQuestionRequest, deleteQuestionsRequest, updateQuestionRequest } from "@/api/question";
import { useEffect, useState } from "react";
import { useRouter } from "next-nprogress-bar";

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
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { successToast, errorToast, loadingToast } = useToast();

  useEffect(() => {
    
  }, [])
  

  const mutationOptions: MutateOptions = {
    onSuccess: async (data: any, variables: any) => {
      if (data.error)
        errorToast({ msg: data.error });
      else {
        successToast({ msg: "Question Created Successfully" });
        const topicId = data.question.topicId;
        await queryClient.invalidateQueries(["questions",topicId], { exact: true });
        router.push(`/user/questionBank/topic/${topicId}`);
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
        const topicId = data.topicId;
        console.log(topicId);
        await queryClient.invalidateQueries(["questions",topicId], { exact: true });
        router.push(`/user/questionBank/topic/${topicId}`);
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
        console.log(data);
        const topicId = data.question.topicId;
        const questionId = data.question.id;
        await queryClient.invalidateQueries(["questions",topicId], { exact: true })
        await queryClient.invalidateQueries(["question",questionId], { exact: true })
        router.push(`/user/questionBank/topic/${topicId}`);
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
        await queryClient.invalidateQueries(["questions",data.topicId], { exact: true })
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

  useEffect(() => {
    const isLoading = QuestionMutationQuery.isLoading || CreateManyQuestionsMutationQuery.isLoading || updateQuestionMutationQuery.isLoading || QuestionDeleteMutationQuery.isLoading || QuestionsDeleteMutationQuery.isLoading;
    if(isLoading)
      setLoading(prev => true);
    else
      setLoading(prev => false);
  }, [QuestionMutationQuery.isLoading,CreateManyQuestionsMutationQuery.isLoading,updateQuestionMutationQuery.isLoading,QuestionDeleteMutationQuery.isLoading,QuestionsDeleteMutationQuery.isLoading])

  const createQuestion = (questionData: IQuestionAndAnswer) => {
    if (!user?.id)
      return;
    QuestionMutationQuery.mutate({ questionData: questionData, userId: user?.id });
    return QuestionMutationQuery.data;
  }

  const createQuestions = (questionsData: IQuestionAndAnswer[]) => {
    if (!user?.id)
      return;
    if(questionsData.length === 0)
      return;
    CreateManyQuestionsMutationQuery.mutate({ questionsData: questionsData, userId: user?.id });
    return CreateManyQuestionsMutationQuery.data;
  }

  const updateQuestion = ({questionData, id}:{questionData: IQuestionAndAnswer, id:number}) => {
    if(!user || !user.id)
      return;
    updateQuestionMutationQuery.mutate({ questionData: questionData, id:id, userId:user?.id });
    return updateQuestionMutationQuery.data;
  }

  const deleteQuestion = async ({id, topicId}:{id: number,topicId:number}) => {
    QuestionDeleteMutationQuery.mutate(id);
  }

  const deleteQuestions = async ({ids, topicId}:{ids: number[],topicId:number}) => {
    QuestionsDeleteMutationQuery.mutate(ids);
  }

  return { createQuestion, deleteQuestion, updateQuestion, createQuestions, deleteQuestions, loading };

}