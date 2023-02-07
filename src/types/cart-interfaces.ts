import { ProductType } from "./product-interfaces";

export interface CartProduct {
  product: ProductType;
  quantity: number;
}

export type CartProducts = Array<CartProduct>;
