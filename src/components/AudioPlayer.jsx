import { HStack, Input, Stack, Text } from "@chakra-ui/react";
import moment from "moment/moment";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { FiPause, FiPlay } from "react-icons/fi";

export const AudioPlayer = (props) => {
  const { song } = props;

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef();

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  useEffect(() => {
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);
  const handleToggle = () => {
    setIsPlaying((prev) => !prev);
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
  };

  const handleFormat = (time) => {
    const formattedTime = moment("1900-01-01 00:00:00").add(time, "seconds").format("m:ss");
    return formattedTime;
  };

  return (
    <Stack
      fontSize="36px"
      fontFamily="Indie Flower"
      w="100%"
      fontWeight={700}
      color="#495730"
      bg="white"
      borderRadius="35px"
      alignSelf="center"
      p={2}
    >
      <Text fontSize="24px">Nome da música e cantor</Text>

      <audio src={song} ref={audioRef} type="audio/mpeg" />
      <HStack w="100%" justifyContent="center">
        <Text fontSize="24px">{handleFormat(currentTime)}</Text>
        <Input
          type="range"
          min={0}
          defaultValue={0}
          onChange={handleSeek}
          max={duration}
          value={currentTime}
          w="70%"
          h={2}
          bg="rgba(73, 87, 48)"
          borderRadius="35px"
          p={0}
          alignSelf="center"
          style={{ accentColor: "rgba(193,11,032)", opacity: 0.3 }}
        />
        <Text fontSize="24px">{handleFormat(duration)}</Text>
      </HStack>
      <HStack justifyContent="center">
        {isPlaying ? (
          <FiPause fontSize="24px" onClick={() => handleToggle()} />
        ) : (
          <FiPlay fontSize="24px" onClick={() => handleToggle()} />
        )}
      </HStack>
    </Stack>
  );
};

AudioPlayer.propTypes = {
  song: PropTypes.any,
};
