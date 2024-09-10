import styled from 'styled-components';

interface ImageContainerProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  margin?: string;
  opacity?: number;
}

export const ImageContainer = styled.div<ImageContainerProps>`
  width: ${({ width }) => width ?? '15rem'};
  height: ${({ height }) => height ?? '15rem'};
  margin: ${({ margin }) => margin ?? '0 auto'};
  opacity: ${({ opacity }) => opacity ?? 1};
  border-radius: ${({ borderRadius }) => borderRadius ?? '1rem'};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const SpinningImage = styled.img`
  animation: spin 10s linear infinite; /* Spinning animation */
  width: 100%;
  height: 100%;
  object-fit: cover;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
