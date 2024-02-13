import { Avatar, Box, Button, Divider, Flex, Text } from '@chakra-ui/react';
import React from 'react'

const Profile = () => {
    return (
        <Box mt={"7rem"}>
            <Flex alignItems={"center"} gap={3} >
                <Avatar size={"xl"} src='https://bit.ly/dan-abramov' />
                <Flex flexDirection={"column"}>
                <Text fontWeight={"bold"} fontSize={"2xl"}>Shubham Upadhyay</Text>
                <Text fontWeight={"semibold"} fontSize={"xl"}>Status : Loged In</Text>
                </Flex>
            </Flex>
            <Box mt={"15px"} bg={"black"} h={"0.7px"}></Box>
            <Box mt={"3rem"} bg={"gray.200"}  h={"100px"} w={["100%","100%","450px"]} p={4}>
                 <Flex gap={5} alignItems={"center"} justifyContent={"center"}>
                    <Text fontSize={"xl"} fontWeight={"semibold"} >
                        Accomodation
                    </Text>
                    <Text fontWeight={"normal"}>
                        435
                    </Text>
                 </Flex>
                 <Flex gap={5} alignItems={"center"} justifyContent={"center"}>
                    <Text fontSize={"xl"} fontWeight={"semibold"} >
                        Orders
                    </Text>
                    <Text fontWeight={"normal"}>
                        433
                    </Text>
                 </Flex>
            </Box>
            <Button bg={"red.300"} mt={"15px"}>
                Logout
            </Button>
            
        </Box>
    )
}

export default Profile;
