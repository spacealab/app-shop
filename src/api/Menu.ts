import { ApiResponseType, MenuType } from "@/types";

import apiClient from "@/api/config/ApiClient";

export async function getMenuApiCall(): Promise<ApiResponseType<MenuType>> {
  return await apiClient.get('/menus', {
    params: {
      populate: '*'
    }
  });
}