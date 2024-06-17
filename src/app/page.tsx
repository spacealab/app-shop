'use client';

import 'swiper/css/navigation';
import 'react-toastify/dist/ReactToastify.css';

import {Banner, BestSellersSlider, BottomSlider, DealsOfTheDays, FeaturedCategories, IconBox, Layout, MiniProductSlider, Section, SimpleProductSlider} from "@/components";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ApiResponseType } from '@/types';
import { BestSellers } from "@/mock/BestSellers"; // Make sure the path is correct
import { DealsOfTheDaysMock } from '@/mock/DealsOfTheDays';
import Link from 'next/link';
import { ProductType } from '@/types/api/Product';
import { ToastContainer } from 'react-toastify';
import { getAllProductsApiCall } from '@/api/Product';
import { popularProducts } from "@/mock/PopularProducts";
import { useQuery } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: false,
      retry: 0,
    },
  },
});

export default function Home() {

  // const {data : popularProductsData} = useQuery({
  //   queryKey: [getAllProductsApiCall.name],
  //   queryFn: () => getAllProductsApiCall({populate: ["categories", "thumbnail"], filters: {is_popular: true}})

  // })

  function InnerComponentPopulate() {
    const { data: popularProductsData } = useQuery<ApiResponseType<ProductType>>({
      queryKey: [getAllProductsApiCall.name, 'popular_product'],
      queryFn: () => getAllProductsApiCall({ populate: ["categories", "thumbnail"], filters: { is_popular: true } })
    });
  

  }

  function InnerComponentFruit() {
    const { data: popularFruitProductsData } = useQuery<ApiResponseType<ProductType>>({
      queryKey: [getAllProductsApiCall.name, 'popular_fruit'],
      queryFn: () => getAllProductsApiCall({ populate: ["categories", "thumbnail"], filters: { is_papular_fruit: true } })
    });

  }

  function InnerComponentSeller() {
    const { data: bestSellerProductsData } = useQuery<ApiResponseType<ProductType>>({
      queryKey: [getAllProductsApiCall.name, 'best_seller'],
      queryFn: () => getAllProductsApiCall({ populate: ["categories", "thumbnail"], filters: { is_best_seller: true } })
    });
  

  }
  
  return (

    <>

      <QueryClientProvider client={queryClient} >

    
        <Layout>
          
          <Section>
            <Banner title={"Don't miss amazing grocery deals"}
                    subtitle={"Sign up for the daily newsletter"}
                    image={"/assets/images/fresh-apples.png"}
                    bgImage={"/assets/images/banner_bg.png"}/>
          </Section>

          <Section>
            <div className="hidden sm:flex mb-[50px]">
              <h2 className="text-heading3 text-blue-300">Featured Categories</h2>
            </div>
            <FeaturedCategories />
          </Section>

          <Section>
            <MiniProductSlider />
            
          </Section>

          <Section>
            <div className="flex justify-between mb-[50px]">
              <h2 className="text-heading3 text-blue-300">Popular Products</h2>
              <div className="flex items-center gap-3">
                <IconBox icon='swiper-nav-left icon-angle-small-left cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white' size={24}/>
                <IconBox icon='swiper-nav-right icon-angle-small-right cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white' size={24}/>
              </div>
            </div>
            { popularProductsData && <SimpleProductSlider nextEl={'.swiper-nav-right'} prevEl={'.swiper-nav-left'} sliderData={popularProductsData.data}/> }
          </Section>

          <Section>
            <div className="flex justify-between mb-[50px]">
              <h2 className="text-heading3 text-blue-300">Popular Fruits</h2>
              <div className="flex items-center gap-3">
                <IconBox icon='swiper-nav-left2 icon-angle-small-left cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white' size={24}/>
                <IconBox icon='swiper-nav-right2 icon-angle-small-right cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white' size={24}/>
              </div>
            </div>
            { popularFruitProductsData.data && <SimpleProductSlider nextEl={'.swiper-nav-right2'} prevEl={'.swiper-nav-left2'} sliderData={popularFruitProductsData.data}/>}
          </Section>

          <Section>
                    <div className="flex justify-between mb-[50px]">
              <h2 className="text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading3 text-blue-300">Best Sellers</h2>
            </div>
            <div className="flex gap-[24px]">
              <div className="bg-[url('/assets/images/bg-leaf.png')] bg-no-repeat bg-bottom bg-[#3BB77E] rounded-[10px] shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] p-12 pt-[38px] self-stretch flex-col justify-between max-w-[370px] hidden xl:flex">
                <h3 className="text-heading2 text-blue-300">Bring nature into your home</h3>
                <Link href="#" className="mt-6 pl-[15px] pr-2.5 py-2 bg-yellow-100 hover:bg-green-200 rounded-[3px] cursor-pointer inline-flex max-w-max items-center gap-2.5">
                  <div className="text-xsmall text-white">Shop now</div>
                  <i className="icon-arrow-small-right text-[24px]"></i>
                </Link>
              </div>
              { bestSellerProductsData.data && <div className='flex-grow'><BestSellersSlider sliderData={bestSellerProductsData.data} /></div> }
            </div>
          </Section>

          {/* <Section>
            <div className="flex justify-between items-center mb-[50px]">
              <h2 className="text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading3 text-blue-300">Deals Of The Days</h2>
              <Link className="flex items-center" href="#">All Deals <IconBox icon='icon-angle-small-right' size={24}/></Link>
            </div>

            <DealsOfTheDays sliderData={DealsOfTheDaysMock}/>
          </Section> */}

          <Section>
              <BottomSlider />
          </Section>

          <ToastContainer autoClose={false} hideProgressBar={false} closeOnClick={true} draggable={false} theme='light' position='top-right' />

        </Layout>

      </QueryClientProvider>

    </>
  );
} 