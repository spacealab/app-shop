import {UpdateBasketData, basketApiCall, updateBasketApiCall} from "@/api/Basket";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";

export function useBasket(){
    const queryClient = useQueryClient();

    const {data: basketData} = useQuery({queryKey: ['get-basket'], queryFn: basketApiCall});
    
    const mutate = useMutation({mutationFn: updateBasketApiCall});

    const basketItems = basketData?.data.attributes.basket_items ?? [];

    const addItemHandler = (productId: number): void => {
        const updateData: UpdateBasketData = {
            basket_items: [
                {
                    product: {
                        connect: [{id: productId}]
                    },
                    quantity: 1
                }
            ]
        };

        mutate.mutate(updateData, {
            onSuccess: (response) => {
              queryClient.invalidateQueries({queryKey: ['get-basket']})
            }
        });
    };

    return {basketItems: basketItems, addItem: addItemHandler}
}
