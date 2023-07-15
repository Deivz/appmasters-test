import { Outlet } from 'react-router-dom';
import Header from '../header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { MainContainer } from './DefaultPage.style';

export default function DefaultPage() {

  const [active, setActive] = useState<boolean>(false);

  return (
    <>
      <Header active={active} setActive={setActive} />
      <ToastContainer style={{minWidth: '40vw'}}/>
      <MainContainer active={active}>
        <Outlet />
      </MainContainer>
    </>
  );
}