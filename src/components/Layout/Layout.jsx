import { Button } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <nav>
        <Button to="/">Home</Button>
        <Button to="movies">Movies</Button>
      </nav>
      <Suspense fallback={<div>loading</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
