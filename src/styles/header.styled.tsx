// Styled-components for Header
import styled from 'styled-components';

import { Container } from './container.styled';

export const HeaderContainer = styled(Container)`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.color.primary};
  padding: 1rem;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

export const NavItem = styled.a`
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
