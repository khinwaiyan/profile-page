import styled from 'styled-components';

interface ContainerProps {
  padding?: string;
  margin?: string;
  backgroundColor?: string;
}

export const Container = styled.div<ContainerProps>`
  padding: ${({ padding }) => padding ?? '0rem'};
  margin: ${({ margin }) => margin ?? '0'};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ?? theme.color.bg};
`;
