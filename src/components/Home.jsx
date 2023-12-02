import { Flex, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Background from "../assets/images/backgrounds/fundo6.jpg";
import Movie from "../assets/images/movie.png";
import Quiz from "../assets/images/quiz.png";
import Songs from "../assets/images/songs.png";

export const Home = () => {
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
        >
          <Text
            color="white"
            fontFamily="Indie Flower"
            fontWeight={700}
            fontSize="32px"
            alignSelf="center"
          >
            QUIZ
          </Text>
          <Image src={Quiz} w="50%" h="75%" alignSelf="center" />
        </Stack>
        <Stack
          bg="rgba(32, 45, 84, 0.6)"
          justifyContent="center"
          borderRadius={4}
          boxShadow="dark-lg"
          w="100%"
          h="65%"
          justifySelf="center"
          alignSelf="flex-end"
        >
          <Text
            color="white"
            fontFamily="Indie Flower"
            fontWeight={700}
            fontSize="32px"
            alignSelf="center"
          >
            FILME EMOJI
          </Text>
          <Image src={Movie} w="50%" h="75%" alignSelf="center" />
        </Stack>
        <Stack
          bg="rgba(32, 45, 84, 0.6)"
          justifyContent="center"
          borderRadius={4}
          boxShadow="dark-lg"
          w="100%"
          h="65%"
          justifySelf="center"
          alignSelf="flex-start"
        >
          <Text
            color="white"
            fontFamily="Indie Flower"
            fontWeight={700}
            fontSize="32px"
            alignSelf="center"
          >
            QUAL É A MÚSICA?
          </Text>
          <Image src={Songs} w="60%" h="70%" alignSelf="center" />
        </Stack>
        <Stack
          bg="rgba(32, 45, 84, 0.6)"
          justifyContent="center"
          borderRadius={4}
          boxShadow="dark-lg"
          w="100%"
          h="65%"
          justifySelf="center"
          alignSelf="flex-start"
        >
          <Text
            color="white"
            fontFamily="Indie Flower"
            fontWeight={700}
            fontSize="32px"
            alignSelf="center"
          >
            QUAL É A MÚSICA?
          </Text>
          <Image src={Songs} w="60%" h="70%" alignSelf="center" />
        </Stack>
      </SimpleGrid>
    </Flex>
  );
};

Home.propTypes = {};
