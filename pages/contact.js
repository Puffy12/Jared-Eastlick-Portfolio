import {
  Box,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  chakra,
  useColorModeValue
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaArrowCircleDown, FaPaperPlane } from 'react-icons/fa'
import toast from 'react-hot-toast'
import Layout from '../components/layouts/article'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Toaster } from 'react-hot-toast'
import Footer from '../components/footer';


const arrowVariants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 1.2,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'loop'
    }
  }
}

const Contact = () => {
  const ChakraPaperPlane = chakra(FaPaperPlane) // Wrap the icon component with chakra
  const bg = useColorModeValue('white', 'gray.800') // Background color for inputs
  const borderColor = useColorModeValue('gray.300', 'gray.600') // Border color for inputs
  const hoverBg = useColorModeValue('gray.100', 'gray.700') // Background color on hover for inputs
  const form = useRef()
  const service_id = process.env.SERVICE_ID; //SERVICE_ID
  const template_id = process.env.TEMPLATE_ID; //TEMPLATE_ID
  const user_id = process.env.USER_ID //USER_ID

  const sendEmail = e => {
    e.preventDefault()

    emailjs.sendForm(service_id, template_id, form.current, user_id).then(
      result => {
        console.log(result.text)
        toast.success('Email sent successfully!')
      },
      error => {
        toast.error(error)
        return
      }
    )
  }

  return (
    <Layout title="Contact">
      <Toaster position="top" />
      <motion.section
        id="contact"
        initial={{
          opacity: 0
        }}
        whileInView={{
          opacity: 1
        }}
        transition={{
          duration: 1
        }}
        viewport={{
          once: true
        }}
      >
        <Heading
          textAlign="center"
          variant="section-title"
          fontSize="xl"
          mt={10}
        >
          Contact me
        </Heading>

        <Text textAlign="center" mt={6}>
          Please contact me directly at{' '}
          <a style={{ color: "#88ccca", fontWeight: "bolder" }} href="mailto:jaredeastlick@gmail.com">
            jaredeastlick@gmail.com
          </a>{' '}
          <br /> or through this form.
        </Text>

        <motion.div
          variants={arrowVariants}
          animate="animate"
          style={{
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Box mt="10" mb="6" w="14" h="14" fontSize="3xl" cursor="pointer">
            <FaArrowCircleDown />
          </Box>
        </motion.div>

        <form className="mt-10 flex flex-col" onSubmit={sendEmail} ref={form}>
          <Input type="hidden" name="from_name" value="Jared Porfolo" />
          <Input
            h="14"
            px="4"
            rounded="lg"
            borderWidth="1px"
            borderColor={borderColor}
            bg={bg}
            _hover={{ bg: hoverBg }}
            _focus={{ borderColor: 'black', boxShadow: 'outline' }}
            _placeholder={{ color: 'gray.400' }}
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
            mb="3"
          />
          <Textarea
            h="52"
            rounded="lg"
            borderWidth="1px"
            borderColor={borderColor}
            bg={bg}
            _hover={{ bg: hoverBg }}
            _focus={{ borderColor: 'black', boxShadow: 'outline' }}
            _placeholder={{ color: 'gray.400' }}
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
            mb="3"
          />
          <Button
            type="submit"
            borderRadius="full"
            outline="none"
            transition="all 0.2s"
            colorScheme="teal"
            _hover={{ bg: 'teal.400', transform: 'scale(1.1)' }}
            _active={{ transform: 'scale(0.95)' }}
            _disabled={{ bg: 'gray.500', cursor: 'not-allowed' }}
            w="8rem"
            h="3rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="2"
          >
            Submit{' '}
            <ChakraPaperPlane
              boxSize="3"
              opacity="0.7"
              transition="all 0.2s"
              _groupHover={{ transform: 'translate(1px, -1px)' }}
            />
          </Button>
        </form>
      </motion.section>

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
}

export default Contact
