import { Box, Center } from "@chakra-ui/react";
import { useEffect } from "react";
export default function Main4() {
  return (
    <>
      <Center
        pos="absolute"
        w="100%"
        h="100vh"
        fontFamily={"system-ui"}
        fontWeight={400}
        fontSize="1rem"
        bgColor={"#00000065"}
        letterSpacing="2px"
      >
        <Box w="27%">
          <Box h="2rem" display={"flex"}>
            <Box w="90%"> PROJECT MANAGEMENT</Box>
            <Box w="10%" textAlign={"end"}>
              90%
            </Box>
          </Box>
          <Box w="100%" h=".8rem" rounded="1.5rem" bgColor={"#ffffff95"}>
            <Box w="90%" h=".8rem" rounded="1.5rem" bgColor={"#00cccc"}></Box>
          </Box>
          <Box h="4rem" pt="2rem" display={"flex"}>
            <Box w="90%"> WEB CONSULTING</Box>
            <Box w="10%" textAlign={"end"}>
              75%
            </Box>
          </Box>
          <Box w="100%" h=".8rem" rounded="1.5rem" bgColor={"#ffffff95"}>
            <Box w="75%" h=".8rem" rounded="1.5rem" bgColor={"#00cccc"}></Box>
          </Box>
          <Box h="4rem" pt="2rem" display={"flex"}>
            <Box w="90%"> WEB CONSULTING</Box>
            <Box w="10%" textAlign={"end"}>
              62%
            </Box>
          </Box>
          <Box w="100%" h=".8rem" rounded="1.5rem" bgColor={"#ffffff95"}>
            <Box w="62%" h=".8rem" rounded="1.5rem" bgColor={"#00cccc"}></Box>
          </Box>
        </Box>
        <Box w="2rem"></Box>
        <Box w="27%">
          <Box h="2rem" display={"flex"}>
            <Box w="90%"> PROJECT MANAGEMENT</Box>
            <Box w="10%" textAlign={"end"}>
              90%
            </Box>
          </Box>
          <Box w="100%" h=".8rem" rounded="1.5rem" bgColor={"#ffffff95"}>
            <Box w="90%" h=".8rem" rounded="1.5rem" bgColor={"#00cccc"}></Box>
          </Box>
          <Box h="4rem" pt="2rem" display={"flex"}>
            <Box w="90%"> WEB CONSULTING</Box>
            <Box w="10%" textAlign={"end"}>
              75%
            </Box>
          </Box>
          <Box w="100%" h=".8rem" rounded="1.5rem" bgColor={"#ffffff95"}>
            <Box w="75%" h=".8rem" rounded="1.5rem" bgColor={"#00cccc"}></Box>
          </Box>
          <Box h="4rem" pt="2rem" display={"flex"}>
            <Box w="90%"> WEB CONSULTING</Box>
            <Box w="10%" textAlign={"end"}>
              62%
            </Box>
          </Box>
          <Box w="100%" h=".8rem" rounded="1.5rem" bgColor={"#ffffff95"}>
            <Box w="62%" h=".8rem" rounded="1.5rem" bgColor={"#00cccc"}></Box>
          </Box>
        </Box>
      </Center>

      <Box
        w="100%"
        h="100vh"
        bgImage="/images/section-4-1.jpeg"
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
      ></Box>
    </>
  );
}
