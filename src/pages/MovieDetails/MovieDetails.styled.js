import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';
export const BtnLoadAddInfo = styled(NavLink)`
  &.active {
    color: white;
  }
  font-size: 30px;
`;
export const GoBack = styled(Link)`
  display: block;
  margin: 100px 0 50px 0;
  font-size: 20px;
  max-width: 120px;
  background-color: #ae445a;
  padding: 15px;
  border-radius: 20px;
  color: #e8bcb9;
`;
export const BtnLoadAddInfoContainer = styled.div`
  display: flex;
  gap: 30px;
  margin: 100px 0 50px 0;
`;

export const Container = styled.div`
  display: flex;
  gap: 50px;
  max-width: 720px;
  margin: 30px 0 30px 0;
  margin: 0 auto;
  text-align: center;
`;
export const TitleMovie = styled.h2`
  font-size: 30px;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 200px;
  border-radius: 20px;
`;
export const Genres = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;
export const GenresSpan = styled.div`
  font-weight: 700;
  font-size: 20px;
`;
