import Head from 'next/head'
import styled from 'styled-components'

export default function Home() {
  return (
    <>
      <Container className="container">
        Home Auth
      </Container>
    </>
  )
}

const Container = styled.div`
  background-color:red;
`