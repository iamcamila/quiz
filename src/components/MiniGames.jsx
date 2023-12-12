import { Box, Flex, HStack, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import Background from "../assets/images/backgrounds/fundoGames.png";
import Dance from "../assets/images/dancing.gif";
import { riddleLibrary } from "../assets/riddleLibrary";
import { wordLibrary } from "../assets/wordLibrary";
import { randomNumber } from "../utils";
import { BackButton } from "./BackButton";
import { NextRiddle } from "./NextRiddle";

const riddles = riddleLibrary.riddles;
const words = wordLibrary.words;

export const MiniGames = () => {
  const [showRiddles, setShowRiddles] = useState(false);
  const [showWords, setShowWords] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentGame, setCurrentGame] = useState(null);
  const total = currentGame === "riddle" ? riddles.length - 1 : words.length - 1;
  const [currentIndex, setCurrentIndex] = useState(randomNumber(total));

  return (
    <Flex
      bgImage={Background}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      w="full"
      h="100vh"
      justifyContent="center"
    >
      <HStack
        bg="#f8f7f3"
        opacity={0.9}
        boxShadow="dark-lg"
        w="70%"
        h="80%"
        justifyContent="start"
        alignSelf="center"
        borderRadius={8}
        overflow="hidden"
        gap={0}
      >
        <BackButton />
        <Stack
          textAlign="center"
          w="30%"
          h="100%"
          justifyContent="center"
          alignSelf="center"
          gap={8}
        >
          <Text fontSize="48px" fontFamily="Indie Flower" fontWeight={700} color="#65c4b6">
            Mini Games
          </Text>

          <Flex
            onClick={() => {
              setShowRiddles(true);
              setShowWords(false);
              setCurrentGame("riddle");
            }}
            bg="#e51836"
            justifyContent="center"
            alignItems="center"
            borderRadius={4}
            boxShadow="dark-lg"
            w="60%"
            h="20%"
            color="#65c4b6"
            justifySelf="center"
            alignSelf="center"
            _hover={{
              bg: "#e51836",
              color: "#fedc19",
              boxShadow: "0 4px 16px 0 #65c4b6",
              transform: "scale(1.1)",
            }}
          >
            <Text fontSize="32px" fontFamily="Indie Flower" fontWeight={600}>
              Charadas
            </Text>
          </Flex>
          <Flex
            onClick={() => {
              setShowRiddles(false);
              setShowWords(true);
              setCurrentGame("word");
            }}
            bg="#e51836"
            justifyContent="center"
            alignItems="center"
            borderRadius={4}
            boxShadow="dark-lg"
            w="60%"
            h="20%"
            color="#65c4b6"
            justifySelf="center"
            alignSelf="center"
            _hover={{
              bg: "#e51836",
              color: "#fedc19",
              boxShadow: "0 4px 16px 0 #65c4b6",
              transform: "scale(1.1)",
            }}
          >
            <Text fontSize="32px" fontFamily="Indie Flower" fontWeight={600}>
              Desembaralhe
            </Text>
          </Flex>
        </Stack>

        {currentGame !== null && (
          <Box
            w={0}
            h={0}
            position="absolute"
            borderRight="20px solid #c2e7ed"
            borderBottom="20px solid transparent"
            borderTop="20px solid transparent"
            left="35%"
            top={currentGame === "riddle" ? "44%" : "64%"}
          />
        )}

        <Stack
          textAlign="center"
          w="70%"
          h="100%"
          justifyContent="center"
          alignSelf="center"
          gap={4}
        >
          <Flex w="100%" h="85%" justifySelf="center" justifyContent="center">
            {!showRiddles && !showWords && <Image borderRadius={8} src={Dance} />}
            {showRiddles && (
              <Stack
                bg="#c2e7ed"
                w="full"
                mr="8%"
                h="full"
                fontFamily="Indie Flower"
                fontWeight={700}
                color="#e31837"
                justifyContent="center"
                borderRadius={8}
              >
                <Text color="#fedc19" mt="2%" mb="7%" fontSize="36px">
                  O que é, o que é?
                </Text>

                <Text fontSize="36px" textDecorationColor="#fedc19" mb="5%" mx="5%">
                  {riddles[currentIndex].hint || "-"}
                </Text>
                <HStack w="80%" onClick={() => setShowAnswer(true)} alignSelf="center">
                  <Text
                    w="28%"
                    fontSize="36px"
                    fontFamily="Indie Flower"
                    fontWeight={700}
                    color="#e31837"
                    textAlign="start"
                  >
                    Resposta:
                  </Text>
                  <Text
                    fontSize="36px"
                    fontFamily="Indie Flower"
                    w="full"
                    fontWeight={700}
                    color="#fedc19"
                    bg="white"
                    borderRadius="35px"
                    py={2}
                  >
                    {showAnswer ? riddles[currentIndex].correctAnswer : "?"}
                  </Text>
                </HStack>
              </Stack>
            )}
            {showWords && (
              <Stack
                bg="#c2e7ed"
                w="full"
                mr="8%"
                h="full"
                fontFamily="Indie Flower"
                fontWeight={700}
                color="#e31837"
                justifyContent="center"
                borderRadius={8}
              >
                <Text color="#fedc19" mt="2%" mb="7%" fontSize="36px">
                  Qual é a palavra?
                </Text>

                <SimpleGrid justifyItems="center" minChildWidth={8} spacing={1} px={10} pb={10}>
                  {words[currentIndex].letters.split("").map((letter, index) => (
                    <Text
                      borderRadius="50%"
                      w="full"
                      bg="white"
                      fontSize="36px"
                      maxW="60px"
                      key={index}
                    >
                      {letter || "-"}
                    </Text>
                  ))}
                </SimpleGrid>
                <HStack w="80%" onClick={() => setShowAnswer(true)} alignSelf="center">
                  <Text
                    w="28%"
                    fontSize="36px"
                    fontFamily="Indie Flower"
                    fontWeight={700}
                    color="#e31837"
                    textAlign="start"
                  >
                    Resposta:
                  </Text>
                  <Text
                    fontSize="36px"
                    fontFamily="Indie Flower"
                    w="full"
                    fontWeight={700}
                    color="#fedc19"
                    bg="white"
                    borderRadius="35px"
                    py={2}
                  >
                    {showAnswer ? words[currentIndex].correctAnswer : "?"}
                  </Text>
                </HStack>
              </Stack>
            )}
            {showAnswer && currentGame === "riddle" && (
              <NextRiddle
                setCurrentIndex={setCurrentIndex}
                setShowAnswer={setShowAnswer}
                total={riddles.length}
                currentIndex={currentIndex}
              />
            )}
            {showAnswer && currentGame === "word" && (
              <NextRiddle
                setCurrentIndex={setCurrentIndex}
                setShowAnswer={setShowAnswer}
                total={riddles.length}
                currentIndex={currentIndex}
              />
            )}
          </Flex>
        </Stack>
      </HStack>
    </Flex>
  );
};

MiniGames.propTypes = {};
