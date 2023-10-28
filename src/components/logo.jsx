import { Image, Stack } from "@chakra-ui/react";
import React from "react";
import logo from '../assets/logo.png'

const Logo = () => {
  return <Stack>
    <Image boxSize='12' src={ logo } />
  </Stack>;
};

export default Logo;
