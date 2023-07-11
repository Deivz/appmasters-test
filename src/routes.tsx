import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import DefaultPage from './components/defaultPage';
import Games from './pages/games';
import NotFound from './pages/notFound';
import Login from './pages/login';
import SearchContextProvider from './contexts/SearchContext';
import Register from './pages/register';
import AuthContextProvider from './contexts/AuthContext';
import ModalContextProvider from './contexts/ModalContext';

export default function AppRouter() {

  const queryClient = new QueryClient();

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <ModalContextProvider>
            <SearchContextProvider>
              <Routes>
                <Route path='/' element={<DefaultPage />}>
                  <Route index element={< Games />} />
                  {/* <Route path='favoritos' element={<NotFound />} /> */}
                  <Route path='auth' element={<Login />} />
                  <Route path='register' element={<Register />} />
                  <Route path='*' element={<NotFound />} />
                </Route>
              </Routes>
            </SearchContextProvider>
          </ModalContextProvider>
        </AuthContextProvider>
      </QueryClientProvider>
    </Router >
  );
}