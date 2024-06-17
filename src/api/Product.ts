import { ApiResponseType } from "@/types";
import { ProductType } from "@/types/api/Product";
import apiClient from "./config/ApiClient";

interface Props {
  populate?: Array<"categories" | "thumbnail" | "gallery">;
  filters?: {
    is_popular?: boolean;
    is_papular_fruit?: boolean;
    is_best_sellers?: boolean;
  };
}

interface Filters {
  is_popular?: { $eq: boolean };
  is_papular_fruit?: {$eq: boolean};
  is_best_sellers?: {$eq: boolean};
}

export function getAllProductsApiCall({populate, filters}: Props) : Promise<ApiResponseType<ProductType>> {
  const customFilter: Filters = {};

  filters?.is_popular && (customFilter.is_popular = {$eq: filters.is_popular})
  filters?.is_papular_fruit && (customFilter.is_papular_fruit = {$eq: filters.is_papular_fruit})
  filters?.is_best_sellers && (customFilter.is_best_sellers = {$eq: filters.is_best_sellers})
  

  return apiClient.get('/products', {
    params: {
      populate: populate?.join(','),
      filters: filters
    }
  });
}