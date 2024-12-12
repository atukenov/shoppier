import { IProduct } from "@/interfaces/Product";
import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
