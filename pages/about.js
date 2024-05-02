import React from 'react'
import Layout from '../components/layouts/article';
import { Container, Heading, Box, Button, List, ListItem, ListIcon,Image
} from '@chakra-ui/react';
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import NextLink from 'next/link'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import { MdCheckCircle, MdSettings } from "react-icons/md";


const about = () => {
    return (
        <Layout title="About">
            <Container>
                <Heading
                as="h3"
                variant="section-title"
                textAlign="center"
                >                    
                    About Me
                </Heading>
                <Paragraph >
                    I am well-versed in work-related applications like Excel, Stata, and word. From my experience as a QA tester 
                and an economics student, these applications are used on a daily basis.
                I also learned how to develop comprehensive lesson plans for different language 
                levels and how to effectively implement them From my experience of teaching international students 
                at the University of Chico State, I have cultivated a talent for attentiveness and patience. 
                I have found that my approach builds trust and fosters a safe learning environment.
                </Paragraph>
            </Container>

            <Box
            bg="gray.200"
            mt="24"
            mb="32" // Increase the margin-bottom to add more space below
            h="16"
            w="1"
            rounded="full"
            display={{ base: "none", sm: "block" }}
            dark={{ bg: "gray.200", bgOpacity: 0.2 }}
            marginX="auto"
            delay={0.1}
            ></Box>

            <Section delay={0.1} position="relative">
                <Box>
                    <Image
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                    width="150"
                    height="200"
                    float="left" // Float the image to the left
                    mr={4} // Add margin to the right to create space between image and text
                    />
                </Box>
                <Box>
                    <Heading as="h3" variant="section-title" textAlign="center">
                    More...
                    </Heading>
                    <Paragraph>
                    I am well-versed in work-related applications like Excel, Stata, and word. From my experience as a QA tester
                    and an economics student, these applications are used on a daily basis. I also learned how to develop
                    comprehensive lesson plans for different language levels and how to effectively implement them From my
                    experience of teaching international students at the University of Chico State, I have cultivated a talent
                    for attentiveness and patience. I have found that my approach builds trust and fosters a safe learning
                    environment.
                    </Paragraph>
                    <Box align="center" my={4}>
                    <Button
                        as={NextLink}
                        href="/works"
                        scroll={false}
                        rightIcon={<ChevronRightIcon />}
                        colorScheme="teal"
                    >
                        See More
                    </Button>
                    </Box>
                </Box>
            </Section>

            <Box
                bg="gray.200"
                mt="24"
                mb="32" // Increase the margin-bottom to add more space below
                h="16"
                w="1"
                rounded="full"
                display={{ base: "none", sm: "block" }}
                dark={{ bg: "gray.200", bgOpacity: 0.2 }}
                marginX="auto"
                delay={0.3}
            ></Box>

            <Section delay={0.3}>
                <Heading
                as="h3"
                variant="section-title"
                textAlign="center"
                >
                    Future Goals & Projects 
                </Heading>

                <Box textAlign="center">
                    <List spacing={3}>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </ListItem>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        Assumenda, quia temporibus eveniet a libero incidunt suscipit
                    </ListItem>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                    </ListItem>
                    <ListItem>
                        <ListIcon as={MdSettings} color="green.500" />
                        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                    </ListItem>
                    </List>
                </Box>
            </Section>
        </Layout>
    )
}

export default about;