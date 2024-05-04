import React from 'react'
import './Style.css'
import bgse from './Images/Nice/bgse.jpg'
import SneakersCarouselImg2 from './Images/Nice/drop3.jpg'
import SneakersCarouselImg3 from './Images/Nice/drop2.jpg'
import { Link } from 'react-router-dom'

export default function Trending() {
    return (

        <>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class=" w-full mx-auto">
                        <div class="flex flex-wrap w-full py-32 px-10 relative mb-4">
                            <img alt="gallery" class="w-full object-cover h-full object-center block absolute inset-0 trend-img" src={bgse} />
                            <div class="trending-box z-10 ">
                                <h2 class="trending-head">Sports Categories</h2>
                                <p class="trending-p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita ullam dolorum facilis fuga maiores aspernatur totam voluptas quidem quibusdam dignissimos nemo, consequuntur eum? Iste laudantium quasi quia ut similique, ducimus quisquam.</p>
                                <Link to='/order' class="trending-btn">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-2">
                            <div class="px-2 w-1/2">
                                <Link to='/order' > <div class="drop flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                                    <img alt="gallery" class="w-full object-cover h-full object-center block absolute inset-0 trend-img" src={SneakersCarouselImg2} />

                                </div></Link>
                            </div>
                            <div class="px-2 w-1/2">
                                <Link to='/order' >  <div class="drop flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                                    <img alt="gallery" class="w-full object-cover h-full object-center block absolute inset-0 trend-img" src={SneakersCarouselImg3} />

                                </div></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </>

    )
}
