import { Button, Flex, HStack, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import A from "../gifs/ballA.png";
import B from "../gifs/ballB.png";
import C from "../gifs/ballC.png";
import D from "../gifs/ballD.png";
import E from "../gifs/ballE.png";
import Background from "../gifs/fundo.jpg";
import { randomNumber } from "../utils";
import { BackButton } from "./BackButton";
import { ConfirmButton } from "./ConfirmButton";
import { Gif } from "./Gif";
import { NextButton } from "./NextButton";

const options = [A, B, C, D, E];

export const Quiz = (props) => {

  // Index da questão que será utilizada
  const [currentQuestion, setCurrentQuestion] = useState(randomNumber(props.questions.length));
  // Index da opção selecionada
  const [currentIndex, setCurrentIndex] = useState(null);
  
  const [isCorrect, setIsCorrect] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const { question, choices, correctAnswer } = props.questions[currentQuestion];

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
          <SimpleGrid columns={2} rowGap={6} justifyItems="center" mb={5}>
            {choices.map((item, index) => (
              <HStack
                as={Button}
                _hover={{ bg: "#e9e8ea" }}
                _focus={{ bg: "#e9e8ea" }}
                key={index}
                w="80%"
                fontSize="large"
                fontWeight={600}
                fontFamily="Indie Flower"
                bg="#f8f7f3"
                color="#495730"
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
          <ConfirmButton
            isDisabled={isDisabled}
            currentIndex={currentIndex}
            choices={choices}
            correctAnswer={correctAnswer}
            setIsCorrect={setIsCorrect}
            setIsDisabled={setIsDisabled}
          />
        </Stack>
        <NextButton
          isCorrect={isCorrect}
          currentQuestion={currentQuestion}
          totalQuestion={props.questions.length}
          setIsCorrect={setIsCorrect}
          setCurrentQuestion={setCurrentQuestion}
        />
        <Gif isCorrect={isCorrect} />
      </Stack>
    </Flex>
  );
};

Quiz.propTypes = {
  questions: [
    {
      question: PropTypes.string,
      choices: PropTypes.arrayOf(PropTypes.string),
      type: PropTypes.string,
      correctAnswer: PropTypes.string,
    },
  ],
};
