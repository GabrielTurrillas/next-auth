import Head from 'next/head'
import styled from 'styled-components'
import {
  viewportsSizes,
  color
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
          <Button fontColor={color.secondary}>Sign In</Button>
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
  `

const InputArea = styled.div`
  grid-area:InputArea;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
`

const ButtonArea = styled.div`
  grid-area:ButtonArea;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
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
  text-align:center;
`

const Button = styled.button`
  height:2.5rem;
  width:6rem;
  margin-top:1rem;
  border:none;
  border-radius:50px;
  color:${({ fontColor }) => fontColor};
  background-color:${({ bgColor }) => bgColor};
`