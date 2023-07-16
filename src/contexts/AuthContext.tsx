import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { ReactNode, createContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from '../config/firebase';
import { toast } from 'react-toastify';

interface AuthContextProviderProps {
  children: ReactNode;
}

interface User {
  email: string;
  password?: string;
}

interface AuthContextProviderType {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  login: () => void;
  logout: () => void;
  register: () => void;
  user: User | null;
}

export const AuthContext = createContext<AuthContextProviderType>({} as AuthContextProviderType);

export default function AuthContextProvider({ children }: AuthContextProviderProps) {

  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [user, setUser] = useState<User | null>(null);

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
      window.location.reload();
    } catch (error: any) {
      const errorCode = error.code;
      let message = '';

      switch (errorCode) {
        case 'auth/user-not-found':
          message = 'E-mail não cadastrado, sua conta será criada!'
          register();
          break;
        case 'auth/wrong-password':
          message = 'Senha incorreta.';
          break;

        default:
          message = 'Erro de autenticação.';
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

  const logout = async () => {
    try {
      await signOut(auth);

      window.location.reload();
    } catch (error) {
      toast.error('Não foi possível realizar o logout, consulte o suporte técnico', {
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

  const register = async () => {

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success('Conta criada com sucesso!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
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

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user as User);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ email, setEmail, password, setPassword, login, logout, register, user }}>
      {children}
    </AuthContext.Provider>
  );
}