"use client"

import ExternalLoginButton from '../buttons/ExternalLoginButton';
import MicrosoftIcon from '@/assets/formik/microsoft-icon.svg';
import { useLogin } from '@/hooks/auth/useLogin';

export default function MicrosoftLoginButton() {

  const { microsoftLogin } = useLogin();

  return (
    <ExternalLoginButton login={microsoftLogin} ButtonIcon={MicrosoftIcon}/>
  )
}