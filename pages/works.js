import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbFloorFans from '../public/images/works/floorfans_eyecatch.png'
import thumbGamingKeyboards from '../public/images/works/gamingkeyboards_eyecatch.png'
import thumbAppleSe from '../public/images/works/applewatchsegen2_eyecatch.png'
import thumbAmazfit from '../public/images/works/amazfit_eyecatch.png'
import thumbAppleSeries from '../public/images/works/applewatchseries_eyecatch.png'
import thumbSteelseries from '../public/images/works/steelseries_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem
            title="Best Floor Fans of 2024"
            thumbnail={thumbFloorFans}
            href="https://www.techgearlab.com/topics/home/best-floor-fan"
          >
            An article about the 4 best floor fans of 2024
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            thumbnail={thumbGamingKeyboards}
            title="Best Gaming Keyboards"
            href="https://www.techgearlab.com/topics/cool-gadgets/best-gaming-keyboard"
          >
            An article about the 6 best gmaing keyboards
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            thumbnail={thumbAppleSe}
            title="Apple Watch SE Review"
            href="https://www.techgearlab.com/reviews/wearable-tech/fitness-tracker/apple-watch-se-gen-2"
          >
            A review about the Apple Watch SE Gen 2
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            thumbnail={thumbAmazfit}
            title="Amazfit Band 7 Review"
            href="https://www.techgearlab.com/reviews/wearable-tech/fitness-tracker/amazfit-band-7"
          >
            A review about the Amazfit Band 7
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem
            thumbnail={thumbAppleSeries}
            title="Apple Watch Series 8 Review"
            href="https://www.techgearlab.com/reviews/wearable-tech/smartwatch/apple-watch-series-8"
          >
            A review about the Apple Watch Series 8
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            thumbnail={thumbSteelseries}
            title="SteelSeries Apex Pro Review"
            href="https://www.techgearlab.com/reviews/cool-gadgets/gaming-keyboard/steelseries-apex-pro"
          >
            A review about the SteelSeries Apex Pro
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
