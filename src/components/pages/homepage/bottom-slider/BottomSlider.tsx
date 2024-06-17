'use client'

import { ProductVerticalList, SimpleProductCard } from "@/components/common";
import { Swiper, SwiperSlide } from 'swiper/react';

import { ApiResponseType } from '@/types';
import { Autoplay } from 'swiper/modules';
import { InView } from "react-intersection-observer";
import { ProductType } from '@/types/api/Product';
import { RecentlyAddedMock } from "@/mock/RecentlyAdded";
import { TopRatedMock } from "@/mock/TopRated";
import { TopSellingMock } from "@/mock/TopSelling";
import { TrendingProductsMock } from "@/mock/TrendingProducts";
import { getAllProductsApiCall } from '@/api/Product';
import { useQuery } from '@tanstack/react-query';

interface Props {
    
}

export function BottomSlider({}: Props) {

  const {data : topRateData, refetch } = useQuery<ApiResponseType<ProductType>>({
    queryKey: [getAllProductsApiCall.name, 'top_rate'],
    queryFn: () => getAllProductsApiCall(
      {
        populate: ['thumbnail'], 
        sort: ["rate:desc"],
        pagination: {
          start: 0,
          limit: 3,
          withCount: false,
        }
      
      }),
      enabled: false
  })

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
            <InView as="div" onChange={(inView, entry) => inView && refetch()} >
              { topRateData && <ProductVerticalList title='Top Rated' data={TopRatedMock} />}
            </InView>

          </SwiperSlide>
          
      </Swiper>
    );
}

