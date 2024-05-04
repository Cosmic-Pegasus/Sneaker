import React from 'react'
import './Style.css';
import SneakersCarouselImg1 from './Images/SneakersCarouselImg1.png'
import SneakersCarouselImg2 from './Images/SneakersCarouselImg2.jpg'
import SneakersCarouselImg3 from './Images/SneakersCarouselImg3.jpg'
export default function Carousel() {
    return (
        <div
            id="carouselDarkVariant"
            className="carousel slide carousel-fade carousel-dark relative"
            data-bs-ride="carousel"
        >

        

            <div className="carousel-inner relative w-full overflow-hidden">

                <div className="carousel-item active relative float-left w-full">
                    <img
                        src={SneakersCarouselImg1}
                        className="block w-full" id='img-size'
                        alt=""
                    />  
                </div>


                <div className="carousel-item relative float-left w-full">
                    <img
                        src={SneakersCarouselImg2}
                        className="block w-full" id='img-size'
                        alt=""
                    /> 
                </div>


                <div className="carousel-item relative float-left w-full">
                    <img
                        src={SneakersCarouselImg3}
                        className="block w-full" id='img-size'
                        alt=""
                    />
                </div>
            </div>



            <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselDarkVariant"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselDarkVariant"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
