import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Slider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-[500px]"
      >
        <SwiperSlide>
          <div className='w-full h-full flex flex-col-reverse md:flex-row justify-center items-center'>
            <div className='flex-1 flex justify-center items-center'>
              <div className='w-[80%] space-y-4'>
                <h2 className='text-2xl md:text-3xl text-center'>Share Your Culinary Creations</h2>
                <p className='text-xs md:text-sm text-gray-400'>Join our community of food enthusiasts and showcase your homemade dishes. Whether it's a family recipe or a new experiment, share your creations and inspire others with your culinary skills.</p>
              </div>
            </div>
            <div className='flex-1'>
              <img src="slide1.svg" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full flex flex-col-reverse md:flex-row justify-center items-center'>
            <div className='flex-1 flex justify-center items-center'>
              <div className='w-[80%] space-y-4'>
                <h2 className='text-2xl md:text-3xl text-center'>Discover New Flavors</h2>
                <p className='text-xs md:text-sm text-gray-400'>Explore a world of flavors and try dishes from around the globe. Connect with other food lovers, exchange recipes, and expand your culinary horizons with new and exciting tastes.</p>
              </div>
            </div>
            <div className='flex-1'>
              <img src="slide2.svg" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full flex flex-col-reverse md:flex-row justify-center items-center'>
            <div className='flex-1 flex justify-center items-center'>
              <div className='w-[80%] space-y-4'>
                <h2 className='text-2xl md:text-3xl text-center'>Reduce Food Waste</h2>
                <p className='text-xs md:text-sm text-gray-400'>Help us combat food waste by sharing your surplus meals with those in need. Our platform makes it easy to donate extra food and make a positive impact on your community while enjoying the joy of sharing.</p>
              </div>
            </div>
            <div className='flex-1'>
              <img src="slide3.svg" alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;