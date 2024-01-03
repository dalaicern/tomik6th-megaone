import { Box, Center } from "@chakra-ui/react";
import React from "react";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
export default function App() {
  let filledArray = new Array(4).fill(null);
  let socialsvg = [
    {
      src: "/images/facebook.svg",
    },
    {
      src: "/images/instagram.svg",
    },
    {
      src: "/images/twitter.svg",
    },
    {
      src: "/images/discord.svg",
    },
  ];
  const [drawer, setDrawer]: any = React.useState(false);
  const openOrClose = () => {
    console.log(drawer);
    setDrawer(!drawer);
  };
  return <Box w="100%" h="100vh" bgColor={"black"}></Box>;
}
