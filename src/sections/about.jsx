import { HStack, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import aboutIco1 from "../assets/about-ico1.svg";
import aboutIco2 from "../assets/about-ico2.svg";
import React from "react";
import { Fade } from "react-reveal";

const About = () => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItem="center"
      w="100%"
      h={["calc(85vh)", "calc(90vh)"]}
      bgColor="gray.900"
      gap="10"
    >
      <VStack
        alignSelf="center"
        px="10"
        textAlign="justify"
        w={["100%", "100%", "80%", "50%"]}
        transform={["none", "none", "none", "translate(-120px, 0%)"]}
      >
        <Fade left>
          <HStack alignItems="center">
            <Image px="3" boxSize={["16", "24", "32"]} src={aboutIco1} />
            <Heading fontSize={["sm", "md", "2xl"]} color="white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              eleifend.
            </Heading>
          </HStack>
          <Text fontSize={["sm", "md", "lg"]} color="red.500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            cursus leo quis enim congue convallis. Orci varius natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Fade>
      </VStack>
      <VStack
        alignSelf="center"
        px="10"
        textAlign="justify"
        w={["100%", "100%", "80%", "50%"]}
        transform={["none", "none", "none", "translate(120px, 0%)"]}
      >
        <Fade right>
          <Stack alignItems="center" direction="row-reverse">
            <Image px="3" boxSize={["16", "24", "32"]} src={aboutIco2} />
            <Heading fontSize={["sm", "md", "2xl"]} color="white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              eleifend.
            </Heading>
          </Stack>
          <Text fontSize={["sm", "md", "lg"]} color="red.500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            cursus leo quis enim congue convallis. Orci varius natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Fade>
      </VStack>
    </Stack>
  );
};

export default About;
