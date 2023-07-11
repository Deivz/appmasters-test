import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { ReactNode, createContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from '../config/firebase';

interface AuthContextProviderProps {
  children: ReactNode;
}

interface User {
  email: string;
  password?: string;
}

interface AuthContextProviderType {
  errorMessage: string;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  modalIsOpen: boolean;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  login: () => void;
  logout: () => void;
  user: User | null;
}

export const AuthContext = createContext<AuthContextProviderType>({} as AuthContextProviderType);

export default function AuthContextProvider({ children }: AuthContextProviderProps) {

  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [user, setUser] = useState<User | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);


  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error: any) {
      const errorCode = error.code;
      let message = '';

      switch (errorCode) {
        case 'auth/user-not-found':
          message = 'Usuário não encontrado.';
          break;
        case 'auth/wrong-password':
          message = 'Senha incorreta.';
          break;

        default:
          message = 'Erro de autenticação.';
          break;
      }

      setErrorMessage(message);
      setModalIsOpen(true);
    }
  }

  const logout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      setErrorMessage('Não foi possível realizar o logout, consulte o suporte técnico');
      setModalIsOpen(true);
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
    <AuthContext.Provider value={{ errorMessage, email, setEmail, password, setPassword, login, logout, user, setModalIsOpen, modalIsOpen }}>
      {children}
    </AuthContext.Provider>
  );
}