import React from 'react'
import Brand from './components/Brand';
import Carousel from './components/Carousel';
import Category from './components/Category';
import Footer from './components/Footer';
import HotDrops from './components/HotDrops';
import NewArrival from './components/NewArrival';
import Quality from './components/Quality';
import Navbar from './components/Navbar';
import SwiperCarousel from './components/SwiperCarousel';
import ShoeSlider from './components/ShoeSlider';
import img from './components/Images/Hotdrops1.png'
import Trending from './components/Trending';


export default function Home() {
  return (
    <>
    <Navbar position="sticky" />
    <SwiperCarousel />
    <ShoeSlider link='/order' shoeName='Adidas : D Rose Ultimate Edition' img={img} price='500$'/>
    <Category />
    <NewArrival />
    <Trending/>

    <Brand />
    <Quality />
    <Footer />
    </>
  )
}
