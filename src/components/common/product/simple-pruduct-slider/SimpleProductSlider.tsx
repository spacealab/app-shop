'use client'

import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SimpleProductCard } from "@/components/common";

interface Props {
  sliderData : Array<any>;
  nextEl?: string;
  prevEl?: string;
};

export function SimpleProductSlider({sliderData, nextEl, prevEl}: Props) {

    return (
        <Swiper
          spaceBetween={16}
          slidesPerView={2}
          autoplay={true}
          modules={[Autoplay, Navigation]}
          navigation={{
            nextEl: nextEl,
            prevEl: prevEl  // Corrected the casing here
          }}
          breakpoints= {
            {
                // Breakpoint at 640px
                768: {
                  slidesPerView: 3,
                  spaceBetween: 18
                },
                // Breakpoint at 1024px
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 22
                },
                1280: {
                    slidesPerView: 5,
                    spaceBetween: 24
                  }
              }
          }
          
          
        >


            {
                sliderData.map((sliderData, index) => {
                    return (
                        <SwiperSlide key={index} >
                          <SimpleProductCard data = {sliderData}/>
                        </SwiperSlide>
                    )
                })
            }
            
        </Swiper>
      );
}

