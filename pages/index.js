import React from 'react'
import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="orange" p={3} mb={6} textAlign="center" >
        Hello, I&apos;m a Free-lance writer based in the United States! 
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Jared Easlick
            </Heading>
            <p>Freelance Writer ( Fitness / Travel / History )</p>
          </Box>
      </Box>
    </Container>
  );
}

export default Page
