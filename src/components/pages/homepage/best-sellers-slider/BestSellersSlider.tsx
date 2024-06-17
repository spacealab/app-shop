'use client'

import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay } from 'swiper/modules';
import { EntityType } from '@/types';
import { ProductType } from '@/types/api/Product';
import { SimpleProductCard } from "@/components/common";

interface Props {
    sliderData: Array<EntityType<ProductType>>
}

export function BestSellersSlider({sliderData}: Props) {
    // API
    return (
        <Swiper
          spaceBetween={16}
          slidesPerView={2}
          autoplay={true}
          modules={[Autoplay,]}

          breakpoints= {
            {
                // Breakpoint at 640px
                768: {
                    slidesPerView: 3,
                    spaceBetween: 18,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 22,
                },
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