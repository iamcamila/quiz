import { HStack, Image, List, ListIcon, ListItem, Stack, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { FiCheck } from "react-icons/fi";
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
        color="#d64342"
        mb={6}
        mx={10}
        textAlign="justify"
      >
        {selectedGames.title}
      </Text>
      <HStack
        w="70%"
        gap={4}
        fontSize="24px"
        fontFamily="Indie Flower"
        fontWeight={600}
        alignSelf="center"
        color="#495730 "
        mb={6}
        textAlign="justify"
      >
        <Text w="15%" color="#d64342">
          Descrição:
        </Text>
        <Text bg="white" borderRadius="20px" p={4}>
          {selectedGames.description}
        </Text>
      </HStack>
      <HStack
        w="70%"
        gap={4}
        fontSize="24px"
        fontFamily="Indie Flower"
        fontWeight={600}
        alignSelf="center"
        color="#495730 "
        mb={6}
        mx={36}
        textAlign="justify"
      >
        <Text w="15%" color="#d64342">
          Materiais:
        </Text>
        <List bg="white" borderRadius="20px" p={4} w="full">
          {selectedGames.materials.map((item, index) => (
            <ListItem key={index}>
              <ListIcon verticalAlign="middle" as={FiCheck} />
              {item}
            </ListItem>
          ))}
        </List>
      </HStack>
      <Image src={selectedGames.image} borderRadius="10%" width={"40%"} alignSelf="center" />
    </Stack>
  );
};

Games.propTypes = {
  isCorrect: PropTypes.bool,
  comments: PropTypes.string,
};
