import { IProduct } from "@/interfaces/Product";
import React from "react";
import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";

const ProductSection = ({ productData }: { productData: IProduct }) => {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
      <ProductImage images={productData.images.edges} />
      <ProductDetails productData={productData} />
    </div>
  );
};

export default ProductSection;
