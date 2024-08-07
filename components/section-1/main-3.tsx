import { Box, Center } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
export default function Main3() {
  const s3 = new Array(4).fill(null);
  const [active, setActive] = React.useState(0);
  const changeSection = (key: any) => {
    console.log(key);
    setActive(key);
  };
  let logos: any = [
    {
      src: "/images/s3-img1.jpeg",
    },
    {
      src: "/images/s3-img2.jpeg",
    },
    {
      src: "/images/s3-img3.jpeg",
    },
    {
      src: "/images/s3-img4.jpeg",
    },
  ];
  let title: any = [
    {
      text: "JESSICA WILSON",
    },
    {
      text: "DAVID MARLO",
    },
    {
      text: "TENA WALKIN",
    },
    {
      text: "ELIZABETH SWANN",
    },
  ];
  let subTitle: any = [
    {
      text3: "LEAD DESIGNER",
    },
    {
      text3: "GRAPHIC DESIGNER",
    },
    {
      text3: "STACK DEVELOPER",
    },
    {
      text3: "NODE DESIGNER",
    },
  ];
  let text: any = [
    {
      text2:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.",
    },
    {
      text2:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.",
    },
    {
      text2:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.",
    },

    {
      text2:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.",
    },
  ];

  return (
    <>
      <Box
        pos="absolute"
        w="100%"
        h="100vh"
        fontFamily={"system-ui"}
        fontWeight={200}
        fontSize="5vh"
        bgColor={"#00000065"}
      >
        <Box h="25vh"></Box>
        {s3.map((item, key) => (
          <Box
            w="40%"
            ml="23%"
            pos={"absolute"}
            style={{
              opacity: key === active ? 1 : 0,
              transition: "1s",
            }}
            key = {key}
          >
            <Center h="8rem" w="8rem">
              <Box
                rounded="50%"
                bgImage={logos[key].src}
                bgSize={"cover"}
                bgPos="center"
                bgRepeat={"no-repeat"}
                style={{
                  height: key === active ? "8rem" : "0",
                  width: key === active ? "8rem" : "0",
                  transition: "all 1s",
                }}
              ></Box>
            </Center>
            <Box h="5vh" w="100%" clipPath={"inset(0 0 0 0)"}>
              <Box
                fontWeight={300}
                style={{
                  transform:
                    key === active ? "translateY(0vh)" : "translateY(100px)",
                  transition: key === active ? "all 2s" : "all 1s",
                }}
              >
                {title[key].text}
              </Box>
            </Box>

            <Box
              h="3rem"
              w={
                key === active
                  ? key === 0
                    ? "7.4rem"
                    : key === 3
                    ? "7.4rem"
                    : "9rem"
                  : 0
              }
              transition={key === active ? "all 2s" : "all 0s"}
              mt="3vh"
              borderTop={"2px solid cyan"}
              clipPath={"inset(0 0 0 0)"}
            >
              <Box display={"flex-end"} w="9rem" mt="2vh" fontSize={"1rem"}>
                {subTitle[key].text3}
              </Box>
            </Box>
            <Box display={"flex-end"} fontSize={".9rem"} mt="4vh">
              {text[key].text2}
            </Box>
          </Box>
        ))}
        <Box display={"flex"} ml="23%" mt="40vh" pos="relative">
          {s3.map((item, key) => (
            <Box
              w="3rem"
              h="3rem"
              rounded={"50%"}
              bgImage={logos[key].src}
              bgSize={"cover"}
              bgPos="center"
              bgRepeat={"no-repeat"}
              ml="-.3rem"
              style={{
                opacity: key === active ? 1 : 0.7,
                zIndex: key === active ? 1 : 0,
              }}
              key = {key}
              onClick={() => changeSection(key)}
            ></Box>
          ))}
        </Box>
      </Box>

      <Box
        w="100%"
        h="100vh"
        bgImage="/images/section-3-1.jpeg"
        bgSize={"cover"}
        bgPos="center"
        bgRepeat={"no-repeat"}
      ></Box>
    </>
  );
}
