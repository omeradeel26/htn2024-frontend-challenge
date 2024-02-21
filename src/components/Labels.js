import {
  FaClock,
  FaTools,
  FaChessKnight,
  FaLaptopCode,
  FaGlobe,
  FaLock,
} from "react-icons/fa";

import { Flex } from "@chakra-ui/react";

import { getMinutes } from "../utils/dateUtils";

export const TimeLabel = ({ event }) => {
  const millis = event.end_time - event.start_time;
  var minutes = Math.floor(millis / 60000);
  return (
    <Flex
      gap="2"
      bg={"gray.200"}
      borderRadius={8}
      padding="8px"
      alignItems="center"
      fontSize={"sm"}
      width="fit-content"
      paddingLeft="12px"
      paddingRight="12px"
    >
      <FaClock color={"grey"} /> {getMinutes(event.start_time, event.end_time)}{" "}
      mins
    </Flex>
  );
};

export const PublicLabel = () => {
  return (
    <Flex
      gap="2"
      bg={"#f9df80"}
      borderRadius={10}
      padding="8px"
      alignItems="center"
      fontSize={"sm"}
      width="fit-content"
      paddingLeft="12px"
      paddingRight="12px"
    >
      <FaGlobe color={"#eee"} /> Public
    </Flex>
  );
};

export const PrivateLabel = () => {
  return (
    <Flex
      gap="2"
      bg={"#a900d5"}
      borderRadius={10}
      padding="8px"
      alignItems="center"
      fontSize={"sm"}
      width="fit-content"
      paddingLeft="12px"
      paddingRight="12px"
    >
      <FaLock color={"#eee"} /> Private
    </Flex>
  );
};

export const TechLabel = () => {
  return (
    <Flex
      gap="2"
      bg={"blue.300"}
      borderRadius={10}
      padding="8px"
      alignItems="center"
      fontSize={"sm"}
      width="fit-content"
      paddingLeft="12px"
      paddingRight="12px"
    >
      <FaLaptopCode color={"#eee"} /> Tech Talk
    </Flex>
  );
};

export const WorkshopLabel = () => {
  return (
    <Flex
      gap="2"
      bg={"red.400"}
      borderRadius={10}
      padding="8px"
      alignItems="center"
      fontSize={"sm"}
      width="fit-content"
      paddingLeft="12px"
      paddingRight="12px"
    >
      <FaTools color={"#eee"} /> Workshop
    </Flex>
  );
};

export const ActivityLabel = () => {
  return (
    <Flex
      gap="2"
      bg={"green.400"}
      borderRadius={10}
      padding="8px"
      alignItems="center"
      fontSize={"sm"}
      width="fit-content"
      paddingLeft="12px"
      paddingRight="12px"
    >
      <FaChessKnight color={"#eee"} /> Activity
    </Flex>
  );
};
