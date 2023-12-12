import { Flex, Image, SimpleGrid, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { noel } from "../assets/images";
import Background from "../assets/images/backgrounds/fundoHome.png";

export const Home = () => {
  const noels = noel();
  return (
    <Flex
      w="full"
      h="100vh"
      bgImage={Background}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      justifyContent="center"
    >
      <SimpleGrid spacingY="5%" spacingX="6%" w="75%" mt="4%" columns={4}>
        <Stack
          as={Link}
          to="/quiz"
          bg="rgba(231,253,255,0.5)"
          justifyContent="center"
          justifyItems="center"
          borderRadius={4}
          boxShadow="lg"
          justifySelf="center"
          alignSelf="flex-start"
          _hover={{
            bg: "rgba(231,70,63,0.8)",
            boxShadow: "0 4px 16px 0 rgba(193,11,32,0.5)",
            transform: "scale(1.1)",
          }}
        >
          <Image src={noels[0]} w="75%" h="90%" alignSelf="center" />
        </Stack>
        <Stack
          as={Link}
          to="/song"
          bg="rgba(231,253,255,0.5)"
          justifyContent="center"
          borderRadius={4}
          boxShadow="lg"
          justifySelf="center"
          alignSelf="flex-start"
          _hover={{
            bg: "rgba(231,70,63,0.8)",
            boxShadow: "0 4px 16px 0 rgba(193,11,32,0.5)",
            transform: "scale(1.1)",
          }}
        >
          <Image src={noels[1]} w="75%" h="90%" alignSelf="center" />
        </Stack>
        <Stack
          as={Link}
          bg="rgba(231,253,255,0.5)"
          to="/movie"
          justifyContent="center"
          borderRadius={4}
          boxShadow="lg"
          justifySelf="center"
          alignSelf="flex-start"
          _hover={{
            bg: "rgba(231,70,63,0.8)",
            boxShadow: "0 4px 16px 0 rgba(193,11,32,0.5)",
            transform: "scale(1.1)",
          }}
        >
          <Image src={noels[2]} w="75%" h="90%" alignSelf="center" />
        </Stack>
        <Stack
          as={Link}
          to="/games"
          bg="rgba(231,253,255,0.5)"
          border="none"
          justifyContent="center"
          borderRadius={4}
          boxShadow="lg"
          justifySelf="center"
          alignSelf="flex-start"
          _hover={{
            bg: "rgba(231,70,63,0.8)",
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
