import { internalLoginRequest, signupRequest } from "@/api/auth"
import { useToast } from "../useToast";
import { ISignupForm } from "@/interfaces/formikInterfaces";
import { useRouter } from "next-nprogress-bar";
import { useMutation } from "@tanstack/react-query";

const useSignupMutation = ({request}:{request:({signupOptions}:{signupOptions:ISignupForm}) => Promise<any>}) => {

  const { successToast, errorToast } = useToast();
  const router = useRouter();

  return useMutation(
    async (data: ISignupForm) => request({signupOptions:data}),
    {
      onSuccess: (data:any, variables:any) => {
        console.log("success");
        console.log({data, variables});
        if(data.error)
          errorToast({msg:data.error});
        else{
          successToast({msg:"Account created successfully. Please login to continue"});
          router.push("/auth/signin");
        }
      },
      onError: (error:any,variables:any) => {
        console.log("error");
        console.log({error, variables});
        errorToast({msg:"Internal Server Error"});
      },
    }
  )
}

export const useSignup = () => {
  const {loadingToast} = useToast();

  const signupQuery = useSignupMutation({request:signupRequest})

  const signup = ({signupOptions}:{signupOptions:ISignupForm}) => {

    signupQuery.mutate(signupOptions);
    if(signupQuery.isLoading)
      loadingToast({msg: "Creating your account"});
    return signupQuery.data;
  }

  return {signup};
}