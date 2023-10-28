import { Button, HStack, Heading, Text, VStack } from "@chakra-ui/react";
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
      alignItems='center'
      justifyContent='center'
      px='4'
      spacing={5}
      textAlign='center'
    >
      <Text color="red.500">Lorem ipsum dolor sit amet, consectetur.</Text>
      <Heading w={['90%', '50%']} color="white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend.</Heading>
      <Button colorScheme="red" variant="solid">
        Know More
      </Button>
    </VStack>
  );
};

export default Hero;
