import { ReactNode, createContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from "react-router-dom";

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext();

export default function AuthContextProvider({ children }: AuthContextProviderProps) {

  const { data, error, isLoading } = useQuery<Array<GameData>>('data', () => {

    const timeOutId = setTimeout(() => {
      setErrorMessage('O servidor demorou para responder, tente mais tarde');
      controller.abort();
    }, 5000);

    const response = fetch('https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/', {
      headers: {
        'dev-email-address': 'carlosd_oliveira@hotmail.com'
      },
      signal
    })
      .then((response) => {
        clearTimeout(timeOutId);

        if (response.ok) {
          return response.json();
        }

        setErrorMessage('O servidor falhou em responder, tente recarregar a página');
        controller.abort();
      })
      .catch((error) => {
        throw error;
      });

    return response;
  }, {
    retry: false,
    staleTime: Infinity,
    refetchOnWindowFocus: true,
    refetchOnReconnect: false,
    refetchIntervalInBackground: false,
    refetchInterval: false
  });

  // const navigate = useNavigate();
  // const [user, setUser] = useState('');
  // const [loading, setLoading] = useState(true);
  // const [validUser, setValidUser] = useState(true);
  // const [validPassword, setValidPassword] = useState(true);

  // useEffect(() => {
  //   const storedUser = localStorage.getItem('user');

  //   if (storedUser) {
  //     setUser(JSON.parse(storedUser));
  //   }

  //   setLoading(false);
  // }, []);

  // function logar(userData) {
  //   api
  //     .get('/users')
  //     .then((response) => {
  //       const expectedUser = response.data.find(element => element.email === userData.email);
  //       const expectedPassword = response.data.find(element => element.senha === userData.senha);

  //       if (expectedUser) {
  //         setValidUser(true);
  //         if (expectedPassword) {
  //           setValidPassword(true);
  //           setUser(expectedUser);
  //           localStorage.setItem('user', JSON.stringify({
  //             id: expectedUser.id,
  //             email: expectedUser.email
  //           }));
  //           navigate('/home');
  //         } else {
  //           setValidPassword(false);
  //         }
  //       } else {
  //         setValidUser(false);
  //       }
  //     })
  // }

  // function logout() {
  //   setUser('');
  //   localStorage.setItem('user', JSON.stringify({
  //     id: '',
  //     email: ''
  //   }));
  // }

  // return (
  //   <AuthContext.Provider value={{ authenticated: !!user, loading, logar, logout, user, setUser, validUser, validPassword }}>
  //     {children}
  //   </AuthContext.Provider>
  // );
}