import styled from 'styled-components';

import { Container } from './container.styled';
import { theme } from './theme';

export const MbtiCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 100%;
  justify-items: center;
  align-items: center;
  padding: 7rem;
`;

export const MbtiCardContainer = styled(Container)<{ isFlipped: boolean }>`
  perspective: 100rem;
  width: 70%;
  height: 40%;
  & > div {
    transform-style: preserve-3d;
    transition: transform 0.8s ease-in-out;
    transform: ${(props) =>
      props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'};
  }
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

// MbtiCard: Front and Back of the card
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

export const CardFront = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.primary};
  color: ${theme.color.text};
  font-size: 3rem;
  border-radius: 1rem;
`;

export const CardBack = styled(CardFront)`
  background-color: #2d353f;
  transform: rotateY(180deg);
  border: 0.2rem solid ${theme.color.primary};
`;
