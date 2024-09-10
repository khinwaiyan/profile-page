import styled from 'styled-components';

interface ContainerProps {
  padding?: string;
  margin?: string;
  backgroundColor?: string;
}

export const Container = styled.div<ContainerProps>`
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ?? theme.color.bg};
`;
