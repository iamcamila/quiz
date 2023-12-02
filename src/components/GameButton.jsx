import { Button } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const GameButton = (props) => {
  const { setShowAnswer, setPayButton, setShowGame } = props;

  const handleClick = () => {
    setShowAnswer(false);
    setPayButton(true);
    setShowGame(true);
  };
  return (
    <Button
      w="45%"
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
      onClick={() => handleClick()}
    >
      JOGO
    </Button>
  );
};

GameButton.propTypes = {
  setShowAnswer: PropTypes.func,
  setPayButton: PropTypes.func,
  setShowGame: PropTypes.func,
};
