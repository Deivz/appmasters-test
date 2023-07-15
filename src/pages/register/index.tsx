import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
import UserForm from '../../components/userForm';
import { RegisterContainer } from './Register.styles';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Register() {

  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');

  const checkPasswordsMatches = () => {
    if (passwordConfirm !== password) {
      throw new Error;
    }
  }

  const register = async () => {

    try {
      checkPasswordsMatches();
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error: any) {
      const errorCode = error.code;
      let message = '';

      switch (errorCode) {
        case 'auth/invalid-email':
          message = 'E-mail inválido';
          break;

        case 'auth/missing-password':
          message = 'Password não pode estar vazio';
          break;

        case 'auth/weak-password':
          message = 'Password deve possuir ao menos 6 caracteres';
          break;

        case 'auth/email-already-in-use':
          message = 'Usuário já cadastrado';
          break;

        default:
          message = 'As senhas digitadas não coincidem';
          break;
      }

      toast.error(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

  }

  return (
    <RegisterContainer>
      <h3>Faça seu cadastro!</h3>
      <UserForm
        formAction={register}
        email={email}
        onEmailChange={setEmail}
        password={password}
        onPasswordChange={setPassword}
        passwordConfirm={passwordConfirm}
        onPasswordConfirmChange={setPasswordConfirm}
        hasPasswordConfirm
      />
    </RegisterContainer>
  )
}
