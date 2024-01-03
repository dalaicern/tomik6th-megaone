import { Box, Center } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

export default function Main5(key: any) {
  const Hover = () => {
    console.log("enter");
    let logo: any = document.querySelector("#logo");
    document.addEventListener("mousemove", function (e) {
      var x = e.clientX;
      var y = e.clientY;
      logo.style.left = x + "px";
      logo.style.top = y + "px";
    });
  };
  const unHover = () => {
    console.log("not");
    let logo: any = document.querySelector("#logo");
    document.addEventListener("mousemove", function (e) {
      var x = e.clientX;
      var y = e.clientY;
      logo.style.left = "25vh";
      logo.style.top = "25vh";
    });
  };
  return (
    <>
      <Box
        w="50%"
        h="50vh"
        bgColor={"red"}
        pos="fixed"
        onMouseEnter={() => Hover()}
        onMouseLeave={() => unHover()}
      >
        <Box
          w="2rem"
          h="2rem"
          border="1px solid"
          rounded="50%"
          id="logo"
          zIndex={900}
          left="25vh"
          top="25vh"
          pos="sticky"
          transform="translate(-50%, -50%)"
          transition={"100ms"}
          pointerEvents="none"
          color={"black"}
        ></Box>
      </Box>
    </>
  );
}
