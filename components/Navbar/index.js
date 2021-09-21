import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';
import { widthSize } from '../../styles';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>Auth Page</NavLogo>
          <MobileIcon toggle={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks>
                Works
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>
                Habilidades
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>
                Technologies
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;



const Nav = styled.nav`
  background:black;
  height:80px;
  width: 100%;
  display: flex;
  justify-content:center;
  align-items:center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavbarContainer = styled.div`
  display:flex;
  background:000;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 100%;
`;

const NavLogo = styled.a`
  color: #fff;
  margin-left:50px;
  font-family:'Didact Gothic', sans-serif;
  justify-self: flex-start;
  cursor: pointer;
  padding:0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  @media screen and (max-width: 480px) {
    display: none
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: ${widthSize.mobileL}) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items:right;
  list-style:none;

  @media screen and (max-width: ${widthSize.mobileL}) {
    display: none;
  }
`;

const NavItem = styled.li`
  height :80px;
`;

const NavLinks = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-weight: bold;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;