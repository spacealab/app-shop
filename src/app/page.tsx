import 'swiper/css/navigation';

import {Banner, FeaturedCategories, IconBox, Layout, MiniProductSlider, Section, SimpleProductSlider} from "@/components";

import { popularProducts } from "@/mock/PopularProducts";

export default function Home() {

  return (

    <>

    
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
        <SimpleProductSlider nextEl={'.swiper-nav-right'} prevEl={'.swiper-nav-left'} sliderData={popularProducts}/>
      </Section>

      <Section>
      <div className="flex justify-between mb-[50px]">
          <h2 className="text-heading3 text-blue-300">Popular Fruits</h2>
          <div className="flex items-center gap-3">
            <IconBox icon='swiper-nav-left2 icon-angle-small-left cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white' size={24}/>
            <IconBox icon='swiper-nav-right2 icon-angle-small-right cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white' size={24}/>
          </div>
        </div>
        <SimpleProductSlider nextEl={'.swiper-nav-right2'} prevEl={'.swiper-nav-left2'} sliderData={popularProducts}/>
      </Section>

      </Layout>
    </>
  );
} 