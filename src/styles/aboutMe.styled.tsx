import styled, { keyframes } from 'styled-components';

import { Container } from './common.styled';
import { Text1, Text2 } from './common.styled';
//AboutMe 세션 스타일
export const AboutMeContainer = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;
export const TmiContainer = styled(AboutMeContainer)`
  margin: 3rem;
  gap: 2rem;
`;
export const ImageWrapper = styled.div`
  width: 50%;
  height: 100%;
`;

const zoomIn = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;
export const AnimatedText1 = styled(Text1)`
  animation: ${zoomIn} 2s ease forwards;
  animation-delay: ${({ delay }) => delay ?? '0s'};
`;

export const AnimatedText2 = styled(Text2)`
  animation: ${zoomIn} 2s ease forwards;
  animation-delay: ${({ delay }) => delay ?? '0s'};
`;
