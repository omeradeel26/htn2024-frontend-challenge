import { useContext } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import { DataContext } from "../providers/DataProvider";
import { AuthContext } from "../providers/AuthProvider";

import logo from "../assets/logo.png";

import {
  Flex,
  Spacer,
  Button,
  Box,
  Text,
  ButtonGroup,
  Image,
} from "@chakra-ui/react";

export default function NavHeader() {
  const { signOut, isSignedIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Flex bg="brand.300" alignItems="center" padding="20px" h="10vh">
      <Flex
        alignItems="center"
        gap="4"
        marginLeft="10vw"
        onClick={() => {
          navigate("/");
        }}
        cursor="pointer"
      >
        <Image src={logo} />
        <Text fontWeight="extrabold">Hackathon Global Inc.™</Text>
      </Flex>
      <Spacer />
      <ButtonGroup marginRight="10vw">
        <Button variant="nav" onClick={() => navigate("/")}>
          <Text fontWeight={location.pathname === "/" && 800}>Home</Text>
        </Button>
        <Button variant="nav" onClick={() => navigate("/events")}>
          <Text fontWeight={location.pathname === "/events" && 800}>
            Events
          </Text>
        </Button>
        {isSignedIn() ? (
          <Button onClick={() => signOut()} variant="calltoaction">
            <Text>Sign Out</Text>
          </Button>
        ) : (
          <Button
            variant="calltoaction"
            onClick={() => {
              navigate("/signin");
            }}
          >
            <Text>Sign In</Text>
          </Button>
        )}
      </ButtonGroup>
    </Flex>
  );
}
