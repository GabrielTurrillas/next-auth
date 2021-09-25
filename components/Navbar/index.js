import Link from 'next/link'
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';
import { useSession } from 'next-auth/client'
import { widthSize, color } from '../../styles';
import { handleSignIn, handleSignOut } from '../../lib/onClickHandlers'

const Navbar = ({ toggle }) => {
  const [session, loading] = useSession()

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

            {session && (
              <NavItem>
                <Link href='/protectedpage'>
                  <A>Protected Page</A>
                </Link>
              </NavItem>)}

            {!loading && !session && (
              <NavItem>
                <Link href='/api/auth/signin'>
                  <A
                    onClick={handleSignIn}
                  >
                    Sign in</A>
                </Link>
              </NavItem>
            )}

            {session && (
              <NavItem>
                <Link href='/logout/auth/signout'>
                  <A
                    onClick={handleSignOut}
                  >Sign out</A>
                </Link>
              </NavItem>
            )}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

const Nav = styled.nav`
  display:flex;
  background:${color.primary};
  padding-top:0.3em;
  padding-bottom:0.3em;
  width: 100%;
  display: flex;
  justify-content:center;
  align-items:center;
  font-size: 1rem;
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
  opacity: ${({ loading }) => loading ? '0' : '1'};
  transition: ${({ loading }) => loading ? 'all 0.2s ease-in;' : 'all 0.2s ease-in'};
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