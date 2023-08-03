import { useMutation, MutateOptions } from "@tanstack/react-query";
import { useToast } from "../useToast";
import { useRouter } from "next-nprogress-bar";
import { useSetRecoilState } from "recoil";
import { sessionAtom } from "@/utils/atoms/sessionAtom";
import { logoutRequest } from "@/api/auth";

const useLogoutMutation = ({request, options}:{request:() => Promise<any>, options:any}) => {
  return useMutation(
    async () => request,
    options
  )
}

export default function useLogout() {
  
  const {successToast, errorToast, loadingToast} = useToast();
  const router = useRouter();
  const setSession = useSetRecoilState(sessionAtom);

  const mutationOptions:MutateOptions = {
    onSuccess: (data:any, variables:any) => {
      console.log("success");
      if(data.error)
        errorToast({msg:data.error});
      else{
        successToast({msg:"Logged out successfully !"});
        router.push("/auth/signin");
        setSession({isAuthenticated:false, user:null});
      }
    },
    onError: (error:any,variables:any) => {
      console.log("error");
      console.log({error, variables});
      errorToast({msg:"Internal Server Error"});
    },
  }

  const logoutQuery = useLogoutMutation({request:logoutRequest,options:mutationOptions});

  const logout = () => {
    logoutQuery.mutate();
    if(logoutQuery.isLoading)
      loadingToast({msg:"Logging out"});
  }

  return {logout};
}