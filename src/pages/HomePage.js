import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../providers/AuthProvider";

import { Flex, Image, Center, Text, Spacer, Button } from "@chakra-ui/react";

import earth from "../assets/earth.gif";

export default function HomePage() {
  const navigate = useNavigate();

  const { isSignedIn } = useContext(AuthContext);

  return (
    <Flex bg="brand.900" h="90vh">
      <Spacer />
      <Flex w="50vw" direction="column" padding="20px">
        <Spacer />
        <Text variant="title">
          Hackathon Global is HERE. <br />
          At the{" "}
          <Text variant="title" as="u">
            world's largest hackathon,
          </Text>
          <br />
          you will learn, innovate, and connect!
        </Text>
        <Spacer />
        <Flex gap="5" align="center">
          <Button
            variant="calltoaction"
            onClick={() => {
              navigate("/events");
            }}
          >
            <Text>View Events</Text>
          </Button>
          {!isSignedIn() && (
            <Text as="u" onClick={() => navigate("/signin")}>
              Sign In.
            </Text>
          )}
        </Flex>
        <Spacer />
      </Flex>
      <Center w="30vw">
        <Image src={earth} w={400} h={350} />
      </Center>
      <Spacer />
    </Flex>
  );
}
