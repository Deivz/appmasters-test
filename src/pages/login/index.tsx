import { useState } from 'react'
import DefaultInput from '../../components/defaultInput'
import PasswordInput from '../../components/passwordInput'
import { ButtonContainer } from '../../styles/components/Button.styles'
import { LoginContainer } from './Login.styles'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/firebase'

export default function Login() {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <LoginContainer>
      <DefaultInput label='E-mail' type='e-mail' id='email' placeholder='Digite seu e-mail' value={email} onChange={setEmail} />
      <PasswordInput label='Senha' id='senha' placeholder='Digite sua senha' value={password} onChange={setPassword} />
      <ButtonContainer>
        <input type='button' value='Entrar' onClick={signIn} />
      </ButtonContainer>
    </LoginContainer>
  )
}
