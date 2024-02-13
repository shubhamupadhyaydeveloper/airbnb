import { Box, Button, Divider, Flex, Image, Input, InputGroup, InputRightElement, Menu, MenuButton, MenuItem, MenuList, useColorMode } from '@chakra-ui/react';
import { PiSunDimFill } from "react-icons/pi";
import { MdModeNight } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { Link } from 'react-router-dom';

const Header = () => {
    const { toggleColorMode, colorMode } = useColorMode()
    return (
        <Box position={"fixed"} left={"0px"} zIndex={20} bg="rgba(255, 255, 255, 0.2)"
            backdropFilter="blur(8px)" w={"100vw"} >
            <Flex zIndex={2} margin={"auto"} justifyContent="space-between" alignItems="center" p={"2"} w={["", "", "768px", "1000px", ""]}>
                <Box className='hidden md:flex'>
                    <Link to="/">
                        <Image src='/logo.png' w={["0px", "0px", "8rem"]} />
                    </Link>
                    <Link to="/">
                        <Image src='/mobilelogo.png' w={"35px"} display={["", "", "none"]} />
                    </Link>
                </Box>
                <Flex alignItems="center" justifyContent="center" mr="5px">
                    <InputGroup >
                        <Input
                            type='text'
                            placeholder='Search for a place, location and destination'
                            border="0.5px solid gray"
                            rounded="full"
                            w={["14rem", "15rem", "30rem", "30rem", "30rem"]}
                        />
                        <InputRightElement color="gray.600" p="3px" cursor="pointer">
                            <Box bg="red" p="1" rounded="full">
                                <IoSearch fontSize="25px" color='white' />
                            </Box>
                        </InputRightElement>
                    </InputGroup>
                </Flex>

                <Flex alignItems={"center"} justifyContent={"center"} gap="2">
                    <Box cursor={"pointer"} onClick={() => toggleColorMode()}>
                        {
                            colorMode === "dark" ? <MdModeNight size="27px" /> : <PiSunDimFill size="27px" />
                        }

                    </Box>

                    <Flex p="2" cursor="pointer" >
                        <Menu zIndex="30">
                            <MenuButton dir="row" >
                                <MdAccountCircle size="31px" />
                            </MenuButton>
                            <MenuList mt="6px">
                                <MenuItem ><Link to={"/signup"}>Signup</Link> </MenuItem>
                                <MenuItem ><Link to={"/login"}>Login</Link></MenuItem>
                                <Divider h={"4px"} color={"black"} />
                                <MenuItem ><Link to={"/profile/23"}>Profile</Link></MenuItem>
                                <MenuItem ><Link to={"/accomadation/23"}>Accommodation</Link></MenuItem>
                                <MenuItem ><Link to={"/order/34"}>Orders</Link></MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Header;
