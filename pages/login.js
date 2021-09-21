import styled from 'styled-components'
import PrimaryButton from '../components/PrimaryButton'
import {
  viewportsSizes,
  color,
  device
} from '../styles'

export default function Login() {
  return (
    <>
      <Container className="container">
        <TitleArea>
          <Title>Login</Title>
        </TitleArea>
        <InputArea>
          <Input
            placeholder='Email'
            type='email'
          />
          <Input
            placeholder='Password'
            type='password'
          />
        </InputArea>
        <ButtonArea>
          <Button
            fontColor={color.secondary}
          >Sign In
          </Button>
          <Button
            bgColor={color.primary}
            fontColor='white'
          >Log In
          </Button>
        </ButtonArea>
      </Container>
    </>
  )
}

const Container = styled.div`
  display:grid;
  height:100vh;
  margin:0 4rem;
  padding: 6rem 0;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:'TitleArea'
                      'InputArea'
                      'ButtonArea';
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
  margin-top:1rem;
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

const Button = styled(PrimaryButton)`
  margin-top:1rem;
`