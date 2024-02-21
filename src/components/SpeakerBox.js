import { Box, Image, Text } from "@chakra-ui/react";

import profile from "../assets/profile.png"

export default function SpeakerBox({ speaker}) {
  return (
    <Box>
      {speaker.profile_pic != undefined && <Image src={profile} borderRadius={"50px"} w="80px" h="80px" marginBottom="5px"/>}
      <Text variant="eventSubPage">{speaker.name}</Text>
    </Box>
  );
}
