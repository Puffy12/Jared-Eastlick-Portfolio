import React from 'react';
import Layout from '../components/layouts/article';
import { Container, Heading, Box, Button, List, ListItem, ListIcon, Image, Flex } from '@chakra-ui/react';
import Paragraph from '../components/paragraph';
import Section from '../components/section';
import NextLink from 'next/link';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { MdSettings } from "react-icons/md";

const About = () => {
    return (
        <Layout title="About">
            <Section delay={0.1} mb={{ base: 24, md: 24 }}> 
                <Container>
                    <Heading
                        as="h3"
                        variant="section-title"
                        textAlign="center"
                        mb={{ base: 8, md: 12 }}  
                    >
                        About Me
                    </Heading>
                    <Paragraph mb={{ base: 8, md: 12 }}>  {/* Increase bottom margin for paragraph */}
                        I have developed my writing niche in technology product reviews, but I aim to broaden my horizons by 
                        delving into niches related to foreign policy, culture, 
                        and travel. My prior experience with work-related applications such as Excel, Stata, 
                        and Word helps me organize and develop persuasive articles backed by authoritative and up-to-date data.
                    </Paragraph>
                </Container>
            </Section>

            <Box
                bg="gray.200"
                mt={{ base: 16, md: 24 }}  // Increase top margin for divider
                mb={{ base: 16, md: 24 }}  // Increase bottom margin for divider
                h="16"
                w="1"
                rounded="full"
                display={{ base: "none", sm: "block" }}
                dark={{ bg: "gray.200", bgOpacity: 0.2 }}
                marginX="auto"
                delay={0.1}
            ></Box>

            <Section delay={0.1} position="relative" mb={{ base: 24, md: 24 }}>  {/* Increased margin-bottom for mobile */}
                <Flex
                    direction={{ base: 'column', md: 'row' }}
                    align={{ base: 'center', md: 'flex-start' }}
                >
                    <Image
                        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        alt="Green double couch with wooden legs"
                        borderRadius="lg"
                        width="150"
                        height="200"
                        mb={{ base: 4, md: 0 }} // Margin bottom for mobile
                        mr={{ md: 4 }} // Margin right for desktop
                    />
                    <Box>
                        <Heading as="h3" variant="section-title" textAlign="center" mb={{ base: 4, md: 12 }}>
                            More...
                        </Heading>
                        <Paragraph mb={{ base: 4, md: 12 }}>
                            In my free time, I like to travel, learn new languages, and study. 
                            I have been learning Korean for nearly 5 years and had the opportunity 
                            to live in the Korean capital, Seoul, for a year. When I am not studying, 
                            I enjoy going to the gym and running.
                        </Paragraph>
                        <Box align="center" my={{ base: 8, md: 12 }}>
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
                </Flex>
            </Section>

            <Box
                bg="gray.200"
                mt={{ base: 16, md: 24 }}  // Increase top margin for divider
                mb={{ base: 16, md: 24 }}  // Increase bottom margin for divider
                h="16"
                w="1"
                rounded="full"
                display={{ base: "none", sm: "block" }}
                dark={{ bg: "gray.200", bgOpacity: 0.2 }}
                marginX="auto"
                delay={0.1}
            ></Box>

            <Section delay={0.3} mb={{ base: 24, md: 24 }}>  
                <Heading
                    as="h3"
                    variant="section-title"
                    textAlign="center"
                    mb={{ base: 8, md: 12 }}  
                >
                    Future Goals & Projects 
                </Heading>

                <Box textAlign="center">
                    <List spacing={6}>  
                        <ListItem>
                            <ListIcon as={MdSettings} color="green.500" />
                            Develop and launch my own blog
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdSettings} color="green.500" />
                            Collaborate with a diverse range of clients
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdSettings} color="green.500" />
                            Pursue a Master&apos;s or Ph.D. program related to foreign policy
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdSettings} color="green.500" />
                            Achieve a Level 6 proficiency in the TOPIK (Test of Proficiency in Korean) exam
                        </ListItem>
                    </List>
                </Box>
            </Section>
        </Layout>
    );
};

export default About;
