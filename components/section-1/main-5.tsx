import { Box, Center } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

function Tilt(props: any) {
  const { options, ...rest } = props;
  const tilt: any = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

export default function Main5(key: any) {
  const [active, setActive] = React.useState(1);
  const changeSection = (key: any) => {
    setActive(key);
  };
  const handleRight = () => {
    let imgs: any = document.querySelectorAll(".section-5-imgs");

    if (active < 4) {
      setActive(active + 1);
    }
    imgs[active + 1].scrollIntoView({ behavior: "smooth" });
  };
  const handleLeft = () => {
    let imgs: any = document.querySelectorAll(".section-5-imgs");

    if (active > 1) {
      setActive(active - 1);
    }
    imgs[active - 1].scrollIntoView({ behavior: "smooth" });
  };
  const changeBg = (key: any) => {
    let imgs: any = document.querySelectorAll(".section-5-imgs");
    imgs[key].scrollIntoView({ behavior: "smooth" });
  };

  const s3 = new Array(5).fill(null);

  let logos: any = [
    {
      src: "",
    },

    {
      src: "/images/section-5-1.jpg",
    },
    {
      src: "/images/section-5-2.jpeg",
    },
    {
      src: "/images/section-5-3.jpeg",
    },
    {
      src: "/images/section-5-4.jpeg",
    },
  ];
  let smallTitle: any = [
    {
      text: "",
    },
    {
      text: "Photography",
    },
    {
      text: "Photography",
    },
    {
      text: "Video",
    },
    {
      text: "Design",
    },
  ];
  let bigTitle: any = [
    {
      text2: "",
    },
    {
      text2: "FOREST HOUSE",
    },
    {
      text2: "ATHLETE CLASS",
    },
    {
      text2: "GOTI SAAB",
    },
    {
      text2: "LADY IN WHITE",
    },
  ];
  const options = {
    reverse: false,
    glare: 0.5,
    speed: 1000,
    max: 1,
  };
  return (
    <>
      <Box
        display={"flex"}
        w="100%"
        h="10vh"
        alignItems={"center"}
        fontFamily={"system-ui"}
        fontWeight={200}
        fontSize="5vh"
        pos="absolute"
        mt="45vh"
        zIndex={1}
      >
        <Box w="5%"></Box>
        <Box w="6%" h="1px" bgColor={"#ffffff90"}></Box>
        <Center w="80%">
          <Center w="8rem" fontSize={"1.2rem"}>
            <Box h="1.5rem">
              {s3.map((item, key) => (
                <Box
                  style={{
                    height: key === 0 ? "0vh" : "1.5rem",
                    opacity: key === active ? (key === 0 ? 0 : 1) : 0,
                    transform:
                      active === 1
                        ? "translateY(0vh)"
                        : active === 2
                        ? "translateY(-1.5rem)"
                        : active === 3
                        ? "translateY(-3rem)"
                        : active === 4
                        ? "translateY(-4.5rem)"
                        : "",
                    transition: "all 1s",
                  }}
                  key = {key}
                >
                  {key}
                </Box>
              ))}
            </Box>
            <Center w="2rem">|</Center>4
          </Center>
          <Center w="80%">
            <Box w="50%" h="10vh">
              {s3.map((item, key) => (
                <Box
                  fontWeight={800}
                  style={{
                    opacity: key === active ? (key === 0 ? 0 : 1) : 0,
                    transform:
                      active === 1
                        ? "translateY(0vh)"
                        : active === 2
                        ? "translateY(-10vh)"
                        : active === 3
                        ? "translateY(-20vh)"
                        : active === 4
                        ? "translateY(-30vh)"
                        : "",
                    transition: key === active ? "all 1s" : "all .7s",
                  }}
                  key = {key}
                >
                  <Center fontSize={"1rem"}>{smallTitle[key].text}</Center>
                  <Center fontSize={"4rem"}>{bigTitle[key].text2}</Center>
                </Box>
              ))}
            </Box>
          </Center>
          <Box
            w="3rem"
            h="3rem"
            bgImage={"/images/prev.svg"}
            bgSize={"cover"}
            bgPos="center"
            bgRepeat={"no-repeat"}
            onClick={() => {
              handleLeft();
            }}
          ></Box>
          <Box w="2rem"></Box>
          <Box
            w="3rem"
            h="3rem"
            bgImage={"/images/next.svg"}
            bgSize={"cover"}
            bgPos="center"
            bgRepeat={"no-repeat"}
            onClick={() => {
              handleRight();
            }}
          ></Box>
        </Center>
        <Box w="6%" h="1px" bgColor={"#ffffff90"}></Box>
        <Box w="5%"></Box>
      </Box>
      <Box display={"flex"} ml="43%" mt="80vh" pos="absolute">
        {s3.map((item, key) => (
          <Center
            w="3.5rem"
            h="3.5rem"
            rounded="50%"
            bgColor={"#fff"}
            ml="-.8rem"
            style={{
              opacity:
                key === active ? (key === 0 ? 0 : 1) : key === 0 ? 0 : 0.5,
              zIndex: key === active ? 2 : 1,
              width: key === 0 ? 0 : "3.5rem",
            }}
            key = {key}
          >
            <Box
              w="3rem"
              h="3rem"
              rounded={"50%"}
              bgImage={logos[key].src}
              bgSize={"cover"}
              bgPos="center"
              bgRepeat={"no-repeat"}
              onClick={() => {
                changeSection(key);
                changeBg(key);
              }}
            ></Box>
          </Center>
        ))}
      </Box>

      <Box w="100%" h="100vh" overflow={"hidden"}>
        {s3.map((item, key) => (
          <Tilt className="vanilla" options={options} key = {key}>
            <Box
              w="100%"
              bgImage={logos[key].src}
              bgSize={"cover"}
              bgPos="center"
              bgRepeat={"no-repeat"}
              className="section-5-imgs"
              style={{
                height: key === 0 ? "0vh" : "100vh",
              }}
            ></Box>
          </Tilt>
        ))}
      </Box>
    </>
  );
}
