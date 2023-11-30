import { Button } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const ConfirmButton = (props) => {
  const { isDisabled, currentIndex, choices, correctAnswer, setIsCorrect, setIsDisabled } = props;

  const verifyAnswer = (currentIndex) => {
    setIsDisabled(true);
    if (choices[currentIndex] === correctAnswer) setIsCorrect(true);
    else setIsCorrect(false);
  };
  return (
    <Button
      w="40%"
      fontFamily="Indie Flower"
      bg="#e9e8ea"
      color="#495730"
      fontSize="24px"
      fontWeight={600}
      px={2}
      py={4}
      h="auto"
      _hover={{ bg: "#495730", color: "white" }}
      alignSelf="center"
      onClick={() => verifyAnswer(currentIndex)}
      isDisabled={isDisabled}
    >
      CONFIRMAR
    </Button>
  );
};

ConfirmButton.propTypes = {
  isDisabled: PropTypes.bool,
  currentIndex: PropTypes.number,
  choices: PropTypes.arrayOf(PropTypes.string),
  correctAnswer: PropTypes.string,
  setIsCorrect: PropTypes.func,
  setIsDisabled: PropTypes.func,
};
