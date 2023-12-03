import { Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import Background from "../assets/images/backgrounds/fundo.jpg";
import { moviesLibrary } from "../assets/moviesLibrary";
import { randomNumber } from "../utils";
import { BackButton } from "./BackButton";
import { NextMovie } from "./NextMovie";

const movies = moviesLibrary.movies;

export const MovieGame = () => {
  const [showHint, setShowHint] = useState(false);
  const [showGenre, setShowGenre] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(randomNumber(movies.length));
  const { hint, genre, correctAnswer, image } = movies[currentIndex];

  console.log(image);
  return (
    <Flex
      bgImage={Background} // trocar background
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      w="full"
      h="100vh"
      justifyContent="center"
    >
      <Stack
        bg="#f8f7f3"
        opacity={0.9}
        boxShadow="dark-lg"
        w="70%"
        h="80%"
        justifyContent="center"
        alignSelf="center"
        borderRadius={8}
        gap={0}
      >
        <BackButton />
        <Stack
          textAlign="center"
          w="60%"
          h="100%"
          justifyContent="flex-start"
          alignSelf="center"
          mt="5%"
          gap={4}
        >
          <Flex
            bg="rgba(193,11,032,1)"
            w="42px"
            h="42px"
            borderRadius="100%"
            alignItems="center"
            justifyContent="center"
            color="white"
            fontWeight={700}
            fontFamily="Indie Flower"
            fontSize="24px"
            alignSelf="center"
          >
            {currentIndex}
          </Flex>
          <Text fontSize="48px" fontFamily="Indie Flower" fontWeight={700} color="#495730">
            Qual o nome do filme?
          </Text>
          <HStack onClick={() => setShowHint(true)}>
            <Text
              fontSize="36px"
              fontFamily="Indie Flower"
              w="full"
              fontWeight={700}
              color="#495730"
              bg="white"
              borderRadius="35px"
              py={2}
            >
              {showHint ? hint : "?"}
            </Text>
          </HStack>
          <HStack onClick={() => setShowGenre(true)}>
            <Text
              w="25%"
              fontSize="36px"
              fontFamily="Indie Flower"
              fontWeight={700}
              color="rgba(193,11,032,1)"
            >
              Gênero:
            </Text>
            <Text
              fontSize="36px"
              fontFamily="Indie Flower"
              w="full"
              fontWeight={700}
              color="#495730"
              bg="white"
              borderRadius="35px"
              py={2}
            >
              {showGenre ? genre : "?"}
            </Text>
          </HStack>
          <HStack onClick={() => setShowAnswer(true)}>
            <Text
              w="25%"
              fontSize="36px"
              fontFamily="Indie Flower"
              fontWeight={700}
              color="rgba(193,11,032,1)"
            >
              Filme:
            </Text>
            {showAnswer ? (
              <Stack
                fontSize="36px"
                fontFamily="Indie Flower"
                w="full"
                fontWeight={700}
                color="#495730"
                bg="white"
                borderRadius="35px"
                py={2}
              >
                <Text>{correctAnswer}</Text>
                <Image w="20%" borderRadius="24px" alignSelf="center" src={image} />
              </Stack>
            ) : (
              <Text
                fontSize="36px"
                fontFamily="Indie Flower"
                w="full"
                fontWeight={700}
                color="#495730"
                bg="white"
                borderRadius="35px"
                py={2}
              >
                ?
              </Text>
            )}
          </HStack>
        </Stack>
        <NextMovie
          setCurrentIndex={setCurrentIndex}
          setShowAnswer={setShowAnswer}
          setShowGenre={setShowGenre}
          setShowHint={setShowHint}
          total={movies.length}
          currentIndex={currentIndex}
        />
      </Stack>
    </Flex>
  );
};

MovieGame.propTypes = {};
