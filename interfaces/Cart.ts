import { IVariants } from "./Variants";

export interface CartItem {
  id: string;
  variant: IVariants;
  imgSrc: string;
  title: string;
  price: number;
  quantity: number;
}
