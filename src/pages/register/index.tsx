import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/firebase'
import UserForm from '../../components/userForm'

export default function Register() {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log(auth);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <UserForm
      formAction={register}
      email={email}
      onEmailChange={setEmail}
      password={password}
      onPasswordChange={setPassword}
    />
  )
}
