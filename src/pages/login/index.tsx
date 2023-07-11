import { useContext } from 'react'
import UserForm from '../../components/userForm'
import { AuthContext } from '../../contexts/AuthContext'

export default function Login() {

  const { email, password, setEmail, setPassword, login } = useContext(AuthContext);

  return (
    <UserForm
      formAction={login}
      email={email}
      onEmailChange={setEmail}
      password={password}
      onPasswordChange={setPassword}
    />
  )
}
