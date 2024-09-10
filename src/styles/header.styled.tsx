// Styled-components for Header
import styled from 'styled-components';

import { Container } from './container.styled';
import { Text2 } from './text.styled';

export const HeaderContainer = styled(Container)`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${({ theme }) => theme.color.primary};

  color: #000;
  height: 4rem;
  color:;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

//Text2 스타일을 쓰지만 렌더링은 <a> 로 함
export const NavItem = styled(Text2).attrs({ as: 'a' })`
  text-decoration: none;
  cursor: pointer;
  background: transparent;
  &:hover {
    text-decoration: underline;
  }
`;
