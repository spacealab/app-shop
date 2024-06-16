import { ApiResponseType } from "@/types";
import { CategoryType } from "@/types/api/Category";
import apiClient from "./config/ApiClient";

export function getFeatureCategory(): Promise<ApiResponseType<CategoryType>> {
    return apiClient.get('./Categories', {
        params: {
            populate: 'thumbnail',
            filters: {
                is_featured: {
                $eq: true,
              },
            },
          },          
    })
}