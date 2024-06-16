import apiClient from "./config/ApiClient";

interface Props {
  populate?: Array<"categories" | "thumbnail" | "gallery">;
  filters?: {
    is_popular?: boolean;
  };
}

interface Filters {
  is_popular?: { $eq: boolean };
}

export function getAllProductsApiCall({populate, filters}: Props) {
  const customFilter: Filters = {};

  if (filters?.is_popular) {
    customFilter.is_popular = { $eq: filters.is_popular };
  }

  return apiClient.get('/products', {
    params: {
      populate: populate?.join(','),
      filters: filters
    }
  });
}