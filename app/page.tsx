import ProductList from "@/app/products/components/ProductList";
import StoreHeading from "@/components/StoreHeading";
import { products } from "@/db";
import React from "react";

const HomePage = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <StoreHeading />
      <ProductList products={products} />
    </div>
  );
};

export default HomePage;
