'use client'

import { ProductVerticalList, SimpleProductCard } from "@/components/common";
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay } from 'swiper/modules';
import { RecentlyAddedMock } from "@/mock/RecentlyAdded";
import { TopRatedMock } from "@/mock/TopRated";
import { TopSellingMock } from "@/mock/TopSelling";
import { TrendingProductsMock } from "@/mock/TrendingProducts";

interface Props {
    
}

export function BottomSlider({}: Props) {
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
                    spaceBetween: 18
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 18
                  },
                  1280: {
                    slidesPerView: 4,
                    spaceBetween: 22
                  }
              }
          }
          
          
        >

            <SwiperSlide>
                <ProductVerticalList title='Top Selling' data={TopSellingMock} />
            </SwiperSlide>


            <SwiperSlide>
                <ProductVerticalList title='Trending Product' data={TrendingProductsMock} />
            </SwiperSlide>


            <SwiperSlide>
                <ProductVerticalList title='Recently Added' data={RecentlyAddedMock} />
            </SwiperSlide>


            <SwiperSlide>
                <ProductVerticalList title='Top Rated' data={TopRatedMock} />
            </SwiperSlide>
            
        </Swiper>
      );
}

