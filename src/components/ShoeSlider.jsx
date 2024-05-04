import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Hotdrops1 from './Images/Hotdrops1.png'
import Hotdrops2 from './Images/Hotdrops2.png'
import Hotdrops3 from './Images/Hotdrops3.png'
import Hotdrops4 from './Images/Hotdrops4.png'
import Hotdrops5 from './Images/shoe1.png'
import Hotdrops6 from './Images/shoe2.png'
import Hotdrops7 from './Images/shoe3.png'
import Hotdrops8 from './Images/shoe4.png'



// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function ShoeSlider(props) {
  return (
    <>
    <h1 className="HotDrops-heading my-9">HOT DROPS</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="shoeSliderH"
      >



        <SwiperSlide><div className="hotdropsItem my-6">
          <Link to={props.link}><img src={Hotdrops1} alt="" srcset="" className='hotdropsImg' /></Link>
          <div className="flex justify-center items-center my-5">
            <div className=''>
              <h1 className="shoeName">{props.shoeName}</h1>
              <p className='shoePrice'>{props.price}</p>
            </div>

          </div>
        </div ></SwiperSlide>



        <SwiperSlide><div className="hotdropsItem my-6">
          <Link to={props.link}><img src={Hotdrops2} alt="" srcset="" className='hotdropsImg' /></Link>
          <div className="flex justify-center align-middle items-center my-5">
            <div className=''>
              <h1 className="shoeName">{props.shoeName}</h1>
              <p className='shoePrice'>{props.price}</p>
            </div>

          </div>
        </div ></SwiperSlide>



        <SwiperSlide><div className="hotdropsItem my-6">
          <Link to={props.link}><img src={Hotdrops3} alt="" srcset="" className='hotdropsImg' /></Link>
          <div className="flex justify-center align-middle items-center my-5">
            <div className=''>
              <h1 className="shoeName">{props.shoeName}</h1>
              <p className='shoePrice'>{props.price}</p>
            </div>

          </div>
        </div ></SwiperSlide>



        <SwiperSlide><div className="hotdropsItem my-6">
          <Link to={props.link}><img src={Hotdrops4} alt="" srcset="" className='hotdropsImg' /></Link>
          <div className="flex justify-center align-middle items-center my-5">
            <div className=''>
              <h1 className="shoeName">{props.shoeName}</h1>
              <p className='shoePrice'>{props.price}</p>
            </div>

          </div>
        </div ></SwiperSlide>



        <SwiperSlide><div className="hotdropsItem my-6">
          <Link to={props.link}><img src={Hotdrops5} alt="" srcset="" className='hotdropsImg' /></Link>
          <div className="flex justify-center align-middle items-center my-5">
            <div className=''>
              <h1 className="shoeName">{props.shoeName}</h1>
              <p className='shoePrice'>{props.price}</p>
            </div>

          </div>
        </div ></SwiperSlide>



        <SwiperSlide><div className="hotdropsItem my-6">
          <Link to={props.link}><img src={Hotdrops6} alt="" srcset="" className='hotdropsImg' /></Link>
          <div className="flex justify-center align-middle items-center my-5">
            <div className=''>
              <h1 className="shoeName">{props.shoeName}</h1>
              <p className='shoePrice'>{props.price}</p>
            </div>

          </div>
        </div ></SwiperSlide>



        <SwiperSlide><div className="hotdropsItem my-6">
          <Link to={props.link}><img src={Hotdrops7} alt="" srcset="" className='hotdropsImg' /></Link>
          <div className="flex justify-center align-middle items-center my-5">
            <div className=''>
              <h1 className="shoeName">{props.shoeName}</h1>
              <p className='shoePrice'>{props.price}</p>
            </div>

          </div>
        </div ></SwiperSlide>


        <SwiperSlide><div className="hotdropsItem my-6">
          <Link to={props.link}><img src={Hotdrops8} alt="" srcset="" className='hotdropsImg' /></Link>
          <div className="flex justify-center align-middle items-center my-5">
            <div className=''>
              <h1 className="shoeName">{props.shoeName}</h1>
              <p className='shoePrice'>{props.price}</p>
            </div>

          </div>
        </div ></SwiperSlide>


        <SwiperSlide><div className="hotdropsItem my-6">
          <Link to={props.link}><img src={props.img} alt="" srcset="" className='hotdropsImg' /></Link>
          <div className="flex justify-center align-middle items-center my-5">
            <div className=''>
              <h1 className="shoeName">{props.shoeName}</h1>
              <p className='shoePrice'>{props.price}</p>
            </div>

          </div>
        </div ></SwiperSlide>


      </Swiper>
    </>
  );
}
