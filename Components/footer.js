import { Box, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} pl={50} pr={50} pb={3} fontSize="sm">
      &copy; {new Date().getFullYear()} Mohamad Youness. All Rights Reserved.
    </Box>
  );
};

export default Footer;
