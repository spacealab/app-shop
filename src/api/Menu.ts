import apiClient from "@/api/config/ApiClient";

export async function getMenuApiCall() {
  return await apiClient.get('/menus', {
    params: {
      populate: '*'
    }
  });
}