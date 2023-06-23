import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import SearchContextProvider from './contexts/searchContext';
import DefaultPage from './components/defaultPage';
import Games from './pages/games';

export default function AppRouter() {

  const queryClient = new QueryClient();

  return (
    <Router>
      <QueryClientProvider client={queryClient}>

        <SearchContextProvider>
          <Routes>
            <Route path='/' element={<DefaultPage />}>
              <Route index element={< Games />} />
              {/* <Route path='login' element={<Login />} />
            <Route path='produtos' element={<Private><Produtos /></Private>} />
            <Route path='/produtos/adicionar' element={<Private><AdicionarProduto /></Private>} />
          <Route path='/produtos/:id' element={<DescricaoProduto />} /> */}
            </Route>
          </Routes>
        </SearchContextProvider>
      </QueryClientProvider>
    </Router >
  );
}