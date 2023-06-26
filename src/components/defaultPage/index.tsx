import { Outlet } from 'react-router-dom';
import Header from '../header';

export default function DefaultPage() {

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}