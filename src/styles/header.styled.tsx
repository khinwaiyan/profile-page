import styled from 'styled-components';

import { Container } from './common.styled';
import { Text2 } from './common.styled';

//해더 Session 스타일
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

//연락처 Session 스타일
export const ContactItem = styled(NavItem)`
  &:hover {
    color: ${({ theme }) => theme.color.bg};
  }
`;

//Tmi Session 스타일
export const SpinningImage = styled.img`
  animation: spin 10s linear infinite;
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
