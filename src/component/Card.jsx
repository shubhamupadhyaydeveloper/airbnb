import { useState } from 'react'
import { IoMdStar } from "react-icons/io";
import { BsHeartFill } from "react-icons/bs";
import {
    Box,
    Text,
    Img,
    Flex,
    Center,
    useColorModeValue,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

export default function Card({img}) {
    const [liked, setLiked] = useState(false)
    const handleclick = (e) => {
        e.preventDefault();
        setLiked(!liked)
    }
    
    return (
        <Link to="/item/123">
        <Center >
            <Box
                w={["320px"]}
                rounded={'sm'}
                overflow={'hidden'}
                position={"relative"}
            >
                <Box h={'300px'}>
                    <Flex
                        
                        alignItems="center"
                        justifyContent={'space-between'}
                        roundedBottom={'sm'}
                        position={"absolute"}
                        right={"10px"}
                        top={"10px"}
                        cursor="pointer"
                        onClick={handleclick}>
                        {liked ? (
                            <BsHeartFill fill="red" fontSize={'24px'}  />
                        ) : (
                            <BsHeartFill fill='#828282' fontSize={'24px'}/>
                        )}
                    </Flex>

                    <Img
                        src={
                           img
                        }
                        rounded="13px"
                        objectFit="cover"
                        h="full"
                        w="full"
                        alt={'Blog Image'}
                    />
                </Box>

                <Flex justifyContent="space-between" p={2}>
                    <Flex flexDirection="column">

                        <Text color={useColorModeValue('black', 'white')} noOfLines={2} fontWeight="semibold">
                            Rajesthan , india
                        </Text>
                        <Text>33 kilometers away</Text>
                        <Text>21-24 feb</Text>
                        <Flex gap="1.5">
                            <Text color={useColorModeValue('black', 'white ')} fontWeight="semibold">
                                ₹ 12,000
                            </Text>
                            <Text fontWeight="normal">night</Text>
                        </Flex>
                    </Flex>
                    <Flex gap="2">
                        <IoMdStar fontSize="20px" />
                        <Text>4.5</Text>
                    </Flex>
                </Flex>

            </Box>
        </Center>
        </Link>
    )
}