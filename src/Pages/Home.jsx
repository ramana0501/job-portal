import { Box, Image, Text, Flex } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  const imgurl = "https://jobsgaar.com/blog/wp-content/uploads/2021/07/bigstock-170353778.jpg";
  const bgImg = 'https://images.pexels.com/photos/5673502/pexels-photo-5673502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  return (
    <Box w={"100%"} m="auto" h={{ md: '100vh', sm: '89vh', base: "90vh" }} py='4' bgImage={bgImg} backgroundRepeat={'no-repeat'} bgSize={'cover'}>
      <Flex bg="navy" w={"70%"} m="auto" justify={'center'} my='4'>
        <Text as='b' fontSize={{ md: '28px', sm: '16px' }} textAlign={"center"} color="white">
          Welcome To Job Search App
        </Text>
      </Flex>

      <Box width={"70%"} m="auto">
        <Image boxSize="70%" objectFit={"contain"} margin="auto" src={imgurl} alt="Dan Abramov" />
      </Box>

      <Flex bg="silver" w={"70%"} m="auto" my='4' justify={'center'}>
        <Text as='b' fontSize={{ md: '28px', sm: '16px' }} textAlign={"center"} color="black">
          Find Your Favourite Job
        </Text>
      </Flex>
    </Box>
  );
};

export default Home;
