import React from "react";
import {
  Flex,
  Box,
  Image,
  FormControl,
  Input,
  Button,
  ChakraProvider,
  Divider,
  Text,
  HStack,
  Icon,
} from "@chakra-ui/react";
import "../../styles/LoginPage.css";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [login, setLogin] = React.useState(false);
  const [userID, setUserID] = React.useState("");
  const [password, setPassword] = React.useState("");

  //toggle login/signup
  const handleLogin = () => {
    setLogin(!login);
  };

  return (
    <ChakraProvider>
      <Flex
        direction={{ base: "column", md: "row" }}
        height="100vh"
        fontFamily={"Poppins"}
      >
        {/* Left side: Login form */}
        <Box
          p={8}
          flex={{ base: 1, md: 1 }}
          display={"flex"}
          bg="#1e1e1e"
          justifyContent={"center"}
          alignItems={"center"}
        >
          {/*logo*/}
          <Image
            src="/images/logo.png"
            alt="Logo"
            style={{
              width: "100px",
              height: "100px",
              position: "absolute",
              top: "0px",
              left: "0px",
            }}
          />

          <Box style={styles.formStyle} pt={{ base: "100px", md: "0" }}>
            <h2 style={styles.title}>Login</h2>
            <p style={styles.subTitle}>
              Welcome Back! Please enter your credentials to login.
            </p>
            <FormControl id="user-id" my={4}>
              <Input
                type="userID"
                placeholder="User ID"
                color={"white"}
                style={styles.input}
                focusBorderColor="#1e1e1e"
              />
            </FormControl>

            <FormControl id="password" my={4}>
              <Input
                type="password"
                placeholder="Password"
                color={"white"}
                style={styles.input}
                focusBorderColor="#1e1e1e"
              />
            </FormControl>

            <Button
              colorScheme="blue"
              width="full"
              height={"50px"}
              mt={4}
              _hover={{ bg: "#00AF9E" }}
              backgroundColor="#80D7CE"
              color={"#01776B"}
              shadow={`0px 0px 5px 0px #80D7CE`}
              borderRadius={10}
              marginBottom={"10px"}
              onClick={() => navigate("/studentDash")}
            >
              Log in
            </Button>
            <Divider borderColor="#5a5c5b" marginTop={"10px"} />
            <Button
              colorScheme="blue"
              width="full"
              height={"50px"}
              mt={4}
              _hover={{ bg: "#303b35" }}
              backgroundColor="#1e1e1e"
              color={"#01776B"}
              shadow={`0px 0px 5px 0px #80D7CE`}
              border={"1px solid #80D7CE"}
              borderRadius={10}
            >
              Register
            </Button>
            <Box alignSelf={"flex-end"}>
              <p
                style={{
                  color: "white",
                  fontSize: "12px",
                  marginTop: "50px",
                  textAlign: "center",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                forgot password?
              </p>
            </Box>
          </Box>
        </Box>

        {/* Right side: Hero image */}
        <Box flex={{ base: "none", md: 1 }} position="relative">
          <Image
            src="/images/uni1.jpg"
            alt="Hero Image"
            objectFit="cover"
            width="100%"
            height="100%"
            loading="lazy"
          />
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            color="white"
            p={4}
          >
            <Text fontSize="2xl" fontWeight="bold" textAlign={"left"}>
              Lorem Ipsum
            </Text>
            <Text fontSize="xl" textAlign={"left"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
            <HStack spacing={4} marginTop={4}>
              {/*social media icons*/}
              <Image
                onClick={() => window.open("https://www.facebook.com/")}
                src="/svg/fb.svg"
                boxSize={6}
                cursor={"pointer"}
              />
              <Image
                onClick={() => window.open("https://www.instagram.com/")}
                src="/svg/ig.svg"
                boxSize={6}
                cursor={"pointer"}
              />
              <Image
                onClick={() => window.open("https://www.twitter.com/")}
                src="/svg/x.svg"
                boxSize={6}
                cursor={"pointer"}
              />
            </HStack>
          </Box>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

const styles = {
  formStyle: {
    margin: "0 auto",
    alignSelf: "center",
    border: "0px solid #eaeaea",
    width: "80%",
  },
  input: {
    border: "0px",
    borderBottom: "1px solid #eaeaea",
    borderRadius: "0px",
    marginBottom: "10px",
  },
  title: {
    color: "white",
    fontSize: "28px",
    textAlign: "left",
    marginBottom: "10px",
  },
  subTitle: {
    color: "white",
    fontSize: "16px",
    textAlign: "left",
    marginBottom: "50px",
  },
};

export default LoginPage;
