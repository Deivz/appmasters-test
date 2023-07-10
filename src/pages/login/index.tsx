import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/firebase'
import UserForm from '../../components/userForm'

export default function Login() {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log(auth);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <UserForm
      formAction={signIn}
      email={email}
      onEmailChange={setEmail}
      password={password}
      onPasswordChange={setPassword}
    />
  )
}