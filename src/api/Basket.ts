import {ApiResponseSingleType} from "@/types";
import {BasketType} from "@/types/api/Basket";
import apiClient from "@/api/config/ApiClient";

export interface UpdateBasketData {
    basket_items: Array<{
        product: {
            connect: Array<{id: number}>
        },
        quantity: number
    }>
}

export async function basketApiCall(): Promise<ApiResponseSingleType<BasketType>> {
    return await apiClient.get('/my-basket');
}

export async function updateBasketApiCall(data: UpdateBasketData){
    return await apiClient.put('/my-basket', {
        data: data
    });
}
