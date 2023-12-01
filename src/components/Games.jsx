import { Image, Stack, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { gamesLibrary } from "../assets/gamesLibrary";
import Lights from "../assets/images/lights.gif";
import { randomNumber } from "../utils";

export const Games = () => {
  const games = gamesLibrary.games;
  const selectedGames = games[randomNumber(games.length)];

  return (
    <Stack w="70%" h="80%" gap={0} position="absolute" justifyContent="flex-start" bg="#f8f7f3">
      <Image src={Lights} mb={10} />
      <Text
        fontSize="42px"
        fontFamily="Indie Flower"
        alignSelf="center"
        fontWeight={800}
        color="#495730"
        mb={6}
        mx={10}
        textAlign="justify"
      >
        {selectedGames.title}
      </Text>
      <Text
        fontSize="24px"
        fontFamily="Indie Flower"
        fontWeight={600}
        alignSelf="center"
        color="#495730 "
        mb={6}
        mx={24}
        textAlign="justify"
      >
        {selectedGames.description}
      </Text>
      <Image src={selectedGames.image} borderRadius="10%" width={"40%"} alignSelf="center" />
    </Stack>
  );
};

Games.propTypes = {
  isCorrect: PropTypes.bool,
  comments: PropTypes.string,
};
