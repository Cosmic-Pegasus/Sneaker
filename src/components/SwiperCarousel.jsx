import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SneakersCarouselImg1 from './Images/Nice/Sombra.png'
import jordan from './Images/Nice/Jordan.mp4'
import SneakersCarouselImg2 from './Images/Nice/racks.png'
import SneakersCarouselImg3 from './Images/Nice/mag.png'


import 'swiper/css';
import 'swiper/css/pagination';

import './Swiper.css';


import { Autoplay, Pagination } from 'swiper/modules';

export default function SwiperCarousel() {
    return (
        <>
            <Swiper
                direction={'vertical'}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 20500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                {/* <SwiperSlide> <img
                    src={SneakersCarouselImg1}
                    className="block w-full" id='img-size'
                    alt=""
                />  </SwiperSlide> */}
                <SwiperSlide> <video src={jordan} autoPlay muted loop className=' w-full'></video>  </SwiperSlide>
                <SwiperSlide> <img
                    src={SneakersCarouselImg2}
                    className="block w-full" id='img-size'
                    alt=""
                />  </SwiperSlide>
                <SwiperSlide> <img
                    src={SneakersCarouselImg3}
                    className="block w-full" id='img-size'
                    alt=""
                />  </SwiperSlide>


            </Swiper>
        </>
    );
}
