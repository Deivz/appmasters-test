import { useContext, useState } from 'react'
import UserForm from '../../components/userForm'
import { AuthContext } from '../../contexts/AuthContext'
import CustomModal from '../../components/customModal';

export default function Login() {

  const { email, password, setEmail, setPassword, login, errorMessage, setModalIsOpen, modalIsOpen } = useContext(AuthContext);

  return (
    <>
    <UserForm
      formAction={login}
      email={email}
      onEmailChange={setEmail}
      password={password}
      onPasswordChange={setPassword}
    />
      <CustomModal
        dialog={true}
        text={errorMessage}
        modalDispatcher={setModalIsOpen}
        modalState={modalIsOpen}
      />
    </>
  )
}
