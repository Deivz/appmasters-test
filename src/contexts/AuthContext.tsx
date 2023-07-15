import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
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
  user: User | null;
  isSubmitting: boolean;
}

export const AuthContext = createContext<AuthContextProviderType>({} as AuthContextProviderType);

export default function AuthContextProvider({ children }: AuthContextProviderProps) {

  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [user, setUser] = useState<User | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const login = async () => {
    try {
      setIsSubmitting(true);
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
    } finally {
      setIsSubmitting(false);
    }
  }

  const logout = async () => {
    try {
      await signOut(auth);

      navigate('/');
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
    <AuthContext.Provider value={{ email, setEmail, password, setPassword, login, logout, user, isSubmitting }}>
      {children}
    </AuthContext.Provider>
  );
}