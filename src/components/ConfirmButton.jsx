import { Button } from "@chakra-ui/react";
import PropTypes from "prop-types";


export const ConfirmButton = (props) => {
  const {isCorrect, currentIndex, choices, correctAnswer, setIsCorrect} = props

  const verifyAnswer = (currentIndex) => {
    if (choices[currentIndex] === correctAnswer) setIsCorrect(true);
    else setIsCorrect(false);
  };
  return (
    <Button
    w="40%"
    fontFamily= "Indie Flower"
    bg="#e9e8ea"
    fontSize='24px'
    fontWeight={600}
    p={2}
    h='auto'
    _hover={{ bg: "#495730", color: "white"}}
    alignSelf="center"
    onClick={() => verifyAnswer(currentIndex)}
    isDisabled={isCorrect !== null}
  >
    CONFIRMAR
  </Button>
  )
};

ConfirmButton.propTypes = {
  isCorrect: PropTypes.bool,
  currentIndex: PropTypes.number,
  choices: PropTypes.arrayOf(PropTypes.string),
  correctAnswer: PropTypes.string,
  setIsCorrect: PropTypes.func
};
