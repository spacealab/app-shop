import { ApiResponseType, EntityType } from '@/types';

import { CategoryType } from '@/types/api/Category';
import { ImageView } from '@/components/common';
import Link from 'next/link';
import {featuredCategoriesMock} from '@/mock/featuredCategories'
import { getFeatureCategory } from '@/api/Category';
import { useQuery } from '@tanstack/react-query';

interface Props {

};

export function FeaturedCategories() {
    const {data} = useQuery<ApiResponseType<CategoryType>>({queryKey:[getFeatureCategory.name], queryFn: () => getFeatureCategory() })

    return (
        <div className="flex flex-wrap justify-between gap-[24px]">

            {
                data && data.data.map((item: EntityType<CategoryType> , index: number) => {
                    return (
                        <Link key={index} href={item.attributes.link ?? '#'} style={{backgroundColor: item.attributes.color}} className="flex flex-col justify-center items-center text-blue-300 bg-green-100 border-[1px] border-green-100 hover:border-green-300 px-2 lg:px-5 py-3 pt-2 rounded-xl">
                        <ImageView src={item.attributes.thumbnail.data?.attributes.url ?? ''} width={93} height={84} alt="cat" className="mb-2 lg:mb-4" />
                        <h3 className="text-[12px] text-bold sm:text-heading-sm md:text-heading6 text-center">{item.attributes.title}</h3>
                        <span className="text-xsmall text-gray-400 hidden lg:flex">{item.attributes.product_count} items</span>
                      </Link>
                    )
                })
            }


            {/* {
                featuredCategoriesMock.map((item, index) => {
                    return (
                        <Link key={index} href={item.link} style={{backgroundColor: item.color}} className="flex flex-col justify-center items-center text-blue-300 bg-green-100 border-[1px] border-green-100 hover:border-green-300 px-2 lg:px-5 py-3 pt-2 rounded-xl">
                        <ImageView src={item.img} width={93} height={84} alt="cat" className="mb-2 lg:mb-4" />
                        <h3 className="text-[12px] text-bold sm:text-heading-sm md:text-heading6 text-center">{item.title}</h3>
                        <span className="text-xsmall text-gray-400 hidden lg:flex">{item.items} items</span>
                      </Link>
                    )
                })
            } */}
        </div>
    );
};