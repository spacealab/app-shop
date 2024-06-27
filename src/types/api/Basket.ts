import { EntityType } from "./Response";
import { ProductType } from "./Product";
export interface BasketType {
    uuid: any;
    basket_items: Array<BasketItemType>;
}

interface BasketItemType {
    id: number;
    quantity: number;
    product: {
        data: EntityType<ProductType>
    }
}