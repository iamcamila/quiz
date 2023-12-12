import { Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import { CorrectOptions, WrongOptions } from "../assets/images";
import { randomNumber } from "../utils";

export const Gif = (props) => {
  const { isCorrect, comments } = props;
  const wrongOptions = WrongOptions();
  const correctOptions = CorrectOptions();

  return (
    <>
      {isCorrect !== null && (
        <Stack
          w="70%"
          h="80%"
          gap={0}
          position="absolute"
          justifyContent="center"
          bg={isCorrect ? "#40bb61" : "#fc0015"}
        >
          <HStack justifyContent="center">
            <Flex justifyContent="center" mb={6}>
              {isCorrect ? (
                <FiCheckCircle
                  fontSize="64px"
                  fontWeight={700}
                  color="white"
                  mb={6}
                  alignSelf="center"
                />
              ) : (
                <FiXCircle
                  fontSize="64px"
                  fontWeight={700}
                  color="white"
                  mb={6}
                  alignSelf="center"
                />
              )}
            </Flex>
            <Text fontSize="48px" fontWeight={700} color="white" mb={6} alignSelf="center">
              {isCorrect ? "Correta" : "Incorreta"}
            </Text>
          </HStack>
          <Text fontSize="16px" fontWeight={600} color="white" mb={6} mx={10} textAlign="justify">
            {comments}
          </Text>
          <Image
            src={
              isCorrect
                ? correctOptions[randomNumber(correctOptions.length)]
                : wrongOptions[randomNumber(correctOptions.length)]
            }
            borderRadius="10%"
            width={comments ? "40%" : "50%"}
            alignSelf="center"
          />
        </Stack>
      )}
    </>
  );
};

Gif.propTypes = {
  isCorrect: PropTypes.bool,
  comments: PropTypes.string,
};
