import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const List = styled.ul`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
export const Title = styled.p`
  font-size: 40px;
  color: wheat;
`;
export const Item = styled.li`
  width: calc((100% - 40px) / 5);
  text-align: center;
  @media (max-width: 650px) {
    width: calc((100% - 30px) / 4);
  }
  @media (max-width: 450px) {
    width: calc((100% - 20px) / 3);
  }
`;
export const Links = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 200px;
  border-radius: 20px;
`;
export const OopsImg = styled.img`
  width: 200px;

  border-radius: 20px;
  @media (min-width: 1070px) {
    height: 300px;
  }
`;
