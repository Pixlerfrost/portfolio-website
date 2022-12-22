import Link from "next/link";
import { Text, useColorModeValue, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  img {
    transition: 500ms ease;
  }
  &:hover img {
    transform: rotate(360deg);
  }
`;

const Logo = () => {
  const logoImage = "/images/favicon.ico";

  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <Image src={logoImage} width={8} height={8} alt="logo" />
        <Text
          color={useColorModeValue("gray.800", "whiteAlpha.900")}
          fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
          className="m"
        >
          Mohamad Youness
        </Text>
      </LogoBox>
    </Link>
  );
};

export default Logo;
