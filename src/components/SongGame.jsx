import { Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import Background from "../assets/images/backgrounds/fundoSong.jpg";
import { musicLibrary } from "../assets/musicLibrary";
import { randomNumber } from "../utils";
import { AudioPlayer } from "./AudioPlayer";
import { BackButton } from "./BackButton";
import { NextSong } from "./NextSong";

const songs = musicLibrary.songs;

export const SongGame = () => {
  const [showWord, setShowWord] = useState(false);
  const [showSentence, setShowSentence] = useState(false);
  const [showSinger, setShowSinger] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(randomNumber(songs.length));
  const { word, sentence, singer, song, correctAnswer } = songs[currentIndex];

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
        overflow="hidden"
      >
        <BackButton />
        <Stack
          textAlign="center"
          w="60%"
          h="100%"
          justifyContent="flex-start"
          alignSelf="center"
          mt="4%"
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
            Qual é a música?
          </Text>
          <HStack onClick={() => setShowWord(true)}>
            <Text
              w="25%"
              fontSize="36px"
              fontFamily="Indie Flower"
              fontWeight={700}
              color="rgba(193,11,032,1)"
              textAlign="start"
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
              py={1}
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
              textAlign="start"
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
              py={1}
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
              textAlign="start"
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
              py={1}
            >
              {showSinger ? singer : "?"}
            </Text>
          </HStack>
          <HStack onClick={() => setShowAnswer(true)} mb={2}>
            <Text
              w="25%"
              fontSize="36px"
              fontFamily="Indie Flower"
              fontWeight={700}
              color="rgba(193,11,032,1)"
              textAlign="start"
            >
              Música:
            </Text>
            {showAnswer ? (
              <AudioPlayer song={song} correctAnswer={correctAnswer} />
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
        <NextSong
          setCurrentIndex={setCurrentIndex}
          setShowAnswer={setShowAnswer}
          setShowSentence={setShowSentence}
          setShowSinger={setShowSinger}
          setShowWord={setShowWord}
          total={songs.length}
          currentIndex={currentIndex}
        />
      </Stack>
    </Flex>
  );
};

SongGame.propTypes = {};
