import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    List,
    ListItem,
    Grid,
} from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import BookPlace from './BookPlace'
import MapLocation from './MapLocation'
import Review from './Review'

export default function ItemDetail() {

    
    return (
        <>
            <Container maxW={'7xl'}>
                <Heading
                    lineHeight={1.1}
                    fontWeight={500}
                    marginTop={"2.5rem"}
                    marginBottom={"-1.5rem"}
                    py={{ base: 10, md: 10 }}
                    fontSize={{ base: '2xl', sm: '4xl', lg: '4xl' }}>
                    Automatic Watch
                </Heading>
                <SimpleGrid
                    columns={{ base: 1, }}
                >
                    <Flex>
                        <Swiper
                          spaceBetween={30}
                          pagination={{
                            clickable: true,
                          }}
                          modules={[Pagination]}
                          className="mySwiper"
                        >

                        <SwiperSlide>
                                <Image
                                    rounded={'md'}
                                    alt={'product image'}
                                    src={
                                        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8fDA%3D"
                                    }
                                    fit={'cover'}
                                    align={'center'}
                                    w={'100%'}
                                    h={{ base: '100%', sm: '400px', lg: '500px' }}
                                />
                        </SwiperSlide>
                        <SwiperSlide>
                                <Image
                                    rounded={'md'}
                                    alt={'product image'}
                                    src={
                                        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8fDA%3D"
                                    }
                                    fit={'cover'}
                                    align={'center'}
                                    w={'100%'}
                                    h={{ base: '100%', sm: '400px', lg: '500px' }}
                                />
                        </SwiperSlide>

                        </Swiper>
                    </Flex>

                    <Flex flexDirection={["column", "column", "row", "row", "row"]}>
                        <Stack flex={2}>
                            <Box as={'header'}>
                                <Text
                                    color={useColorModeValue('gray.900', 'gray.400')}
                                    fontWeight={300}
                                    fontSize={'xl'}>
                                    ₹ 350.00 USD
                                </Text>
                            </Box>

                            <Stack
                                direction={'column'}
                                divider={
                                    <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
                                }>
                                <VStack >
                                    <Text fontSize={'lg'}>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet
                                        at delectus doloribus dolorum expedita hic, ipsum maxime
                                    </Text>
                                </VStack>
                                <Box>
                                    <Text
                                        fontSize={{ base: '16px', lg: '18px' }}
                                        color={useColorModeValue('red.500', 'red.300')}
                                        fontWeight={'500'}
                                        textTransform={'uppercase'}
                                        mb={'4'}>
                                        Timing
                                    </Text>

                                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                                        <List>
                                            <ListItem>Check Out : </ListItem>
                                            <ListItem>Check In : </ListItem>{' '}
                                            <ListItem>Maximum People :</ListItem>
                                        </List>

                                    </SimpleGrid>
                                </Box>
                                <Box>
                                    <Text
                                        fontSize={{ base: '16px', lg: '18px' }}
                                        color={useColorModeValue('red.500', 'red.300')}
                                        fontWeight={'500'}
                                        textTransform={'uppercase'}
                                        mb={'4'}>
                                        What this place offers
                                    </Text>

                                    <List>
                                        <ListItem>
                                            <Text as={'span'} fontWeight={'bold'}>
                                                Between lugs:
                                            </Text>{' '}
                                            20 mm
                                        </ListItem>
                                        <ListItem>
                                            <Text as={'span'} fontWeight={'bold'}>
                                                Bracelet:
                                            </Text>{' '}
                                            leather strap
                                        </ListItem>
                                        <ListItem>
                                            <Text as={'span'} fontWeight={'bold'}>
                                                Case:
                                            </Text>{' '}
                                            Steel
                                        </ListItem>

                                    </List>
                                </Box>
                            </Stack>
                        </Stack>
                        <Box flex={1}>
                            <BookPlace />
                        </Box>
                    </Flex>
                </SimpleGrid>
                <MapLocation />

             <Text fontWeight={"semibold"} fontSize={"3xl"} mb="10px">Reviews</Text>
             <Flex overflowX={"auto"} gap={4}>
                
                <Review />
                <Review />
                <Review />
                <Review />
  =
             </Flex>
            </Container>

        </>
    )
}