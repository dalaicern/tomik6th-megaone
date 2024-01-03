import { Box, Center } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
export default function Main2() {
  const s2 = new Array(4).fill(null);
  const [active, setActive] = React.useState(0);
  const changeSection = (key: any) => {
    console.log(key);
    setActive(key);
  };
  let logos: any = [
    {
      src: "/images/trophy.svg",
    },
    {
      src: "/images/globe.svg",
    },
    {
      src: "/images/smile.svg",
    },
    {
      src: "/images/anchor.svg",
    },
  ];
  let title: any = [
    {
      text: "CREATIVE DESIGNS",
    },
    {
      text: "MEGAONE PUBLICITY",
    },
    {
      text: "HAPPY CLIENTS",
    },
    {
      text: "WORK GLOBALLY",
    },
  ];
  let text: any = [
    {
      text2:
        "Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit",
    },
    {
      text2:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou",
    },
    {
      text2:
        "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a teachings of the great explorer of the truth",
    },

    {
      text2:
        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero",
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
        <Box h="30vh"></Box>
        {s2.map((item, key) => (
          <Box
            w="40%"
            pos={"absolute"}
            style={{
              opacity: key === active ? 1 : 0,
              transition: "1s",
            }}
            ml="37%"
          >
            <Box w="100%" h="5rem" display="flex" justifyContent={"flex-end"}>
              <Center w="5rem">
                <Box
                  bgImage={logos[key].src}
                  bgSize={"cover"}
                  bgPos="center"
                  bgRepeat={"no-repeat"}
                  style={{
                    height: key === active ? "4.5rem" : "0",
                    width: key === active ? "4.5rem" : "0",
                    transition: "all 1s",
                    transform:
                      key === active ? "rotate(720deg)" : "rotate(0deg)",
                  }}
                ></Box>
              </Center>
            </Box>
            <Box textAlign={"right"} mt="3vh">
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
              <Box display="flex" justifyContent={"flex-end"}>
                <Box h="2rem" w="8rem" borderBottom={"2px solid red"}></Box>
              </Box>
              <Box
                h={key === active ? "3rem" : "0"}
                transition={key === active ? "4s" : "0s"}
                w="100%"
                clipPath={"inset(0 0 0 0)"}
              >
                <Box fontSize={"1rem"} mt="3rem" h="3rem">
                  {text[key].text2}
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
        <Box display={"flex"} ml="72%" mt="35vh" pos="relative">
          {s2.map((item, key) => (
            <Box
              w=".7rem"
              h=".7rem"
              rounded={"50%"}
              bgColor="white"
              mr="1rem"
              style={{
                backgroundColor: key === active ? "red" : "white",
              }}
              onClick={() => changeSection(key)}
            ></Box>
          ))}
        </Box>
      </Box>

      <Box
        w="100%"
        h="100vh"
        bgImage="/images/section-2-1.jpeg"
        bgSize={"cover"}
        bgPos="center"
        bgRepeat={"no-repeat"}
      ></Box>
    </>
  );
}
