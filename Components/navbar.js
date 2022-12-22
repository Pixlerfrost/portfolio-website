import NextLink from "next/link";

import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "../Components/theme-toggle-button";
import Logo from "../Components/logo";
import { IoLogoGithub } from "react-icons/io5";

const Navbar = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "whiteAlpha.50")}
      style={{ backdropFilter: "blur(10px" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="md" pt={0.5} letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          gap={4}
          mb="0.2vh"
          ml="5"
        >
          <Link textColor={useColorModeValue("black", "white")} href="/works">
            Works
          </Link>
          <Link
            textColor={useColorModeValue("black", "white")}
            href="/contact_page"
          >
            Contact Us
          </Link>

          <Link
            textColor={useColorModeValue("black", "white")}
            display="flex"
            href="https://github.com/Pixlerfrost/Portfolio"
          >
            Source
            <Box mt="0.7vh" ml="1.5">
              <IoLogoGithub />
            </Box>
          </Link>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="/contact_page" passHref>
                  <MenuItem as={Link}>Contact Us</MenuItem>
                </NextLink>
                <NextLink
                  href="https://github.com/Pixlerfrost/Portfolio"
                  passHref
                >
                  <MenuItem as={Link}>Source code</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
