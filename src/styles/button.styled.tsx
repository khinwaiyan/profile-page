import styled from 'styled-components';

import { Container } from './container.styled';

export const ButtonContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ padding }) => padding ?? '1rem'};
  margin: ${({ margin }) => margin ?? '1rem 0'};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ?? 'transparent'};
`;

export const Button = styled.button`
  padding: 1rem 2rem;

  color: ${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme, disabled = false }) =>
      !disabled ? theme.color.bg : ''};
    color: ${({ theme, disabled = false }) =>
      !disabled ? theme.color.text : ''};
  }
`;
