import styled from 'styled-components';

//container 스타일
interface ContainerProps {
  padding?: string;
  margin?: string;
  backgroundColor?: string;
}

export const Container = styled.div<ContainerProps>`
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin ?? '0 auto'};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ?? theme.color.bg};
`;

export const TextWrapper = styled.div`
  flex: 2;
  padding-left: 2rem;
  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

//이미지 스타일

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

//텍스트 스타일

const TextContainer = styled(Container)`
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
  text-align: center;
`;

export const Text2 = styled(TextContainer)<TextProps>`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ color, theme }) => color ?? theme.color.text};
  text-align: center;
`;

export const Span = styled.span`
  color: ${({ theme, color }) => color ?? theme.color.primary};
`;
