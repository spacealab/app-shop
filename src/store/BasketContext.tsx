import { ReactNode, createContext, useState } from "react";

interface Props {
  children: ReactNode;
}

interface ProductItem {
    productId: number;
    title: string;
    price: number;
    img: string;
    quantity: number;
  }

  export const BasketContext = createContext<{
    basketItems: Array<ProductItem>,
    addItem: (product: ProductItem) => void,
    increaseItem: (productId: number) => void,
    decreaseItem: (productId: number) => void,
    deleteItem: (productId: number) => void
  }>({
    basketItems: [],
    addItem: (product: ProductItem): void => {},
    increaseItem: (productId: number): void => {},
    decreaseItem: (productId: number): void => {},
    deleteItem: (productId: number): void => {}
  });  

export const BasketContextProvider = (props: Props) => {
  const [basketItems, setBasketItems] = useState<Array<ProductItem>>([]);

  const addItemHandler = (product: ProductItem): void => {

  }
  
  const increaseItemHandler = (productId: number): void => {
  
  }
  
  const decreaseItemHandler = (productId: number): void => {
  
  }
  
  const deleteItemHandler = (productId: number): void => {
  
  }
  

  return (
    <BasketContext.Provider
      value={{
        basketItem: basketItems,
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