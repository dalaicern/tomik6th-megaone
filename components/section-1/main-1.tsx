import { Box, Center } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import ReactSlider from "react-slider";

export default function Main1() {
  const [currentValue, setCurrentValue] = React.useState(47.5);
  const s1: any = new Array(3).fill(null);
  let imgs: any = [
    {
      src: "/images/section-1-1.jpeg",
    },
    {
      src: "/images/section-1-2.jpeg",
    },
    {
      src: "/images/section-1-3-behind.jpeg",
    },
  ];
  const [active, setActive] = React.useState(0);
  const swipeRight = () => {
    if (active < 2) {
      setActive(active + 1);
    } else if (active === 2) {
      setActive(0);
    }
  };
  const swipeLeft = () => {
    if (active > 0) {
      setActive(active - 1);
    } else if (active === 0) {
      setActive(2);
    }
  };

  return (
    <>
      <Box w="100%" h="100vh" bgColor={"white"}>
        <Center
          w="10rem"
          fontSize="1.2rem"
          fontFamily={"system-ui"}
          fontWeight={300}
          h="3rem"
          bgColor={"#24c4f4"}
          mt="73vh"
          ml="46.5%"
          rounded="3rem"
          pos="absolute"
          _hover={{
            border: "2px solid #24c4f4",
            color: "#24c4f4",
            bg: "transparent",
            fontWeight: 400,
          }}
          zIndex="5"
        >
          Get Started
        </Center>
        {s1.map((item: any, key: any) => (
          <>
            <Box
              style={{
                transition: "all .5s ",
                opacity: key === active ? 1 : 0,
              }}
            >
              <ReactSlider
                className="customSlider"
                trackClassName={active === 2 ? "custom3" : "customSlider-track"}
                thumbClassName="customSlider-thumb"
                defaultValue={50}
                value={currentValue}
                onChange={(value) => setCurrentValue(value)}
              />
            </Box>

            <Center
              h="2.5rem"
              mt="93vh"
              ml="48.5%"
              pos="absolute"
              style={{
                zIndex: key === active ? 5 : 0,
                transition: key === active ? "2s" : "0s",
              }}
            >
              <Box
                w="2.5rem"
                h="2.5rem"
                bgImage="/images/prev.svg"
                bgSize={"50%"}
                bgPos="center"
                bgRepeat={"no-repeat"}
                bgColor="#00000060"
                _hover={{ border: "1px solid", rounded: "5px" }}
                onClick={() => swipeLeft()}
              ></Box>
              <Box
                w="2.5rem"
                h="2.5rem"
                bgImage="/images/next.svg"
                bgSize={"50%"}
                bgPos="center"
                bgRepeat={"no-repeat"}
                bgColor="#00000060"
                _hover={{ border: "1px solid", rounded: "5px" }}
                onClick={() => swipeRight()}
              ></Box>
            </Center>

            <Center
              pos="absolute"
              w="100%"
              h="100vh"
              fontFamily={"system-ui"}
              fontWeight={200}
              fontSize="8vh"
              zIndex={4}
              pointerEvents="none"
              bgColor={active === 2 ? "#00000020" : ""}
              transition={key === active ? "4s" : "1s"}
              opacity={key === active ? 1 : 0}
            >
              <Box mt="-8vh">
                <Center mb="-1vh" className="top">
                  {" "}
                  The Premium
                </Center>
                <Center
                  w="100%"
                  h="8vh"
                  fontWeight="600"
                  clipPath={"inset(0px 0px -3px 0px)"}
                >
                  <Box
                    className="mid"
                    style={{
                      transform:
                        key === active
                          ? "translateY(0vh)"
                          : "translateY(100px)",
                      transition: key === active ? "all 2s" : "all 1s",
                    }}
                  >
                    {" "}
                    Digital Business
                  </Box>
                </Center>
                <Center mt="-1vh" className="bottom">
                  {" "}
                  Brand Agency
                </Center>
                <Center fontSize={"2.5vh"} mt="1rem">
                  The Best Multipurpose One Page Template In Market
                </Center>
              </Box>
            </Center>

            <Box
              w="100%"
              h="100vh"
              bgImage={imgs[key].src}
              bgSize={"cover"}
              bgPos="center"
              bgRepeat={"no-repeat"}
              pos="absolute"
              style={{
                zIndex: key === active ? 1 : 0,
              }}
              transition="all 4s "
              opacity={key === active ? 1 : 0}
            ></Box>
          </>
        ))}
      </Box>
    </>
  );
}
