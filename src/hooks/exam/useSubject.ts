import { MutateOptions, useMutation, useQueryClient } from "@tanstack/react-query";
import useUser from "../useUser"
import { useToast } from "../useToast";
import { ISubject } from "@/interfaces/examInterfaces";
import { createSubjectAndTopicRequest, createSubjectRequest, deleteSubjectRequest, updateSubjectRequest } from "@/api/subject";
import { useEffect, useState } from "react";
import { ICreateSubjectTopic } from "@/interfaces/formikInterfaces";
import { useRouter } from "next-nprogress-bar";
import { usePathname } from "next/navigation";

const useSubjectMutation = ({ request, options }: { request: ({ subjectData, userId }: { subjectData: ISubject, userId: number }) => Promise<any>, options: any }) => {
  return useMutation(
    async ({ subjectData, userId }: { subjectData: ISubject, userId: number }) => request({ subjectData, userId }),
    options,
  )
}

const useSubjectTopicsMutation = ({ request, options }: { request: ({ subjectTopicsData, userId }: { subjectTopicsData: ICreateSubjectTopic, userId: number }) => Promise<any>, options: any }) => {
  return useMutation(
    async ({ subjectTopicsData, userId }: { subjectTopicsData: ICreateSubjectTopic, userId: number }) => request({ subjectTopicsData, userId }),
    options,
  )
}

const useUpdateSubjectMutation = ({ request, options }: { request: ({ subjectData, id }: { subjectData: ISubject, id: number }) => Promise<any>, options: any }) => {
  return useMutation(
    async ({ subjectData, id }: { subjectData: ISubject, id: number }) => request({ subjectData, id }),
    options,
  )
}

const useDeleteSubject = ({ request, options }: { request: (id: number) => Promise<any>, options: any }) => {
  return useMutation(
    async (id: number) => request(id),
    options,
  )
}

export const useSubject = () => {
  const user = useUser();
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pathName = usePathname();

  const { successToast, errorToast, loadingToast } = useToast();

  const mutationOptions: MutateOptions = {
    onSuccess: async (data: any, variables: any) => {
      if (data.error)
        errorToast({ msg: data.error });
      else {
        successToast({ msg: "Subject Created Successfully" });
        // queryClient.setQueryData(["subjects"],(oldData:any) =>{
        //   console.log(oldData);
        //   return {...oldData, subjects: [...oldData.subjects, data.subject]};
        // });
        const id:number = data.subjectAndTopics.id;
        router.push(`/user/questionBank/subject/${id}`);
        queryClient.invalidateQueries(["subjects"], { exact: true });
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
        successToast({ msg: "Subject Updated Successfully" });
        queryClient.invalidateQueries(["subjects"], { exact: true })
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
        successToast({ msg: "Subject Deleted Successfully" });
        const id = variables
        queryClient.invalidateQueries(["subjects"], { exact: true });
        if(pathName === `/user/questionBank/subject/${id}`)
          router.push("/user/questionBank");
      }
    },
    onError: (error: any, variables: any) => {
      errorToast({ msg: "Internal Server Error" });
    },
  }

  const subjectMutationQuery = useSubjectMutation({ request: createSubjectRequest, options: mutationOptions });
  const subjectTopicsMutationQuery = useSubjectTopicsMutation({ request: createSubjectAndTopicRequest, options: mutationOptions });
  const updateSubjectMutationQuery = useUpdateSubjectMutation({ request: updateSubjectRequest, options: updateMutationOptions });
  const subjectDeleteMutationQuery = useDeleteSubject({ request: deleteSubjectRequest, options: deleteMutationOptions });

  const isLoading = subjectMutationQuery.isLoading || updateSubjectMutationQuery.isLoading || subjectDeleteMutationQuery.isLoading || subjectTopicsMutationQuery.isLoading;

  useEffect(() => {
    if(isLoading) setLoading(prev => true);
    else setLoading(prev => false);
  }, [isLoading])

  const createSubject = (subjectData: ISubject) => {
    if (!user?.id)
      return;
    subjectMutationQuery.mutate({ subjectData: subjectData, userId: user?.id });
    return subjectMutationQuery.data;
  }

  const createSubjectAndTopics = (subjectTopicsData: ICreateSubjectTopic) => {
    if (!user?.id)
      return;
    subjectTopicsMutationQuery.mutate({ subjectTopicsData, userId: user?.id });
    return subjectMutationQuery.data;
  }

  const updateSubject = (subjectData: ISubject) => {
    if (!subjectData.id)
      return;
    updateSubjectMutationQuery.mutate({ subjectData: subjectData, id: subjectData.id });
    return updateSubjectMutationQuery.data;
  }

  const deleteSubject = (id: number) => {
    subjectDeleteMutationQuery.mutate(id);
  }

  return { createSubject, deleteSubject, updateSubject, loading, createSubjectAndTopics };

}