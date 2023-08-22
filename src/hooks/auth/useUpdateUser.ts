import { MutateOptions } from "react-query";
import { useToast } from "../useToast";
import { useSetRecoilState } from "recoil";
import { sessionAtom } from "@/utils/atoms/sessionAtom";
import { IUserDetailsForm } from "@/interfaces/formikInterfaces";
import { IUser } from "@/interfaces/userInterfaces";
import { useMutation } from "@tanstack/react-query";
import { updatePasswordRequest, updateUserRequest } from "@/api/auth";
import useUser from "../useUser";

const useUpdateUserMutation = ({request, options}:{request:(data:IUser) => Promise<any>, options:any}) => {
  return useMutation(
    async (data:IUser) => request(data),
    options,
  )
}

const useUpdatePasswordMutation = ({request, options}:{request:({currentPassword, newPassword}:{currentPassword: string, newPassword: string}) => Promise<any>, options:any}) => {
  return useMutation(
    async ({currentPassword, newPassword}:{currentPassword: string, newPassword: string}) => request({currentPassword,newPassword}),
    options,
  )
}

export const useUpdateUser = () => {

  const currentUser = useUser();
  const {successToast, errorToast, loadingToast} = useToast();
  const setSession = useSetRecoilState(sessionAtom);

  const mutationOptions:MutateOptions = {
    onSuccess: (data:any, variables:any) => {
      console.log("success");
      console.log({data, variables});
      if(data.error)
        errorToast({msg:data.error});
      else{
        successToast({msg:"Updated user successfully !"});
        setSession({isAuthenticated:true, user:data.user});
      }
    },
    onError: (error:any,variables:any) => {
      console.log("error");
      console.log({error, variables});
      errorToast({msg:"Internal Server Error"});
    },
  }

  const updateUserQuery = useUpdateUserMutation({request:updateUserRequest,options:mutationOptions});
  const updatePasswordQuery = useUpdatePasswordMutation({request:updatePasswordRequest,options:mutationOptions});

  const updateUser = async (userDetails:IUserDetailsForm) => {
    if(!currentUser)
      return;
    console.log(userDetails);
    const user:IUser = {
      id:currentUser.id,
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      email: userDetails.email,
      bio: userDetails.bio,
      phoneNumber: userDetails.phoneNumber,
      tagline: userDetails.tagline,
      country: userDetails.country.label,
      timezone: userDetails.timezone.label
    }
    console.log(user);

    updateUserQuery.mutate(user);
    if(updateUserQuery.isLoading)
      loadingToast({msg:"Updating User"});
    return updateUserQuery.data;
  }

  const updatePassword = async ({currentPassword, newPassword}:{currentPassword: string, newPassword: string}) => {
    updatePasswordQuery.mutate({currentPassword,newPassword});
    if(updatePasswordQuery.isLoading)
      loadingToast({msg:"Updating User"});
    return updatePasswordQuery.data;
  }

  return {updateUser, updatePassword}
}