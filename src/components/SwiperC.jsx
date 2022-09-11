// Import Swiper React components
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import Swiper styles
import 'swiper/css';
// Import own styles
import './SwiperC.css';

export const SwiperC = () => {

    const slides = [1,2,3,4,5,6,7,8,9,10];
    console.log(slides);

  return (
    <Swiper
    modules={[Navigation, Pagination]}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
  >
    {slides.map((slide) => (
        <SwiperSlide key={slide}>
            {({ isNext }) => ( <div className={isNext ? 'active slider-box' : 'slider-box'}>Current slide is {isNext ? 'next' : 'not next'}</div> )}
        </SwiperSlide>
        )
    )}
  </Swiper>
  );
};