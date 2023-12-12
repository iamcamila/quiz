import { Button, Flex, keyframes } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { FiChevronsRight } from "react-icons/fi";
import { randomNumber } from "../utils";

const usedRiddle = [];

const check = (random, total) => {
  const includes = usedRiddle.includes(random);
  if (!includes) {
    return random;
  } else {
    const number = randomNumber(total);
    return check(number, total);
  }
};

export const NextRiddle = (props) => {
  const { setShowAnswer, setCurrentIndex, total, currentIndex } = props;

  const handleNext = () => {
    setShowAnswer(false);

    usedRiddle.push(currentIndex);
    if (usedRiddle.length < total) {
      const newNumber = randomNumber(total);
      const random = check(newNumber, total);
      setCurrentIndex(random);
    } else {
      console.log("Acabou");
    }
  };
  const hover = keyframes`
  0% {
    color: rgba(193,11,032,1);
  }
  100% {
    color: #fedc19;
  }`;

  return (
    <Flex
      position="absolute"
      right="19%"
      bottom="17%"
      zIndex={999}
      alignSelf="flex-end"
      onClick={() => handleNext()}
      as={Button}
      color="rgba(193,11,032,1)"
      bg="transparent"
      p={0}
      _hover={{
        bg: "transparent",
        transform: "translateY(0%)",
        transition: "width 275ms ease-in-out 2s",
        animation: `${hover} 500ms infinite alternate`,
      }}
    >
      <FiChevronsRight fontSize="70px" />
    </Flex>
  );
};

NextRiddle.propTypes = {
  setShowAnswer: PropTypes.func,
  setCurrentIndex: PropTypes.func,
  total: PropTypes.number,
  currentIndex: PropTypes.number,
};
