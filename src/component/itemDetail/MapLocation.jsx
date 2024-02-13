import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapLocation = () => {
  const position = [28.7041, 77.1025];

  return (
    <Box zIndex={0} w="100%" height={["20rem","20rem","30rem","30rem","30rem"]} mb={"7rem"}>
      <Text fontWeight="semibold" fontSize={"2xl"} mb={"10px"}>Where you'll be</Text>
      <Text fontWeight="normal" fontSize={"lg"} mb={"10px"}>New Delhi , india</Text>
      <MapContainer center={position} zoom={10} style={{ width: '100%', height: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} >
          <Popup >
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};

export default MapLocation;
