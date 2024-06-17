import { ApiResponseType } from "@/types";
import { ProductType } from "@/types/api/Product";
import apiClient from "./config/ApiClient";

interface Props {
  populate?: Array<"categories" | "thumbnail" | "gallery">;
  filters?: {
    is_popular?: boolean;
    is_papular_fruit?: boolean;
  };
}

interface Filters {
  is_popular?: { $eq: boolean };
  is_papular_fruit?: {$eq: boolean};
}

export function getAllProductsApiCall({populate, filters}: Props) : Promise<ApiResponseType<ProductType>> {
  const customFilter: Filters = {};

  if (filters?.is_popular) {
    customFilter.is_popular = { $eq: filters.is_popular };
  }

  if (filters?.is_papular_fruit) {
    customFilter.is_papular_fruit = { $eq: filters.is_papular_fruit };
  }

  return apiClient.get('/products', {
    params: {
      populate: populate?.join(','),
      filters: filters
    }
  });
}