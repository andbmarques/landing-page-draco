import { HStack, VStack } from "@chakra-ui/react";
import heroImg from "../assets/hero.svg";
import React from "react";

const Hero = () => {
  return (
    <VStack
      w="100%"
      h={["calc(85vh)", "calc(90vh)"]}
      bgImg={heroImg}
      bgSize="cover"
      bgRepeat="no-repeat"
    ></VStack>
  );
};

export default Hero;
