import { MutateOptions, useMutation, useQueryClient } from "@tanstack/react-query";
import useUser from "../useUser"
import { useToast } from "../useToast";
import { ISubject } from "@/interfaces/examInterfaces";
import { createSubjectRequest, deleteSubjectRequest, updateSubjectRequest } from "@/api/subject";

const useSubjectMutation = ({ request, options }: { request: ({ subjectData, userId }: { subjectData: ISubject, userId: number }) => Promise<any>, options: any }) => {
  return useMutation(
    async ({ subjectData, userId }: { subjectData: ISubject, userId: number }) => request({ subjectData, userId }),
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

  const { successToast, errorToast, loadingToast } = useToast();

  const mutationOptions: MutateOptions = {
    onSuccess: async (data: any, variables: any) => {
      if (data.error)
        errorToast({ msg: data.error });
      else {
        successToast({ msg: "Subject Created Successfully" });
        queryClient.setQueryData(["subjects"],(oldData:any) =>{
          console.log(oldData);
          return {...oldData, subjects: [...oldData.subjects, data.subject]};
        });
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
        console.log(data);
        queryClient.invalidateQueries(["subjects"], { exact: true });
      }
    },
    onError: (error: any, variables: any) => {
      errorToast({ msg: "Internal Server Error" });
    },
  }

  const subjectMutationQuery = useSubjectMutation({ request: createSubjectRequest, options: mutationOptions });
  const updateSubjectMutationQuery = useUpdateSubjectMutation({ request: updateSubjectRequest, options: updateMutationOptions });

  const subjectDeleteMutationQuery = useDeleteSubject({ request: deleteSubjectRequest, options: deleteMutationOptions });

  const createSubject = (subjectData: ISubject) => {
    if (!user?.id)
      return;
    subjectMutationQuery.mutate({ subjectData: subjectData, userId: user?.id });
    if (subjectMutationQuery.isLoading)
      loadingToast({ msg: "Creating subject" });
    return subjectMutationQuery.data;
  }

  const updateSubject = (subjectData: ISubject) => {
    if (!subjectData.id)
      return;
    updateSubjectMutationQuery.mutate({ subjectData: subjectData, id: subjectData.id });
    if (updateSubjectMutationQuery.isLoading)
      loadingToast({ msg: "Updating subject" });
    return updateSubjectMutationQuery.data;
  }

  const deleteSubject = (id: number) => {
    subjectDeleteMutationQuery.mutate(id);
    if (subjectDeleteMutationQuery.isLoading)
      loadingToast({ msg: "Deleting subject" });
  }

  return { createSubject, deleteSubject, updateSubject };

}