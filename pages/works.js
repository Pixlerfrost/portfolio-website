import { Button, Container, Heading, Image, Box } from "@chakra-ui/react";
import Paragraph from "../Components/paragraph";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io5";
function Works() {
  return (
    <Container>
      <Heading as="h3" variant="section-title" fontSize={20} mb={4}>
        Coding Projects
      </Heading>
      <Paragraph>
        All my projects should be pinned repositories on my
        <Link href="https://github.com/Pixlerfrost" passHref>
          <Button
            variant="unstyled"
            colorScheme="teal"
            leftIcon={<IoLogoGithub />}
            pl={2}
          >
            Github
          </Button>
        </Link>
      </Paragraph>
      <Heading as="h3" variant="section-title" fontSize={20} mb={4}>
        Blender Renders
      </Heading>
      <Box
        borderColor="whiteAlpha.800"
        borderWidth={2}
        borderStyle="solid"
        margin={3}
      >
        <Image src="/renders/render0.png" />
      </Box>
      <Box
        borderColor="whiteAlpha.800"
        borderWidth={2}
        borderStyle="solid"
        margin={3}
      >
        <Image src="/renders/render4.png" />
      </Box>
      <Box
        borderColor="whiteAlpha.800"
        borderWidth={2}
        borderStyle="solid"
        margin={3}
      >
        <Image src="/renders/render1.png" />
      </Box>
      <Box
        borderColor="whiteAlpha.800"
        borderWidth={2}
        borderStyle="solid"
        margin={3}
      >
        <Image src="/renders/render2.png" />
      </Box>
      <Box
        borderColor="whiteAlpha.800"
        borderWidth={2}
        borderStyle="solid"
        margin={3}
      >
        <Image src="/renders/render3.png" />
      </Box>
    </Container>
  );
}

export default Works;
