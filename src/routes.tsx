import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import DefaultPage from './components/defaultPage';
import Games from './pages/games';
import NotFound from './pages/notFound';
import Login from './pages/login';
import Register from './pages/register';
import AuthContextProvider from './contexts/AuthContext';
import ModalContextProvider from './contexts/ModalContext';
import FavsAndRatingContextProvider from './contexts/GamesContext';
import SearchContextProvider from './contexts/SearchContext';
import MenuContextProvider from './contexts/MenuContext';

export default function AppRouter() {

  const queryClient = new QueryClient();

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <SearchContextProvider>
          <AuthContextProvider>
            <ModalContextProvider>
              <FavsAndRatingContextProvider>
                <MenuContextProvider>
                  <Routes>
                    <Route path='/' element={<DefaultPage />}>
                      <Route index element={< Games />} />
                      <Route path='auth' element={<Login />} />
                      <Route path='register' element={<Register />} />
                      <Route path='*' element={<NotFound />} />
                    </Route>
                  </Routes>
                </MenuContextProvider>
              </FavsAndRatingContextProvider>
            </ModalContextProvider>
          </AuthContextProvider>
        </SearchContextProvider>
      </QueryClientProvider>
    </Router >
  );
}