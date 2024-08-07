import { Box, Center } from "@chakra-ui/react";
import { useEffect } from "react";
import React from "react";
import Main1 from "@/components/section-1/main-1";
import Main2 from "@/components/section-1/main-2";
import Main3 from "@/components/section-1/main-3";
import Main6 from "@/components/section-1/main-6";
import Main5 from "@/components/section-1/main-5";
import Main4 from "@/components/section-1/main-4";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import Drawer from "@/components/menu/drawer";

export default function Home() {
  const sectionStat: any = new Array(6).fill(null);
  const [active, setActive] = React.useState(0);

  let divs: any = [
    {
      div: <Main1></Main1>,
    },
    {
      div: <Main2></Main2>,
    },
    {
      div: <Main3></Main3>,
    },
    {
      div: <Main4></Main4>,
    },
    {
      div: <Main5></Main5>,
    },
    {
      div: <Main6></Main6>,
    },
  ];
  const changeSection = (key: any) => {
    setActive(key);
  };
  const scrollDown = (key: any) => {
    if (key < 5) {
      setActive(key + 1);
      let section: any = document.querySelectorAll(".sliderSections .section");
      // section[active - 1].style.transform = "translateY(-100vh)";
    }
  };
  const scrollUp = (key: any) => {
    if (key > 0) {
      setActive(key - 1);
      let section: any = document.querySelectorAll(".sliderSections .section");
      section[active].style.transform = "translateY(0vh)";
    }
  };
  useEffect(() => {
    let cursorinner: any = document.querySelector("#cursor");

    document.addEventListener("mousemove", function (e) {
      var x = e.clientX;
      var y = e.clientY;
      cursorinner.style.left = x + "px";
      cursorinner.style.top = y + "px";
    });
  });

  let filledArray: any = new Array(4).fill(null);
  let socialsvg: any = [
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

  return (
      <body>
      <Drawer openClose={() => openOrClose()} drawer={drawer}></Drawer>
      <Box
          pos={"fixed"}
          w="6rem"
          left="20px"
          h="100vh"
          top="40px"
          zIndex={100}
      >
        <Box
            w="100%"
            h="40%"
            bgImage="/images/logo-white.png"
            bgSize={"100%"}
            bgPos="cover"
            bgRepeat={"no-repeat"}
        ></Box>

        <Box w="4rem" h="40%" overflow={"visible"}>
          {filledArray.map((item: any, key: any) => (
              <MouseParallaxContainer
                  globalFactorX={1}
                  globalFactorY={1}
                  resetOnLeave={true}
                  key={key}
              >
                <MouseParallaxChild factorX={-1} factorY={-1}>
                  <Box
                      w="100%"
                      h="2.5rem"
                      bgImage={socialsvg[key].src}
                      bgSize={"25%"}
                      bgPos="center"
                      bgRepeat={"no-repeat"}
                  ></Box>
                </MouseParallaxChild>
              </MouseParallaxContainer>
          ))}
        </Box>
      </Box>
      <Box pos={"fixed"} w="5rem" h="10vh" right="0px" top="0px" zIndex={100}>
        <MouseParallaxContainer
            globalFactorX={1}
            globalFactorY={1}
            resetOnLeave={true}
        >
          <MouseParallaxChild factorX={-1} factorY={-1}>
            <Box
                w="100%"
                h="10vh"
                bgImage="/images/menu.svg"
                bgSize={"70%"}
                bgPos="center"
                bgRepeat={"no-repeat"}
                onClick={() => openOrClose()}
            ></Box>
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </Box>

      <Box
          w="2rem"
          h="2rem"
          border="1px solid"
          rounded="50%"
          id="cursor"
          pos="fixed"
          zIndex={900}
          left="0"
          top="0"
          transform="translate(-50%, -50%)"
          transition={"100ms"}
          pointerEvents="none"
      ></Box>
      <Box
          pos="fixed"
          w="2rem"
          h="11rem"
          bgColor={"#00000040"}
          right="20px"
          top="40vh"
          rounded={"1rem"}
          zIndex="100"
      >
        {sectionStat.map((item: any, key: any) => (
            <Box
                w="1rem "
                h="1rem"
                rounded="50%"
                bgColor={"white"}
                mt="10px"
                ml="8px"
                id="stat"
                onClick={() => changeSection(key)}
                style={{
                  scale: key === active ? 1.5 : 1,
                  backgroundColor: key === active ? "transparent" : "",
                  border: key === active ? "1px solid" : 0,
                }}
                _hover={{
                  bgColor: "cyan",
                }}
                key={key}
            ></Box>
        ))}
      </Box>
      <Box>
        {sectionStat.map((item: any, key: any) => (
            <Box
                className="sliderSections"
                key={key}>
              <Box
                  className="section"
                  pos="absolute"
                  w="100%"
                  h="1000px"
                  style={{
                    zIndex:
                        key === 0
                            ? 6
                            : key === 1
                                ? 5
                                : key === 2
                                    ? 4
                                    : key === 3
                                        ? 3
                                        : key === 4
                                            ? 2
                                            : key === 5
                                                ? 1
                                                : 0,

                    pointerEvents: key === active ? "auto" : "none",
                    transform:
                        key === active
                            ? "translateY(0vh)"
                            : key > active
                                ? "translateY(0vh)"
                                : "translateY(-100vh)",
                  }}
                  onWheel={(event: any) => {
                    if (event.nativeEvent.wheelDelta > 0) {
                      scrollUp(key);
                    } else {
                      scrollDown(key);
                    }
                  }}
                  transition="all 1s"
              >
                {divs[key].div}
              </Box>
            </Box>
        ))}
      </Box>
      </body>
  );
}
