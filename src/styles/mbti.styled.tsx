import styled from 'styled-components';

import { Container } from './common.styled';
import { Text1 } from './common.styled';
export const MbtiCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 100%;
  justify-items: center;
  align-items: center;
  padding: 7rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 4rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
`;

export const MbtiCardContainer = styled(Container)<{ isFlipped: boolean }>`
  perspective: 100rem; /*3d 효과 를 위해*/
  width: 70%;
  height: 40%;
  & > div {
    transform-style: preserve-3d;
    transition: transform 0.8s ease-in-out;
    transform: ${(props) =>
      props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'};
  }
  /*카드 톡 튀는 효과*/
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const MbtiCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  & > div {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }
`;
const CardBase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  border-radius: 1rem;
  transition: background-color 0.3s ease-in-out;
`;
export const CardFront = styled(CardBase)`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.text};
`;

export const CardBack = styled(CardFront)`
  background-color: #2d353f;
  transform: rotateY(180deg);
  border: 0.2rem solid ${({ theme }) => theme.color.primary};
`;

export const MbtiText = styled(Text1)`
  padding-top: 3rem;
`;
