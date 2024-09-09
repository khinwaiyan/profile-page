import styled, { keyframes } from 'styled-components';

import { Container } from './container.styled';

export const TextContainer = styled(Container)`
  padding: 0.5rem;
  margin: 1rem 0;
`;

interface TextProps {
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  delay?: string;
}

export const Text1 = styled(TextContainer)<TextProps>`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ color, theme }) => color ?? theme.color.text};
`;

export const Text2 = styled(TextContainer)<TextProps>`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ color, theme }) => color ?? theme.color.text};
`;
export const Span = styled.span`
  color: ${({ theme, color }) => color ?? theme.color.primary};
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
