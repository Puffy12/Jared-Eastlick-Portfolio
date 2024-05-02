import {
  Box,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  chakra
} from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'
import { FaArrowCircleDown } from 'react-icons/fa'
import toast from 'react-hot-toast'
import { FaPaperPlane } from 'react-icons/fa'

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

  const handleSubmit = async event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    if (error) {
      toast.error(error)
      return
    }

    toast.success('Email sent successfully!')
  }

  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-32 w-[min(100%,38rem)] text-center scroll-mt-28"
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
      <Heading textAlign="center" variant="section-title" fontSize="xl" mt={10}>
        Contact me
      </Heading>

      <Text color="gray.700" textAlign="center" mt={6}>
        Please contact me directly at{' '}
        <a className="underline" href="mailto:michaelmehrdadi123@gmail.com">
          michaelmehrdadi123@gmail.com
        </a>{' '}
        <br /> or through this form.
      </Text>

      <motion.div
        variants={arrowVariants}
        animate="animate"
        style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center' }}
      >
        <Box
          mt="10"
          mb="6"
          w="14"
          h="14"
          fontSize="3xl"
          color="black"
          cursor="pointer"
        >
          <FaArrowCircleDown />
        </Box>
      </motion.div>

      <form onSubmit={handleSubmit} className="mt-10 flex flex-col">
        <Input
          h="14"
          px="4"
          rounded="lg"
          borderWidth="1px"
          borderColor="black"
          bg="white"
          _hover={{ bg: 'white' }}
          _focus={{ bg: 'white', borderColor: 'black', boxShadow: 'outline' }}
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
          borderColor="black"
          bg="white"
          _hover={{ bg: 'white' }}
          _focus={{ bg: 'white', borderColor: 'black', boxShadow: 'outline' }}
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          mb="3"
        />
        <Button
          type="submit"
          bg="gray.900"
          color="white"
          borderRadius="full"
          outline="none"
          transition="all 0.2s"
          _hover={{ bg: 'gray.950', transform: 'scale(1.1)' }}
          _active={{ transform: 'scale(0.95)' }}
          _disabled={{ bg: 'gray.700', cursor: 'not-allowed' }}
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
  )
}

export default Contact
