import { IImage } from "./Image";
import { IVariants } from "./Variants";

export interface IProduct {
  id: string;
  title: string;
  description: string;
  images: {
    edges: IImage[];
  };
  variants: {
    edges: IVariants[];
  };
}
