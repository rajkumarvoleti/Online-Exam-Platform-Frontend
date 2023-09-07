"use client"

import ExternalLoginButton from '../buttons/ExternalLoginButton';
import GoogleIcon from '@/assets/formik/google-icon.svg';
import { useLogin } from '@/hooks/auth/useLogin';

export default function GoogleLoginButton() {

  const {googleLogin} = useLogin();

  return (
    <ExternalLoginButton login={googleLogin} ButtonIcon={GoogleIcon}/>
  )
}