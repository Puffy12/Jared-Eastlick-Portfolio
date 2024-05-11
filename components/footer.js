import { Box } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer" px={4} textAlign="center" color="gray.200" mt={20}>
      <small  fontSize="xs" display="block">
        &copy; 2024 Michael Mehrdadi, Brian Beilby. All rights reserved.
      </small>
      <p fontSize="xs">
        <span fontWeight="semibold">About this website:</span> built with{" "}
        <span fontSize="xs">React & Next.js (App Router & Server Actions), <br/>Javascript, Chakura UI, Framer Motion, Email.js & Resend, Vercel hosting.</span>
      </p>
    </Box>
  );
}