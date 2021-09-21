import Link from 'next/link'
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';
import { widthSize, color } from '../../styles';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>Auth Page</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <Link href='/'>
                <A>Home</A>
              </Link>
            </NavItem>
            <NavItem>
              <Link href='/login'>
                <A>Login</A>
              </Link>
            </NavItem>
            <NavItem>
              <Link href='/logout'>
                <A>Logout</A>
              </Link>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

const Nav = styled.nav`
  background:${color.primary};
  height:80px;
  width: 100%;
  display: flex;
  justify-content:center;
  align-items:center;
  font-size: 1rem;
  position: absolute;
  top: 0;
  box-shadow: 0 8px 8px -4px lightblue;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavbarContainer = styled.div`
  display:flex;
  background:000;
  justify-content: space-between;
  height: 80px;
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

const A = styled.a`
  color: white;
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