import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { DataContext } from "../providers/DataProvider";
import { AuthContext } from "../providers/AuthProvider";

import { LinkIcon, ArrowLeftIcon} from '@chakra-ui/icons'

import { Text, Flex, Center, Button, Box } from "@chakra-ui/react";

import { formatDate, getMinutes } from "../utils/dateUtils";

import {
  TimeLabel,
  PublicLabel,
  PrivateLabel,
  TechLabel,
  WorkshopLabel,
  ActivityLabel,
} from "../components/Labels";

import SpeakerBox from "../components/SpeakerBox";

export default function EventPage() {
  const params = useParams();
  const { getEvent, events } = useContext(DataContext);
  const { isSignedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const [event, setEvent] = useState({ name: "", description: "", speakers: [], related_events: [] });

  useEffect(() => {
    getEvent(params.eventId).then((res) => {
      setEvent(res);
    });
  }, [params]);

  const renderRelatedEvents = () => {
    const tempEvents = [...events];
    tempEvents.sort(function compare(a, b) {
      return parseFloat(b.start_time) - parseFloat(a.start_time);
    });

    const headers = [];

    for (let i=0; i<event.related_events.length; i++){
      headers.push({id: event.related_events[i], name: tempEvents[event.related_events[i]].name})
    }

    return (
      <Flex gap="3" direction="column" >
        {headers.map((header)=>{
          return (
            <Button onClick={() => {
              navigate(`/events/${header.id}`)
            }} variant="link" padding="0">{header.name}</Button>
          )
        })}

      </Flex>
    )
  }

  return (
    <Flex bg={"brand.900"} align="center" direction="column">
       <Button position="relative" variant="link" zIndex="3" left="-410px" top="40px" leftIcon={<ArrowLeftIcon/>} onClick={()=>{navigate('/events')}} color='white'>Go Back</Button>
      <Center minHeight={"90vh"}>
        <Flex
          w={"60vw"}
          h={"75vh"}
          bg={"#fff"}
          padding="40px"
          borderRadius="10px"
          direction="column"
        >
          <Flex direction="column" justify="space-between">
            <Text variant="eventSubPageHeader">{event.name} </Text>
            <Text variant="eventSubPageDate" marginBottom="17px">
              {formatDate(event.start_time, event.end_time)}
            </Text>
          </Flex>
          <Flex>
            <Box w="25%">
              <Text marginBottom="2px" variant="eventSubPage" fontWeight={600}>
                Duration
              </Text>
              <TimeLabel event={event} />
              <Text marginTop="12px" marginBottom="wpx" variant="eventSubPage" fontWeight={600}>
                Event Type
              </Text>
              {event.event_type == "workshop" && <WorkshopLabel />}
              {event.event_type == "activity" && <ActivityLabel />}
              {event.event_type == "tech_talk" && <TechLabel />}
              <Text marginTop="12px" marginBottom="2px" variant="eventSubPage" fontWeight={600}>
                Permissions
              </Text>
              {event.permission == "public" && <PublicLabel />}
              {event.permission == "private" && <PrivateLabel />}
              {(event.private_url != "" || event.public_url != "") && (
                <Text marginTop="12px" variant="eventSubPage" marginBottom="5px" fontWeight={600} >
                  Links
                </Text>
              )}
              <Flex direction="column" gap="2">
                {event.public_url != "" && (
                  <Button padding="0" onClick={()=> {window.open(event.public_url)}} variant="link" bg={"grey.100"} fontSize={'sm'} leftIcon={<LinkIcon/>}>Public URL</Button>
                )}
                {(event.private_url != "" && isSignedIn()) && (
                  <Button padding="0" onClick={()=> {window.open(event.private_url)}} variant="link" bg={"grey.100"} fontSize={'sm'} leftIcon={<LinkIcon/>}>Private URL</Button>
                )}
              </Flex>
            </Box>

            <Box w="75%">
              <Text marginBottom="7px" variant="eventSubPage" fontWeight={600}>
                Description
              </Text>
              <Text variant="eventSubPage">{event.description}</Text>
              <Flex>
                {event.speakers.length != 0 && (
                  <Box w="40%">
                    <Text variant="eventSubPage" marginTop="8px" marginBottom="7px" fontWeight={600}>
                      Speakers
                    </Text>
                    <Flex gap="4" direction>
                      {event.speakers.map((speaker)=>{
                        return (
                          <SpeakerBox speaker={speaker} />
                        )
                      })}
                    </Flex>
                  </Box>
                )}
                <Box w="60%">
                  {event.related_events.length > 0 && 
                    <Text variant="eventSubPage" marginTop="8px" marginBottom="7px" fontWeight={600}>Related Events</Text>
                  }
                  {renderRelatedEvents()}
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Center>
    </Flex>
  );
}
