import styled from '@emotion/styled';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  row-gap: 50px;
`;
export const CastItem = styled.li`
  width: calc((100% - 20px) / 3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  gap: 20px;
  font-weight: 500;
  @media (max-width: 650px) {
    width: calc((100% - 10px) / 2);
  }
`;
export const Img = styled.img`
  width: 200px;
  border-radius: 20px;
`;
export const ActorName = styled.h2`
  display: inline-block;
  padding: 10px;
  border-radius: 20px;
  color: #662549;
  margin-bottom: 20px;
  font-size: 20px;
  background-color: #e8bcb9;
`;
