import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './component/global/Header';
import { Container } from "@chakra-ui/react";
import Signup from './component/Signup';
import Login from './component/Login';
import Home from './component/Home';
import ItemDetail from './component/itemDetail/ItemDetail';
import Footer from './component/global/Footer';
import Profile from './component/Profile';
import Order from './component/Order';
import Accomodation from './component/Accomodation';

const App = () => {
  return (
    <>
    <Container maxW="1050px" mx={"auto"} overflow="hidden">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path='/profile/:id' element={<Profile/>} />
        <Route path='/order/:id' element={<Order/>} />
        <Route path='/accomadation/:id' element={<Accomodation/>} />
        <Route path='/item/:id' element={<ItemDetail/>} />
      </Routes>
    </Container>
    <Footer/>
    </>
  )
}

export default App;
