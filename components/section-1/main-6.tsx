import { border, Box, Center, Input } from "@chakra-ui/react";
import { useEffect } from "react";
export default function Main6() {
  return (
    <>
      <Center
        pos="absolute"
        w="100%"
        h="100vh"
        fontFamily={"system-ui"}
        fontWeight={200}
        fontSize="5vh"
        bgColor={"#00000065"}
      >
        <Box w="50%" h="70vh" mt="10vh">
          <Center fontSize="1.5rem" color={" #24c4f4"}>
            LEAVE A MESSAGE
          </Center>
          <Box h="2rem"></Box>
          <Center fontSize="2rem" color={" #24c4f4"}>
            NEED AN ASSISTANCE?
          </Center>
          <Box h="3rem"></Box>
          <Center fontSize="1rem">
            <Box
              w="50%"
              h="3rem"
              mr={"1rem"}
              border="1px solid #ffffff35"
              rounded="1.5rem"
              display={"flex"}
              alignItems="center"
            >
              <Box w="1.5rem"></Box>
              NAME
            </Box>
            <Box
              w="50%"
              h="3rem"
              ml={"1rem"}
              border="1px solid #ffffff35"
              rounded="1.5rem"
              display={"flex"}
              alignItems="center"
            >
              {" "}
              <Box w="1.5rem"></Box>
              EMAIL
            </Box>
          </Center>
          <Center fontSize="1rem" mt="2rem">
            <Box
              w="50%"
              h="3rem"
              mr={"1rem"}
              border="1px solid #ffffff35"
              rounded="1.5rem"
              display={"flex"}
              alignItems="center"
            >
              {" "}
              <Box w="1.5rem"></Box>
              CONTACT
            </Box>
            <Box
              w="50%"
              h="3rem"
              ml={"1rem"}
              border="1px solid #ffffff35"
              rounded="1.5rem"
              display={"flex"}
              alignItems="center"
            >
              {" "}
              <Box w="1.5rem"></Box>
              SUBJECT
            </Box>
          </Center>
          <Box
            w="100%"
            h="10rem"
            mt={"2rem"}
            border="1px solid #ffffff35"
            rounded="1.5rem"
            display={"flex"}
            fontSize="1rem"
            pt="1rem"
          >
            <Box w="1.5rem"></Box>
            MESSAGE
          </Box>
          <Center w="100%">
            <Center
              w="10rem"
              h="3rem"
              fontSize="1rem"
              fontWeight={300}
              rounded={"2rem"}
              bgColor=" #24c4f4"
              mt="3rem"
              transition={".3s"}
              _hover={{
                color: "#24c4f4",
                border: "1px solid",
                bgColor: "transparent",
              }}
            >
              SUBMIT REQUEST
            </Center>
          </Center>
        </Box>
      </Center>

      <Box
        w="100%"
        h="100vh"
        bgImage="/images/section-6-1.jpeg"
        bgSize={"cover"}
        bgPos="center"
        bgRepeat={"no-repeat"}
      ></Box>
    </>
  );
}
