import { Button } from './Layout.styled';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <nav>
        <Button to="/">Home</Button>
        <Button to="movies">Movies</Button>
      </nav>
      <Outlet />
    </>
  );
};
