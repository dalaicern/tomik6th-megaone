import { useRouter } from "next/router";
import { Box, Center } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
const Drawer = (props: any) => {
  const [menu, setMenu] = React.useState([
    "HOME",
    "SERVICES",
    "TEAM",
    "ABOUT US",
    "PORTFOLIO",
    "CONTACT",
  ]);
  const getSection = (key: any) => {
    // setActive(key);
  };

  return (
    <Box
      bgColor={"#000000bb"}
      pos="fixed"
      right="0"
      height={"100vh"}
      style={{
        width: props.drawer ? "15%" : "2vh",
        transition: "0.5s",
        opacity: props.drawer ? 1 : 0,
        zIndex: props.drawer ? 99 : -99,
      }}
    >
      <Center
        right={"4rem"}
        rounded="20px"
        pos="fixed"
        h="100vh"
        style={{
          transition: "all 0.5s ease-in-out",
          width: props.drawer ? "8%" : "0px",
        }}
      >
        <Box>
          {menu.map((item, key) => (
            <Center w="20rem">
              <Center
                w="10rem"
                h="3rem"
                rounded="1rem"
                fontSize="1.4rem"
                fontFamily={"system-ui"}
                fontWeight={200}
                transition={
                  props.drawer
                    ? key === 0
                      ? ".5s"
                      : key === 1
                      ? "1.5s"
                      : key === 2
                      ? ".5s"
                      : key === 3
                      ? "1.5s"
                      : key === 4
                      ? ".5s"
                      : key === 5
                      ? "1.5s"
                      : "0s"
                    : "0s"
                }
                transform={
                  props.drawer ? "translate(0rem)" : "translate(16rem)"
                }
                border={"0.25px solid"}
                mt="1.5rem"
                _hover={{
                  transition: "all .3s",
                  transform: "translate(0px) rotate(360deg)  ",
                }}
                // onClick={() => {
                //   getSection(key);
                //   openOrClose();
                // }}
              >
                {item}
              </Center>
            </Center>
          ))}
        </Box>
      </Center>
    </Box>
  );
};
export default Drawer;
