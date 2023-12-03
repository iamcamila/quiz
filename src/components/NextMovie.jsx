import { Button, keyframes } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { randomNumber } from "../utils";

const usedMovies = [];

const check = (random, total) => {
  const includes = usedMovies.includes(random);
  if (!includes) {
    return random;
  } else {
    const number = randomNumber(total);
    return check(number, total);
  }
};

export const NextMovie = (props) => {
  const { setShowHint, setShowGenre, setShowAnswer, setCurrentIndex, total, currentIndex } = props;

  const handleNext = () => {
    setShowHint(false);
    setShowGenre(false);
    setShowAnswer(false);

    usedMovies.push(currentIndex);
    if (usedMovies.length < total) {
      const newNumber = randomNumber(total);
      const random = check(newNumber, total);
      setCurrentIndex(random);
    } else {
      console.log("Acabou");
    }
  };
  const hover = keyframes`
  0% {
    background-color: rgba(73, 87, 48, 0.2);
  }
  100% {
    background-color: rgba(73, 87, 48, 1);
  }`;

  return (
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
      _hover={{
        transform: "translateY(0%)",
        transition: "width 275ms ease-in-out 2s",
        animation: `${hover} 500ms infinite alternate`,
      }}
    >
      Próxima
    </Button>
  );
};

NextMovie.propTypes = {
  setShowHint: PropTypes.func,
  setShowGenre: PropTypes.func,
  setShowAnswer: PropTypes.func,
  setCurrentIndex: PropTypes.func,
  total: PropTypes.number,
  currentIndex: PropTypes.number,
};
