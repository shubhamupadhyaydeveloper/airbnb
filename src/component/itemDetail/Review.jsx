import { Box, Stack, Heading, Text, Avatar, Flex, Slider, useColorModeValue } from '@chakra-ui/react';
import React from 'react'
import { IoMdStar } from "react-icons/io";

const Review = () => {
  return (
    <Box minW={["280px", "310px", "320px"]} mb="10px" >
      <Box bg={"white"} p={3} rounded={"12px"}>
        <Flex justifyContent="space-between" alignItems="center" >
          <Flex gap={2} mb={"25px"}>
            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
            <Flex flexDirection="column">
              <Text color={useColorModeValue('gray.900', 'gray.900')} fontWeight={"semibold"}>Shubham Upadhyay</Text>
              <Text color={useColorModeValue('gray.900', 'gray.900')} fontWeight={"normal"}>india</Text>
            </Flex>
          </Flex>
          <Flex alignItems="center" gap={1}><Text color={useColorModeValue('gray.900', 'gray.900')} fontSize={'lg'}>4.5</Text> <IoMdStar fill={useColorModeValue('gray.900', 'gray.900')} /></Flex>
        </Flex>
        <Text color={useColorModeValue('gray.900', 'gray.900')}>
          Lorem ipsum dolor sit amet consectetur adipisicing elitsi quaerat, sim
        </Text>
      </Box>

    </Box>
  )
}

export default Review;
