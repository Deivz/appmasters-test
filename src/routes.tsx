import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import SearchContextProvider from './contexts/searchContext';
import DefaultPage from './components/defaultPage';
import Games from './pages/games';
import NotFound from './pages/notFound';

export default function AppRouter() {

  const queryClient = new QueryClient();

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <SearchContextProvider>
          <Routes>
            <Route path='/' element={<DefaultPage />}>
              <Route index element={< Games />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </SearchContextProvider>
      </QueryClientProvider>
    </Router >
  );
}