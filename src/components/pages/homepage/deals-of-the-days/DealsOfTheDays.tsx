'use client'

import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay } from 'swiper/modules';
import { EntityType } from '@/types';
import { ProductDealsCard } from '@/components/common';
import { ProductType } from '@/types/api/Product';

interface Props {
    sliderData: Array<EntityType<ProductType>>;
}

export function DealsOfTheDays({sliderData}: Props) {
    
    return (
        <Swiper 
          spaceBetween={16}
          slidesPerView={1}
          autoplay={true}
          modules={[Autoplay,]}

          breakpoints= {
            {
                // Breakpoint at 640px
                768: {
                    slidesPerView: 2,
                    spaceBetween: 18,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 22,
                  },
                  1280: {
                    slidesPerView: 4,
                    spaceBetween: 22,
                  }
              }
          }
          
          
        >


            {
                sliderData.map((sliderData, index) => {
                    return (
                        <SwiperSlide key={index} >
                            <ProductDealsCard data={sliderData}/>
                        </SwiperSlide>
                    )
                })
            }
            
        </Swiper>
      );
}