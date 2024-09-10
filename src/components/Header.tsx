import { HeaderContainer, Nav, NavItem } from '../styles/header.styled';
import { Contact } from './Contact';
export const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <NavItem href="#about-me">About Me</NavItem>
        <NavItem href="#mbti">MBTI</NavItem>
        <NavItem href="#tmi">TMI</NavItem>
        <NavItem>
          <Contact />
        </NavItem>
      </Nav>
    </HeaderContainer>
  );
};
