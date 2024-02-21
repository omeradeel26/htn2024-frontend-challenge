import { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "../providers/AuthProvider";

import { Box, Label,  Image, Text, Input, Flex, Button } from "@chakra-ui/react";

export default function SignInBox() {
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <Flex direction="column" w="300px" h="300px" justify={"space-around"} bg="white" borderRadius="15px" padding="15px">
      <Text fontSize="lg" color="black">Sign In</Text>
      <label>Username</label>
      <Input
        onChange={(e) => setUser(e.target.value)}
      />
      <label>Password</label>
      <Input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <Button
        marginTop="8px"
        onClick={() => {
          if (signIn(user, password)) {
            navigate("/events");
          }
        }}
      >
        Enter
      </Button>

      <Text fontSize="sm" marginTop="5px" color="black">user: hackthenorth, pass: 2024!</Text>
    </Flex>
  );
}
