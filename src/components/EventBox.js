import { Flex, Text, Spacer, Box, Button } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

import { formatDate } from "../utils/dateUtils";

import {TimeLabel, PublicLabel, PrivateLabel, TechLabel, WorkshopLabel, ActivityLabel} from "./Labels"

export default function EventBox({ event }) {
  const navigate = useNavigate();

  return (
    <Flex
      direction="column"
      marginBottom="20px"
      bg="#FFF"
      borderRadius="8px"
      padding="33px"
    >
      <Flex alignItems="center">
        <Text variant="eventTitle" marginBottom="5px">
          {event.name}
        </Text>
        <Spacer />
        <Text variant="date">
          {formatDate(event.start_time, event.end_time)}
        </Text>
      </Flex>
      <Text noOfLines={2} variant="eventDescr" marginBottom="25px">
        {event.description}
      </Text>
      <Flex>
        <Flex gap="3">
          <TimeLabel event={event}/>
          {event.permission == "public" && <PublicLabel />}
          {event.permission == "private" && <PrivateLabel />}
          {event.event_type == "workshop" && <WorkshopLabel />}
          {event.event_type == "activity" && <ActivityLabel />}
          {event.event_type == "tech_talk" && <TechLabel />}
        </Flex>
        <Spacer />
        <Button zIndex={0}onClick={() => navigate(`${event.id}`)}>See More</Button>
      </Flex>
    </Flex>
  );
}
