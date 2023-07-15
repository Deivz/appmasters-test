import { Outlet } from 'react-router-dom';
import Header from '../header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function DefaultPage() {

  return (
    <>
      <Header />
      <ToastContainer style={{minWidth: '40vw'}}/>
      <main>
        <Outlet />
      </main>
    </>
  );
}