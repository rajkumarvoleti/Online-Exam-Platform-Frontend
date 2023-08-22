import { externalLoginRequest, internalLoginRequest } from "@/api/auth"
import { useToast } from "../useToast";
import { useSetRecoilState } from 'recoil';
import { sessionAtom } from "@/utils/atoms/sessionAtom";
import { useGoogleLogin } from '@react-oauth/google';
import { useMsal } from '@azure/msal-react';
import { useRouter } from "next-nprogress-bar";
import { useMutation, MutateOptions } from "@tanstack/react-query";
import { IExternalLoginOptions, IInternalLoginOptions } from "@/interfaces/authInterfaces";

const useInternalLoginMutation = ({request, options}:{request:(data:IInternalLoginOptions) => Promise<any>, options:any}) => {
  return useMutation(
    async (data:IInternalLoginOptions) => request(data),
    options
  )
}

const useExternalLoginMutation = ({request, options}:{request:(data:IExternalLoginOptions) => Promise<any>, options:any}) => {
  return useMutation(
    async (data:IExternalLoginOptions) => request(data),
    options,
  )
}

export const useLogin = () => {
  const { instance } = useMsal();
  const {successToast, errorToast, loadingToast} = useToast();
  const router = useRouter();
  const setSession = useSetRecoilState(sessionAtom);


  const mutationOptions:MutateOptions = {
    onSuccess: (data:any, variables:any) => {
      console.log("success");
      console.log({data, variables});
      if(data.error)
        errorToast({msg:data.error});
      else{
        successToast({msg:"Logged in successfully !"});
        setSession({isAuthenticated:true, user:data.user});
        router.push("/user/dashboard");
      }
    },
    onError: (error:any,variables:any) => {
      console.log("error");
      console.log({error, variables});
      errorToast({msg:"Internal Server Error"});
    },
  }

  const internalLoginQuery = useInternalLoginMutation({request:internalLoginRequest,options:mutationOptions});
  const externalLoginQuery = useExternalLoginMutation({request:externalLoginRequest,options:mutationOptions});

  const internalLogin = async (loginData:IInternalLoginOptions) => {
    internalLoginQuery.mutate(loginData);
    if(internalLoginQuery.isLoading)
      loadingToast({msg:"Logging in"});
    return internalLoginQuery.data;
  }

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) =>{
      externalLoginQuery.mutate({accessToken:tokenResponse.access_token,service:"google"});
      if(externalLoginQuery.isLoading)
        loadingToast({msg:"Logging in"});
      return externalLoginQuery.data;
    },
    onError: (error) => console.log(error)
  });

  const microsoftLogin = async () => {
    instance
      .loginPopup({
        scopes: ["email"]
      })
      .then(async (result) =>{
        externalLoginQuery.mutate({accessToken:result.idToken,service:"microsoft"});
        if(externalLoginQuery.isLoading)
          loadingToast({msg:"Logging in"});
        return externalLoginQuery.data;
      } )
      .catch((e) => console.error(e));
  };

  return {internalLogin, googleLogin, microsoftLogin};
}