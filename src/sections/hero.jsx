import { Button, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import heroImg from "../assets/hero.svg";
import React from "react";
import { Fade } from "react-reveal";

const Hero = () => {
  return (
    <VStack
      w="100%"
      h={["calc(85vh)", "calc(90vh)"]}
      bgImg={heroImg}
      bgSize="cover"
      bgRepeat="no-repeat"
      alignItems="center"
      justifyContent="center"
      px="4"
      spacing="10"
      textAlign="center"
    >
      <Text color="red.500">
        <Fade top>Lorem ipsum dolor sit amet, consectetur.</Fade>
      </Text>

      <Heading w={["90%", "50%"]} color="white">
        <Fade left>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          eleifend.
        </Fade>
      </Heading>

      <Fade bottom>
        <Button colorScheme="red" variant="solid">
          Know More
        </Button>
      </Fade>
    </VStack>
  );
};

export default Hero;
