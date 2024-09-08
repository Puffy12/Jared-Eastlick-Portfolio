import { Container, Heading, SimpleGrid, Box, Text } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
//import Footer from '../components/footer';
import { gridData , gridData2, gridData3} from "../lib/blog_data";

const Posts = () => (
  <Layout title="Blog">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
      {gridData.length === 0 ? (
        <Box textAlign="center" mt={10}>
          <Text fontSize="xl" color="white">No Blogs posted yet, stay tuned!</Text>
        </Box>
      ) : (
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          {gridData.map((item, index) => (
            <GridItem
              key={index}
              title={item.title}
              thumbnail={item.thumbnail}
              href={item.href}
            >
              {item.description}
            </GridItem>
          ))}
        </SimpleGrid>
      )}
    </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          {gridData2.map((item, index) => (
            <GridItem
              key={index}
              title={item.title}
              thumbnail={item.thumbnail}
              href={item.href}
            />
          ))}
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          {gridData3.map((item, index) => (
            <GridItem
              key={index}
              title={item.title}
              thumbnail={item.thumbnail}
              href={item.href}
            />
          ))}
        </SimpleGrid>
      </Section>
    </Container>

 
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'