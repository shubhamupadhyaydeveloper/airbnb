import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react'

const Footer = () => {
    return (
        <Flex bg="rgba(255, 255, 255, 0.2)"
            backdropFilter="blur(8px)" p={"4"} flexDirection="column" alignItems={"center"} justifyContent={"center"} gap={"10px"} mb={"20px"} mt={"30px"}>
            <Image src='/logo.png' w="130px" />
            <Text>© 2024 Airbnb all right reserved</Text>
        </Flex>
    )

}

export default Footer;
