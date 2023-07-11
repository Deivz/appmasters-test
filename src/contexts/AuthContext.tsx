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

export const AuthContext = createContext<any>({});

export default function AuthContextProvider({ children }: AuthContextProviderProps) {

  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [user, setUser] = useState<User | null>(null);

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log(auth);
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

      alert(message);

      setErrorMessage(message);
    }
  }

  const logout = async () => {
    try {
      await signOut(auth);
      console.log(auth);
    } catch (error) {
      setErrorMessage('Não foi possível realizar o logout, consulte o suporte técnico');
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
    <AuthContext.Provider value={{ errorMessage, email, setEmail, password, setPassword, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
}