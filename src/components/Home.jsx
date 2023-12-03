import { Flex, Image, SimpleGrid, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { noel } from "../assets/images";
import Background from "../assets/images/backgrounds/fundo6.jpg";

export const Home = () => {
  const noels = noel();
  return (
    <Flex
      w="full"
      h="100vh"
      bgImage={Background}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <SimpleGrid ml="15%" my="5%" spacingY="5%" spacingX="6%" w="40%" columns={2}>
        <Stack
          as={Link}
          to="/quiz"
          bg="rgba(32, 45, 84, 0.6)"
          justifyContent="center"
          justifyItems="center"
          borderRadius={4}
          boxShadow="dark-lg"
          w="100%"
          h="65%"
          justifySelf="center"
          alignSelf="flex-end"
          _hover={{
            bg: "rgba(193,11,032,0.8)",
            boxShadow: "0 4px 16px 0 rgba(193,11,32,0.5)",
            transform: "scale(1.1)",
          }}
        >
          <Image src={noels[0]} w="75%" h="90%" alignSelf="center" />
        </Stack>
        <Stack
          as={Link}
          to="/song"
          bg="rgba(32, 45, 84, 0.6)"
          justifyContent="center"
          borderRadius={4}
          boxShadow="dark-lg"
          w="100%"
          h="65%"
          justifySelf="center"
          alignSelf="flex-end"
          _hover={{
            bg: "rgba(193,11,032,0.8)",
            boxShadow: "0 4px 16px 0 rgba(193,11,32,0.5)",
            transform: "scale(1.1)",
          }}
        >
          <Image src={noels[1]} w="75%" h="90%" alignSelf="center" />
        </Stack>
        <Stack
          as={Link}
          bg="rgba(32, 45, 84, 0.6)"
          to="/movie"
          justifyContent="center"
          borderRadius={4}
          boxShadow="dark-lg"
          w="100%"
          h="65%"
          justifySelf="center"
          alignSelf="flex-start"
          _hover={{
            bg: "rgba(193,11,032,0.8)",
            boxShadow: "0 4px 16px 0 rgba(193,11,32,0.5)",
            transform: "scale(1.1)",
          }}
        >
          <Image src={noels[2]} w="75%" h="90%" alignSelf="center" />
        </Stack>
        <Stack
          as={Link}
          to="/"
          bg="rgba(32, 45, 84, 0.6)"
          justifyContent="center"
          borderRadius={4}
          boxShadow="dark-lg"
          w="100%"
          h="65%"
          justifySelf="center"
          alignSelf="flex-start"
          _hover={{
            bg: "rgba(193,11,032,0.8)",
            boxShadow: "0 4px 16px 0 rgba(193,11,32,0.5)",
            transform: "scale(1.1)",
          }}
        >
          <Image src={noels[3]} w="75%" h="90%" alignSelf="center" />
        </Stack>
      </SimpleGrid>
    </Flex>
  );
};

Home.propTypes = {};
