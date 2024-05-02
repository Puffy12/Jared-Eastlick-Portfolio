import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

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
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
