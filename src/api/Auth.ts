import { AuthResponseType } from "@/types/api/Auth";
import apiClient from "@/api/config/ApiClient";

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

interface LoginData {
  identifier: string;
  password: string;
}

export function registerApiCall(data : RegisterData) : Promise<AuthResponseType> {
  return apiClient.post('/auth/local/register', data);
}

export function loginApiCall(data : LoginData) : Promise<AuthResponseType> {
  return apiClient.post('/auth/local', data);
}