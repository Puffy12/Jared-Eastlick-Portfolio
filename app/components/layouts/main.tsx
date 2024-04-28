import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import { NextRouter } from 'next/router';

interface MainProps {
    children: React.ReactNode;
    router: NextRouter;
  }

const Main = ({ children }: MainProps) => {
    return (
      <Box as="main" pb={8}>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Jared's homepage" />
            <meta name="author" content="Michael Mehrdadi, Brian Bielby" />
            <title>Jared Eastlick - Homepage</title>
        </Head>
        <Container maxW="container.md" pt={14}>
          {children}
        </Container>
      </Box>
    )
}

export default Main