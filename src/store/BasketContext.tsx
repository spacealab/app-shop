import { ReactNode, createContext, useReducer, useState } from "react";

import { EntityType } from "@/types";
import { ProductType } from "@/types/api/Product";

interface Props {
  children: ReactNode;
}

interface ProductItem {
    productId: number;
    title: string;
    price: number;
    img?: string;
    quantity: number;
  }

  export const BasketContext = createContext<{
    basketItems: Array<ProductItem>,
    addItem: (product: EntityType<ProductType>) => void,
    increaseItem: (productId: number) => void,
    decreaseItem: (productId: number) => void,
    deleteItem: (productId: number) => void,
    getItem: (productId: number) => undefined | ProductItem
  }>({
    basketItems: [],
    addItem: (product: EntityType<ProductType>): void => {},
    increaseItem: (productId: number): void => {},
    decreaseItem: (productId: number): void => {},
    deleteItem: (productId: number): void => {},
    getItem: (productId: number) => undefined
  });

type Action = {type: "ADD_ITEM", product: EntityType<ProductType>} 
                | {type: "INCREASE_ITEM", productId: number}
                | {type: "DECREASE_ITEM", productId: number}
                | {type: "DELETE_ITEM", productId: number}

  
const basketReducer = (currentState: ProductItem[], action : Action) => {
  switch (action.type) {
      case "ADD_ITEM":
          return [
              ...currentState,
              {
                  productId: action.product.id,
                  title: action.product.attributes.title,
                  img: action.product.attributes.thumbnail?.data?.attributes.url,
                  price: action.product.attributes.price,
                  quantity: 1
              }
          ];
      case "INCREASE_ITEM":
          return currentState.map((item) => {
            if (item.productId === action.productId) {
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          });
      case "DECREASE_ITEM":
            const currentProduct = currentState.find((item) => item.productId === action.productId);
            if (currentProduct && currentProduct.quantity === 1) {
                return currentState.filter((item) => item.productId !== action.productId);
            }
            return currentState.map((item) => {
                if (item.productId === action.productId) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
          });        
      case "DELETE_ITEM":
          return currentState.filter((item) => item.productId !== action.productId);
      default:
          return currentState;
  }
};


export const BasketContextProvider = (props: Props) => {
  // const [basketItems, setBasketItems] = useState<Array<ProductItem>>([]);

  const [basketItems, dispatch] = useReducer(basketReducer, [])

  const addItemHandler = (product: EntityType<ProductType>) => {
    dispatch({type: "ADD_ITEM", product: product});
  };
  
  
  const increaseItemHandler = (productId: number): void => {
    dispatch({ type: "INCREASE_ITEM", productId: productId });
};
  
  const decreaseItemHandler = (productId: number): void => {
    dispatch({ type: "DECREASE_ITEM", productId: productId });

  };
  
  
  const deleteItemHandler = (productId: number): void => {
    dispatch({ type: "DELETE_ITEM", productId: productId });

  }

  const getItemHandler = (productId: number): ProductItem | undefined => {
    return basketItems.find((item): boolean => item.productId == productId);
  };  
  

  return (
    <BasketContext.Provider
      value={{
        basketItems: basketItems,
        getItem: getItemHandler,
        addItem: addItemHandler,
        increaseItem: increaseItemHandler,
        decreaseItem: decreaseItemHandler,
        deleteItem: deleteItemHandler,
      }}
    >
      {props.children}
    </BasketContext.Provider>
  );
};