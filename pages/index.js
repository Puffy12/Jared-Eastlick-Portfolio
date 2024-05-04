import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'
import Experience from '../components/experience'
import { GlobeDemo } from '../components/globe-demo'

const Home = () => (
  <Layout>
  <GlobeDemo />
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a Free-lance writer based in the United States! 
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jared Eastlick
          </Heading>
          <p>Freelance Writer ( Fitness / Travel / History )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/jared_linkedin_profile.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        I am well-versed in work-related applications like Excel, Stata, and word. From my experience as a QA tester 
    and an economics student, these applications are used on a daily basis.
    I also learned how to develop comprehensive lesson plans for different language 
    levels and how to effectively implement them From my experience of teaching international students 
    at the University of Chico State, I have cultivated a talent for attentiveness and patience. 
    I have found that my approach builds trust and fosters a safe learning environment.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My Works
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
      <Heading as="h3" variant="section-title">
          My Experience
        </Heading>
        <Experience/>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Hobbies
        </Heading>
        <Paragraph>
        In my free time, I like to travel, learn new languages, and study. 
        I have been learning Korean for nearly 5 years and had the opportunity 
        to live in the Korean capital, Seoul, for a year. When I am not studying, 
        I enjoy going to the gym and running.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Links
        </Heading>
        <List>
        <ListItem>
            <Link href="https://www.instagram.com/jared.beastlick/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @JaredEastlick
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/jared-eastlick-011640280/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                 @JaredEastlick
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/JaredEastlick" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @JaredEastlick
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6} mt={10}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;150k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid>

        <Heading as="h3" variant="section-title" mt={10}>
          Contact Me
        </Heading>
        <p>
          Feel free to contant me about any free lancing or any other opportunity.
          Check out the link below.
        </p>

        <Box align="center" my={4} mt={10}>
          <Button
            as={NextLink}
            href="/contact"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Contact Me
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'