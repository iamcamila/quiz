import { Button, HStack, keyframes } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { FiChevronsRight } from "react-icons/fi";


export const NextButton = (props) => {
  const {isCorrect, currentQuestion, totalQuestion, setIsCorrect, setCurrentQuestion} = props

  const handleNext = () => {
    setIsCorrect(null);
    if (currentQuestion !== totalQuestion) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };
  const hover = keyframes`
  0% {
    color: #f8f7f3;
  }
  100% {
    color: #ddc28c;
  }`

  return (
    isCorrect !== null && (
      <HStack
      as={Button}
      bg='transparent'
      color='#f8f7f3'
      _hover={{bg: 'transparent', transform: 'translateX(0%)', transition: 'width 275ms ease-in-out 2s' ,animation: `${hover} 500ms infinite alternate` }} 
      onClick={() => handleNext()} 
      gap={0}
      position="absolute" 
      h='10%'
      zIndex={999}
      alignSelf="flex-end" 
      fontFamily="Indie Flower"
      fontWeight={700}
      justifyContent= 'center'>
      <FiChevronsRight  fontSize='70px'/>
      </HStack>
    )
  )
};

NextButton.propTypes = {
  isCorrect: PropTypes.bool,
  currentQuestion: PropTypes.number,
  totalQuestion: PropTypes.number,
  setIsCorrect: PropTypes.func,
  setCurrentQuestion: PropTypes.func
};
