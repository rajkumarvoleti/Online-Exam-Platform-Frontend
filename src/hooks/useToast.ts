import { toast } from 'react-toastify';

const toastOptions:any = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
}

export const dismissAllToasts = () =>  toast.dismiss();

export const useToast = () => {
  const successToast = ({msg}:{msg:string}) => {
    toast.success(msg, toastOptions);
  }
  const errorToast = ({msg}:{msg:string}) => {
    toast.error(msg, toastOptions);
  }
  const loadingToast = ({msg}:{msg:string}) => {
    toast.loading(msg, toastOptions);
  }
  const infoToast = ({msg}:{msg:string}) =>{
    toast.info(msg, toastOptions);
  }

  return {successToast, errorToast, loadingToast, infoToast, dismissAllToasts};
}