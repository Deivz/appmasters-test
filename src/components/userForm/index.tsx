import DefaultInput from '../../components/defaultInput'
import PasswordInput from '../../components/passwordInput'
import { AuthContext } from '../../contexts/AuthContext'
import { ButtonContainer } from '../../styles/components/Button.styles'
import { FormContainer } from './UserForm.styles'
import { useContext } from 'react'

interface UserFormProps {
  formAction: () => void;
  email: string;
  onEmailChange: (email: string) => void;
  password: string;
  onPasswordChange: (password: string) => void;
  hasPasswordConfirm?: boolean;
  passwordConfirm?: string;
  onPasswordConfirmChange?: (password: string) => void;
}

export default function UserForm({
  formAction, email, onEmailChange, password, onPasswordChange, hasPasswordConfirm = false, passwordConfirm, onPasswordConfirmChange
}: UserFormProps) {

  const { isSubmitting } = useContext(AuthContext)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formAction();
    // if(!isSubmitting){
    //   event.currentTarget.submit();
    // }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <DefaultInput label='E-mail' type='e-mail' id='email' placeholder='Digite seu e-mail' value={email} onChange={onEmailChange} />
      <PasswordInput label='Senha' id='password' placeholder='Digite sua senha' value={password} onChange={onPasswordChange} />
      {
        (hasPasswordConfirm && onPasswordConfirmChange) &&
          <PasswordInput label='Confirmar senha' id='passwordConfirm' placeholder='Digite sua senha' value={passwordConfirm} onChange={onPasswordConfirmChange} />
      }
      <ButtonContainer>
        <input type='submit' value='Entrar' />
      </ButtonContainer>
    </FormContainer>
  )
}
