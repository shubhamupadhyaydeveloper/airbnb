
import {
    Box,
    Center,
    Text,
    Stack,
    List,
    ListItem,
    Button,
    Flex,
    useColorModeValue,
    Input,
} from '@chakra-ui/react'

export default function BookPlace() {
    return (
        <Center py={6}>
            <Box
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'lg'}
                rounded={'md'}
                overflow={'hidden'}>
                <Stack
                    textAlign={'center'}
                    p={6}
                    color={useColorModeValue('gray.800', 'white')}
                    align={'center'}>
                    <Stack direction={'row'} align={'center'} justify={'center'}>
                        <Text fontSize={'2xl'}> ₹ </Text>
                        <Text fontSize={'4xl'} fontWeight={800}>
                            79
                        </Text>
                        <Text color={'gray.500'}>/month</Text>
                    </Stack>
                </Stack>

                <Box bg={useColorModeValue('gray.50', 'gray.900')} px={4} py={10}>
                    <List spacing={3}>
                        <ListItem>
                            <Flex alignItems={"center"} justifyContent={"center"}>
                           <Text flex={1} >CheckIn</Text> <Input type='date' flex={1.7} />
                            </Flex>
                        </ListItem>
                        <ListItem>
                        <Flex alignItems={"center"} justifyContent={"center"}>
                           <Text flex={1} >CheckOut</Text> <Input type='date' flex={1.7} />
                            </Flex>
                        </ListItem>
                      <ListItem>
                      <Flex alignItems={"center"} justifyContent={"center"}>
                           <Text flex={1} >Guest</Text> <Input type='number' flex={1.7} placeholder='Total Member'/>
                            </Flex>
                        </ListItem>
                      
                      
                    </List>

                    <Button
                        mt={10}
                        w={'full'}
                        bg={'red.500'}
                        color={'white'}
                        rounded={'xl'}
                        _hover={{
                            bg: 'red.400',
                        }}
                        _focus={{
                            bg: 'red.400',
                        }}>
                        Reserve
                    </Button>
                </Box>
            </Box>
        </Center>
    )
}