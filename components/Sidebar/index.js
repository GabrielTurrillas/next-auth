import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import Link from 'next/link';


const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <Container isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <Link href='/'>
              <SidebarLink>
                Works
              </SidebarLink>
            </Link>
            <Link href='/'>
              <SidebarLink>
                Habilidades
              </SidebarLink>
            </Link>
            <Link href='/'>
              <SidebarLink>
                Technologies
              </SidebarLink>
            </Link>
            <SideBtnWrap>
              <Link href="/contact">
                Contact
              </Link>
            </SideBtnWrap>
          </SidebarMenu>
        </SidebarWrapper>
      </Container>
    </>
  )
}

export default Sidebar


const Container = styled.aside`
  position:fixed;
  z-index:1000;
  width:100%;
  height:100%;
  background:#0d0d0d;
  display:grid;
  align-items:center;
  top:0;
  left:0;
  transition:0.3s ease-in-out;
  opacity:${({ isOpen }) => isOpen ? '100%' : '0'};
  top: ${({ isOpen }) => isOpen ? '0' : '-100%'};
`

const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

const Icon = styled.div`
  position: absolute;
  top:1.2rem;
  right:1.5rem;
  background:transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const SidebarWrapper = styled.div`
  color: #fff;
`;

const SidebarMenu = styled.ul`
  display:flex;
  flex-direction:column;
  height:80vh;
  justify-content:space-evenly;
  align-items:center;
  text-align:center;
  @media screen and (max-width:480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

const SidebarLink = styled.a`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration:none;
list-style:none; 
transition: 0.2s ease-in-out;
color: #fff;
cursor: pointer;
&:hover {
  color: #01bf71;
  transition: 0.2s ease-in-out;
}
`

const SideBtnWrap = styled.div`
display: flex;
justify-content: center;
font-weight: bold;
`

const SidebarRoute = styled.a`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding: 16px 64px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
&:hover {
  transition: all 0.2s ease-in-out;
  background: #fff;
  color:#010606;
}
`
const SwitchDiv = styled.div`
  display:flex;
  align-items:center;
`

const Text = styled.p`
  margin-right:1rem;
  font-size:1.5rem;
`