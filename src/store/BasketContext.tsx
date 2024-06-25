import { ReactNode, createContext, useState } from "react";

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
  

export const BasketContextProvider = (props: Props) => {
  const [basketItems, setBasketItems] = useState<Array<ProductItem>>([]);

  const addItemHandler = (product: EntityType<ProductType>) => {
    const newProduct: ProductItem = {
      productId: product.id,
      title: product.attributes.title,
      img: product.attributes.thumbnail?.data?.attributes.url,
      price: product.attributes.price,
      quantity: 1
    };
  
    setBasketItems((prevState) => [
      ...prevState,
      newProduct
    ]);
  };
  
  
  const increaseItemHandler = (productId: number): void => {
    const newBasket = basketItems.map((item) => {
      if (item.productId === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
  
    setBasketItems(newBasket);
  };
  
  
  const decreaseItemHandler = (productId: number): void => {
    const currentProduct = basketItems.find((item) => item.productId === productId);
    
    if (currentProduct && currentProduct.quantity === 1) {
      deleteItemHandler(productId)
    } else {
      const newBasket = basketItems.map((item) => {
        if (item.productId === productId) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      setBasketItems(newBasket);
    }
  };
  
  
  const deleteItemHandler = (productId: number): void => {
    const newBasket = basketItems.filter((item) => item.productId !== productId);
    setBasketItems(newBasket);
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