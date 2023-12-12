import {
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { Options } from "../assets/images/";
import Background from "../assets/images/backgrounds/fundo.jpg";
import { quizLibrary1 } from "../assets/quizLibrary";
import { randomNumber } from "../utils";
import { BackButton } from "./BackButton";
import { ConfirmButton } from "./ConfirmButton";
import { GameButton } from "./GameButton";
import { Games } from "./Games";
import { Gif } from "./Gif";
import { NextButton } from "./NextButton";
import { PayButton } from "./PayButton";

const options = Options();
const questions = quizLibrary1.questions;

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(randomNumber(questions.length));
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [payButton, setPayButton] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const { question, choices, correctAnswer, questionImage, comments } = questions[currentQuestion];

  const rightIndex = choices
    .map((option, index) => {
      if (option === correctAnswer) return index;
    })
    .filter((item) => item !== undefined)[0];

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
        <Stack textAlign="center" w="60%" h="60%" justifyContent="center" alignSelf="center">
          <Text fontSize="36px" fontFamily="Indie Flower" fontWeight={700} color="#495730" mb={6}>
            {question}
          </Text>
          {questionImage && (
            <Image mb={2} borderRadius={10} alignSelf="center" w="45%" src={questionImage} />
          )}
          <SimpleGrid columns={2} rowGap={6} justifyItems="center" mb={5}>
            {choices.map((item, index) => (
              <HStack
                as={Button}
                _hover={{ bg: "#e9e8ea" }}
                _focus={{ bg: "#e9e8ea" }}
                key={index}
                w="80%"
                fontSize="large"
                whiteSpace="normal"
                fontWeight={600}
                fontFamily="Indie Flower"
                bg={showAnswer && rightIndex === index ? "#495730" : "#f8f7f3"}
                color={showAnswer && rightIndex === index ? "#e9e8ea" : "#495730"}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsDisabled(false);
                }}
                gap={2}
                borderRadius="10px"
                justifyContent="flex-start"
                h="auto"
                p={1}
              >
                <Image w="20%" src={options[index]} />
                <Text>{item}</Text>
              </HStack>
            ))}
          </SimpleGrid>
          <ButtonGroup justifyContent="space-between">
            {payButton && <PayButton setShowAnswer={setShowAnswer} setPayButton={setPayButton} />}
            {!payButton && (
              <GameButton
                setShowAnswer={setShowAnswer}
                setPayButton={setPayButton}
                setShowGame={setShowGame}
              />
            )}
            <ConfirmButton
              isDisabled={isDisabled}
              currentIndex={currentIndex}
              choices={choices}
              correctAnswer={correctAnswer}
              setIsCorrect={setIsCorrect}
              setIsDisabled={setIsDisabled}
            />
          </ButtonGroup>
        </Stack>
        <NextButton
          isCorrect={isCorrect}
          currentQuestion={currentQuestion}
          totalQuestion={questions.length}
          setIsCorrect={setIsCorrect}
          setCurrentQuestion={setCurrentQuestion}
          showGame={showGame}
          setShowGame={setShowGame}
        />
        <Gif isCorrect={isCorrect} comments={comments} />
        {showGame && <Games />}
      </Stack>
    </Flex>
  );
};

Quiz.propTypes = {};
