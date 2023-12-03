import { Button, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import Background from "../assets/images/backgrounds/fundo.jpg";
import { musicLibrary } from "../assets/musicLibrary";
import { randomNumber } from "../utils";
import { AudioPlayer } from "./AudioPlayer";
import { BackButton } from "./BackButton";

const songs = musicLibrary.songs;

export const SongGame = () => {
  const [showWord, setShowWord] = useState(false);
  const [showSentence, setShowSentence] = useState(false);
  const [showSinger, setShowSinger] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(randomNumber(songs.length));
  const { word, sentence, singer, song } = songs[currentIndex];

  const handleNext = () => {
    setShowWord(false);
    setShowSentence(false);
    setShowSinger(false);
    setShowAnswer(false);
    setCurrentIndex(randomNumber(songs.length));
  };

  return (
    <Flex
      bgImage={Background}
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
          <Text fontSize="48px" fontFamily="Indie Flower" fontWeight={700} color="#495730" mb={6}>
            Qual é a música?
          </Text>
          <HStack onClick={() => setShowWord(true)}>
            <Text
              w="25%"
              fontSize="36px"
              fontFamily="Indie Flower"
              fontWeight={700}
              color="rgba(193,11,032,1)"
            >
              Palavra:
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
              {showWord ? word : "?"}
            </Text>
          </HStack>
          <HStack onClick={() => setShowSentence(true)}>
            <Text
              w="25%"
              fontSize="36px"
              fontFamily="Indie Flower"
              fontWeight={700}
              color="rgba(193,11,032,1)"
            >
              Frase:
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
              {showSentence ? sentence : "?"}
            </Text>
          </HStack>
          <HStack onClick={() => setShowSinger(true)}>
            <Text
              w="25%"
              fontSize="36px"
              fontFamily="Indie Flower"
              fontWeight={700}
              color="rgba(193,11,032,1)"
            >
              Cantor:
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
              {showSinger ? singer : "?"}
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
              Música:
            </Text>
            {showAnswer ? (
              <AudioPlayer song={song} />
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
        <Button
          onClick={() => handleNext()}
          mb="4%"
          mr="4%"
          alignSelf="flex-end"
          borderRadius="35px"
          py={8}
          px={20}
          fontSize="24px"
          fontFamily="Indie Flower"
          fontWeight={700}
          color="white"
          bg="rgba(193,11,032,1)"
          w="fit-content"
          _hover={{ bg: "#495730" }}
        >
          Próxima
        </Button>
      </Stack>
    </Flex>
  );
};

SongGame.propTypes = {};
