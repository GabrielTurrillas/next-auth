import styled from 'styled-components'
import PrimaryButton from '../components/PrimaryButton'
import { useSession } from 'next-auth/client'
import {
  viewportsSizes,
  color,
  device
} from '../styles'
import Link from 'next/link'
import { handleSignIn, handleSignOut } from '../lib/onClickHandlers'

export default function Home() {

  const [session, loading] = useSession()

  return (
    <>
      <Container className="container">
        <Card>
          <Title>Home</Title>
          {session ? (
            <PrimaryButton
              bgColor={color.primary}
              fontColor='white'
              onClick={handleSignOut}
            >Sign out
            </PrimaryButton>
          ) : (
            <PrimaryButton
              bgColor={color.primary}
              fontColor='white'
              onClick={handleSignIn}
            >Sign in
            </PrimaryButton>
          )
          }
        </Card>
      </Container>
    </>
  )
}

const Container = styled.div`
  display:flex;
  height:100vh;
  justify-content:center;
  margin:0 4rem;
  padding: 6rem 0;
  
  `

const Card = styled.div`
  display: flex;
  flex-direction:column;
  background-color:blue;
  justify-content:center;
  align-items:center;
  height: fit-content;
  width:fit-content;
  padding:5rem;
  background:#f5f5f5;
  border-radius:20px;
  `

const TitleArea = styled.div`
  grid-area:TitleArea;
  display:flex;
  justify-content:center;
  align-items:start;
  @media ${device.mobileM}{
    align-items:center;
  }
`

const InputArea = styled.div`
  grid-area:InputArea;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-around;
  @media ${device.mobileL}{
    justify-content:start;
  }
`

const ButtonArea = styled.div`
  grid-area:ButtonArea;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  @media ${device.mobileL}{
    justify-content:center;
    align-items:start;
    flex-direction:row;
  }
`

const Title = styled.h1`
  color:${color.secondary};
  font-size:2.5rem;
  margin-bottom:4rem;
`

const Input = styled.input`
  background:${color.lightGrey};
  border:none;
  height:2rem;
  border-radius:10px;
  width:14rem;
  text-align:center;
  @media ${device.mobileL}{
    margin-bottom:2.5rem;
  }
  @media ${device.mobileL}{
    height:3rem;
  }
`
