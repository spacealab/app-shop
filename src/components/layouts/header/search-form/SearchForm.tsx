import { useMutation, useQuery } from "@tanstack/react-query";

import { EntityType } from "@/types";
import { IconBox } from "@/components/common";
import { ProductType } from "@/types/api/Product";
import { getAllProductsApiCall } from "@/api/Product";
import {useForm} from "react-hook-form";
import { useState } from "react";

interface Props {
    inputClassName?: string;
}

interface FormInput {
    search_text: string
}

interface FilterData {
    title: {
        $containsi: string
    }
}

export function SearchForm({inputClassName = ''} : Props) {
    // TODO SHOULD IMPLEMENT FORM

    const [resultData, setResultData] = useState<Array<EntityType<ProductType>>>();

    const {register, handleSubmit} = useForm<FormInput>();

    const mutation =  useMutation({
        mutationFn: (data : FilterData) => getAllProductsApiCall({filters: data})
      });
      
    const onSubmit = (data : FormInput) => {

        mutation.mutate({
            title: {
              '$containsi': data.search_text
            }
          }, {
            onSuccess: (response) => {
                setResultData(response.data)
            }
          })     
        
    }

    return (
        <div className="relative">
            <form name="search-form" onSubmit={handleSubmit(onSubmit)} action="#" method="post" className="flex items-center">
                <input type="text" {...register('search_text')} placeholder="Search for items" className={`text-xsmall text-gray-400 border-gray-300 w-full focus:outline-none ${inputClassName}`} />
                <button type="submit"><IconBox icon={'icon-search'} /></button>
            </form>

            {
                resultData &&
                <div className={"absolute bg-white w-full left-0 right-0 top-14"}>
                    <ul>
                        {
                            resultData.map((item: EntityType<ProductType>, index) => {
                                return <li className={"p-4 hover:bg-green-200 hover:text-white cursor-pointer"}>{item.attributes.title}</li>
                            })
                        }
                    </ul>
                </div>

            }

        </div>
    );
}