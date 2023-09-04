import { signupRequest } from "@/api/auth"
import { useToast } from "../useToast";
import { ISignupForm } from "@/interfaces/formikInterfaces";
import { useRouter } from "next-nprogress-bar";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";

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
  const [loading, setLoading] = useState(false);

  const signupQuery = useSignupMutation({request:signupRequest})

  useEffect(() => {
    setLoading(prev => signupQuery.isLoading);
  }, [signupQuery.isLoading])

  const signup = ({signupOptions}:{signupOptions:ISignupForm}) => {

    signupQuery.mutate(signupOptions);
    return signupQuery.data;
  }

  return {signup, loading};
}