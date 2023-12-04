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
`;
export const Links = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
`;
