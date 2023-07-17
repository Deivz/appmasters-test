import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import DefaultPage from './components/defaultPage';
import Games from './pages/games';
import NotFound from './pages/notFound';
import Login from './pages/login';
import AuthContextProvider from './contexts/AuthContext';
import ModalContextProvider from './contexts/ModalContext';
import MenuContextProvider from './contexts/MenuContext';
import GameSearchContextProvider from './contexts/GameSearchContext';
import GamesContextProvider from './contexts/GamesContext';

export default function AppRouter() {

  const queryClient = new QueryClient();

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <GameSearchContextProvider>
          <AuthContextProvider>
            <ModalContextProvider>
              <GamesContextProvider>
                <MenuContextProvider>
                  <Routes>
                    <Route path='/' element={<DefaultPage />}>
                      <Route index element={< Games />} />
                      <Route path='auth' element={<Login />} />
                      <Route path='register' element={<Login />} />
                      <Route path='*' element={<NotFound />} />
                    </Route>
                  </Routes>
                </MenuContextProvider>
              </GamesContextProvider>
            </ModalContextProvider>
          </AuthContextProvider>
        </GameSearchContextProvider>
      </QueryClientProvider>
    </Router >
  );
}