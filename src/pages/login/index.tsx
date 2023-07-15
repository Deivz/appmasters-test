import { useContext } from 'react'
import UserForm from '../../components/userForm'
import { AuthContext } from '../../contexts/AuthContext'
import { NavLink } from 'react-router-dom';
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
        <h3>Ainda não possui cadastro? Cadastre-se <NavLink to='/register'>aqui</NavLink></h3>
      </span>
    </LoginContainer>
  )
}
