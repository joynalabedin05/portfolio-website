
import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

import one from '../../../public/one.jpg'
import two from '../../../public/two.jpg'
import three from '../../../public/three.jpg'
import four from '../../../public/four.jpg'
import five from '../../../public/five.jpg'
import six from '../../../public/six.jpg'
import seven from '../../../public/seven.jpg'
import eight from '../../../public/eight.jpg'

const Projects = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className='my-20  p-7 bg-slate-700 mt-8 rounded-md'>
            <h3 className='text-4xl bg-sky-800 p-5 mb-8 rounded text text-center font-bold'> Feature  <span className='text-orange-400'>Projects</span></h3>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide><img className='md:w-[1200px] md:h-[500px]' src={one} alt="" /></SwiperSlide>
                <SwiperSlide><img className='md:w-[1200px] md:h-[500px]' src={two} alt="" /></SwiperSlide>
                <SwiperSlide><img className='md:w-[1200px] md:h-[500px]' src={three} alt="" /></SwiperSlide>
                <SwiperSlide><img className='md:w-[1200px] md:h-[500px]' src={four} alt="" /></SwiperSlide>
                <SwiperSlide><img className='md:w-[1200px] md:h-[500px]' src={five} alt="" /></SwiperSlide>
                <SwiperSlide><img className='md:w-[1200px] md:h-[500px]' src={six} alt="" /></SwiperSlide>
                <SwiperSlide><img className='md:w-[1200px] md:h-[500px]' src={seven} alt="" /></SwiperSlide>
                <SwiperSlide><img className='md:w-[1200px] md:h-[500px]' src={eight} alt="" /></SwiperSlide>

                <div className="autoplay-progress w-8 mt-2" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
};

export default Projects;