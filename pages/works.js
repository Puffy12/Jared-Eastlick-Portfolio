import { Container, Heading, SimpleGrid, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Footer from '../components/footer';
import { workData } from "../lib/work_data";

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {workData.map((card, index) => (
          <Section key={index} delay={index * 0.2}>
            <WorkGridItem
              thumbnail={card.thumbnail}
              title={card.title}
              href={card.href}
            >
              {card.description}
            </WorkGridItem>
          </Section>
        ))}
      </SimpleGrid>

    </Container>
    
    <Box
          bg="gray.200"
          mt={{ base: 16, md: 24 }}  
          mb={{ base: 16, md: 24 }}  
          h="16"
          w="1"
          rounded="full"
          display={{ base: "none", sm: "block" }}
          dark={{ bg: "gray.200", bgOpacity: 0.2 }}
          opacity="0"
          marginX="auto"
          delay={0.1}
      ></Box>

            <Footer/>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
