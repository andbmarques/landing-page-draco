import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Logo from "./logo";
import { List } from "phosphor-react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HStack
      w="100%"
      h={["calc(15vh)", "calc(10vh)"]}
      alignItems="center"
      justifyContent="space-between"
      px={["8", "10"]}
      py={["0", "10"]}
      bg="gray.900"
    >
      <Logo />
      <HStack display={["none", "none", "flex"]} gap={["5", "10"]}>
        <Button variant="link" colorScheme="red" size={{ md: "sm", lg: "md" }}>
          Home
        </Button>
        <Button variant="link" colorScheme="red" size={{ md: "sm", lg: "md" }}>
          About
        </Button>
        <Button variant="link" colorScheme="red" size={{ md: "sm", lg: "md" }}>
          Plans
        </Button>
        <Button variant="link" colorScheme="red" size={{ md: "sm", lg: "md" }}>
          Reviews
        </Button>
        <Button
          variant="outline"
          colorScheme="red"
          size={{ md: "sm", lg: "md" }}
        >
          Know More
        </Button>
      </HStack>
      <IconButton
        display={["flex", "flex", "none"]}
        fontSize="lg"
        variant="link"
        colorScheme="blackAlpha"
        icon={<List weight="bold" />}
        color="red.500"
        onClick={onOpen}
      />
      <Drawer size="full" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor="gray.900">
          <DrawerHeader>
            <DrawerCloseButton color="red.500" size="lg" />
          </DrawerHeader>
          <DrawerBody p="10">
            <VStack gap="10">
              <Button variant="link" colorScheme="red" size="lg">
                Home
              </Button>
              <Button variant="link" colorScheme="red" size="lg">
                About
              </Button>
              <Button variant="link" colorScheme="red" size="lg">
                Plans
              </Button>
              <Button variant="link" colorScheme="red" size="lg">
                Reviews
              </Button>
              <Button variant="outline" colorScheme="red" size="lg">
                Know More
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
};

export default Navbar;
