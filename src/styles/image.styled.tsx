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
  border-radius: ${({ borderRadius }) => borderRadius ?? '50%'};
  opacity: ${({ opacity }) => opacity ?? 0};
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
