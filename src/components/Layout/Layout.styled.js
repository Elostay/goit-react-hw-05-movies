import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Button = styled(NavLink)`
  &.active {
    color: white;
  }
  font-size: 30px;
`;
export const Loading = styled.p`
  color: white;
  font-size: 30px;
`;
