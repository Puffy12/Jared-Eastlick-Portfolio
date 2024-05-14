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
  useColorModeValue,
  ListIcon

} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons';
import Paragraph from '../components/paragraph';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { GridItem } from '../components/grid-item';
import { IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5';
import thumbFloorFans from '../public/images/works/floorfans_eyecatch.png';
import thumbGamingKeyboards from '../public/images/works/gamingkeyboards_eyecatch.png';
import Image from 'next/image';
import Experience from '../components/experience';
import Education from '../components/education';
import { GlobeDemo } from '../components/globe-demo';
import { MdCheckCircle } from "react-icons/md";
import Footer from '../components/footer';


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
        Hello, I&apos;m an Experienced Freelance Content Writer based in the United States! 
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jared Eastlick
          </Heading>
          <p>Freelance Writer</p>
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
        Detail-oriented writer and economics graduate seeking to help clients boost traffic on their websites by creating quality content that follows 
        the most up-to-date date SEO Practices. Worked on 21 different content writing assignments covering topics such as smartwatches, 
        fitness trackers, printers, gaming keyboards, and fans that has helped generate traffic to reach new audiences. 
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

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title" mt={20}>
          Achievements
        </Heading>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
                Wrote a Best-in-Class (BIC) review summarizing tester&apos;s opinions on the best floor fans available that has nearly 12,000 views
            </ListItem>
            <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
              My best performing individual product review, the Amazfit Band 7 fitness tracker, has attracted over 7,000 views.
            </ListItem>
          </List>
      </Section>

      <Section delay={0.2}>
      <Heading as="h3" variant="section-title" mt={20}>
          My Experience
        </Heading>
        <Experience/>
      </Section>

      <Section delay={0.3} >
      <Heading as="h3" variant="section-title" mt={20}>
        Education/Qualifications
        </Heading>
        <Education/>
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
            href="https://www.techgearlab.com/topics/home/best-floor-fan"
            title="Best Floor Fans of 2024 "
            thumbnail={thumbFloorFans}
          >
            An article about the 4 best floor fans of 2024
          </GridItem>
          <GridItem
            href="https://www.techgearlab.com/topics/cool-gadgets/best-gaming-keyboard"
            title="Best Gaming Keyboards"
            thumbnail={thumbGamingKeyboards}
          >
            An article about the 6 best gaming keyboards
          </GridItem>
        </SimpleGrid>

        <Heading as="h3" variant="section-title" mt={20}>
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
    <Footer/>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'