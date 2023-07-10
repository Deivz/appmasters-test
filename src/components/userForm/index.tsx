import DefaultInput from '../../components/defaultInput'
import PasswordInput from '../../components/passwordInput'
import { ButtonContainer } from '../../styles/components/Button.styles'
import { FormContainer } from './UserForm.styles'

interface UserFormProps {
  formAction: () => void;
  email: string;
  onEmailChange: (email: string) => void;
  password: string;
  onPasswordChange: (password: string) => void;
}

export default function UserForm({ formAction, email, onEmailChange, password, onPasswordChange}: UserFormProps) {
  return (
    <FormContainer>
      <DefaultInput label='E-mail' type='e-mail' id='email' placeholder='Digite seu e-mail' value={email} onChange={onEmailChange} />
      <PasswordInput label='Senha' id='senha' placeholder='Digite sua senha' value={password} onChange={onPasswordChange} />
      <ButtonContainer>
        <input type='button' value='Entrar' onClick={formAction} />
      </ButtonContainer>
    </FormContainer>
  )
}
