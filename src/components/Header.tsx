import { HeaderContainer, Nav, NavItem } from '../styles/header.styled';
const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <NavItem href="#about">About Me</NavItem>
        <NavItem href="#mbti">MBTI</NavItem>
        <NavItem href="#tmi">TMI</NavItem>
        <NavItem href="#contact">Contact</NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
