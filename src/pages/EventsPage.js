import { useContext, useEffect } from "react";
import { DataContext } from "../providers/DataProvider";
import { AuthContext } from "../providers/AuthProvider";

import { Text, Flex, Spacer } from "@chakra-ui/react";

import { Outlet } from "react-router-dom";

import EventBox from "../components/EventBox";
import EventManager from "../components/EventManager";

export default function EventsPage() {
  const { events, resetSearchFilter} = useContext(DataContext);
  const { isSignedIn } = useContext(AuthContext);

  let renderedEvents = events.map((event, index) => {
    if (
      ((event.permission === "private" && isSignedIn()) ||
        event.permission === "public") &&
      event.filtered &&
      event.searched
    ) {
      return <EventBox key={index} event={event} />;
    }
  });

  useEffect(()=>{
    resetSearchFilter();
  }, [])

  return (
    <Flex bg="brand.900" minHeight="90vh">
      <Spacer />
      <Flex direction="column" w="76vw">
        <Text marginTop="15px" marginBottom="15px" variant="header">
          Events
        </Text>
        <EventManager />
        {renderedEvents}
      </Flex>
      <Spacer />
      <Outlet />
    </Flex>
  );
}
