import {
  Button,
  HStack,
  Heading,
  Icon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Medal } from "phosphor-react";

import React from "react";
import { Fade } from "react-reveal";

const Plans = () => {
  return (
    <VStack
      w="100%"
      h={["calc(85vh)", "calc(90vh)"]}
      alignItems="center"
      justifyContent="center"
      p="0"
      textAlign="center"
    >
      <Heading
        textAlign="center"
        fontSize={["md", "lg", "2xl"]}
        my='5'
        color="white"
      >
        Check out our plans
      </Heading>
      <Stack
        w={["90%", "80%", "80%"]}
        direction={["column", "column", "row"]}
        gap="5"
        justifyContent='center'
        alignItems='center'
      >
        <Fade left>
          <VStack
            bg="gray.900"
            h={["calc(32vh)", "calc(32vh)", "calc(50vh)"]}
            w={["100%", "100%", "calc(38vw)"]}
            borderRadius="md"
            border="2px solid"
            borderColor="gray.700"
            p={["5", "5", "10"]}
            justifyContent="space-between"
          >
            <Heading color="blue.50" fontSize={["lg", "2xl", "4xl"]}>
              <Icon
                as={Medal}
                weight="fill"
                fontSize={["sm", "md", "xl"]}
                mx="2"
                color="blue.50"
              />
              SILVER
              <Icon
                as={Medal}
                weight="fill"
                fontSize={["sm", "md", "xl"]}
                mx="2"
                color="blue.50"
              />
            </Heading>
            <Text
              fontSize={["xs", "md", "lg"]}
              textAlign="justify"
              color="gray.200"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              viverra ut nisl at blandit. Vivamus auctor, ante quis lobortis
              hendrerit, arcu nulla efficitur tortor, non lobortis mauris lectus
              nec felis.
            </Text>
            <HStack w="100%" justifyContent="space-between">
              <Text fontWeight="bold" fontSize="lg" color="white">
                $10 / month
              </Text>
              <Button
                size={["sm", "md", "md"]}
                colorScheme="gray"
                variant="outline"
                color='white'
              >
                I want this!
              </Button>
            </HStack>
          </VStack>
        </Fade>
        <Fade right>
          <VStack
            bg="gray.900"
            h={["calc(32vh)", "calc(32vh)", "calc(50vh)"]}
            w={["100%", "100%", "calc(38vw)"]}
            borderRadius="md"
            border="2px solid"
            borderColor="yellow.700"
            p={["5", "5", "10"]}
            justifyContent="space-between"
          >
            <Heading color="yellow.500" fontSize={["lg", "2xl", "4xl"]}>
              <Icon
                as={Medal}
                weight="fill"
                fontSize={["sm", "md", "xl"]}
                mx="2"
                color="yellow.500"
              />
              GOLD
              <Icon
                as={Medal}
                weight="fill"
                fontSize={["sm", "md", "xl"]}
                mx="2"
                color="yellow.500"
              />
            </Heading>
            <Text
              fontSize={["xs", "md", "lg"]}
              textAlign="justify"
              color="gray.200"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              viverra ut nisl at blandit. Vivamus auctor, ante quis lobortis
              hendrerit, arcu nulla efficitur tortor, non lobortis mauris lectus
              nec felis.
            </Text>
            <HStack w="100%" justifyContent="space-between">
              <Text fontWeight="bold" color='yellow.600' fontSize="lg">
                $30 / month
              </Text>
              <Button
                size={["sm", "md", "md"]}
                colorScheme="yellow"
                variant="outline"
              >
                I want this!
              </Button>
            </HStack>
          </VStack>
        </Fade>
      </Stack>
    </VStack>
  );
};

export default Plans;
