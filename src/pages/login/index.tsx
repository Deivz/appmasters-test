import { useContext } from 'react'
import UserForm from '../../components/userForm'
import { AuthContext } from '../../contexts/AuthContext'
import { LoginContainer } from './Login.styles';

export default function Login() {

  const { email, password, setEmail, setPassword, login } = useContext(AuthContext);

  return (
    <LoginContainer>
      <UserForm
        formAction={login}
        email={email}
        onEmailChange={setEmail}
        password={password}
        onPasswordChange={setPassword}
      />
      <span>
        <h3>Caso ainda não possua cadastro entre com seu e-mail e senha que sua conta será criada!</h3>
      </span>
    </LoginContainer>
  )
}
