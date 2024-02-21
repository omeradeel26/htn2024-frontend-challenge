import { extendTheme } from "@chakra-ui/react";

// Component style overrides
import Button from "./components/button";
import Text from "./components/text";

const overrides = {
  colors: {
    brand: {
      100: "#FFFFF", // white
      200: "#80b192", //green
      300: "#252334", //raisin black
      900: "#2E294E", //space cadet
    },
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  components: {
    Button,
    Text,
    // Other components go here
  },
};

const theme = extendTheme(overrides);

export default theme;
