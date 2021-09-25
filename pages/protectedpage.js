import { useState, useEffect } from 'react';
import Image from 'next/image'
import styled from 'styled-components'
import { getSession, signIn } from 'next-auth/client';

export default function ProtectedPage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession()
      if (!session) {
        signIn()
      } else {
        setLoading(false)
      }
    }
    securePage()
  }, [])

  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <Container>
      <H1>Secret Dog</H1>
      <imgWrapper>
        <Image src='/goldenretriever.jpg' alt='Secret Dog' width='420' height='420' />
      </imgWrapper>
    </Container>
  );
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:start;
  align-items:center;
  height:100vh;
`

const H1 = styled.h1`
  margin:4rem 0;
`

const imgWrapper = styled.div`
  width:fit-content;
`
