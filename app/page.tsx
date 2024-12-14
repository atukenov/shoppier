"use client";

import ProductList from "@/app/products/components/ProductList";
import StoreHeading from "@/components/StoreHeading";
import { products } from "@/db";
import useMetadata from "@/utils/useMetadata";
import React from "react";

const HomePage = () => {
  useMetadata("Home Page Title", "This is home page");
  return (
    <div className="mx-auto max-w-6xl">
      <StoreHeading />
      <ProductList products={products} />
    </div>
  );
};

export default HomePage;
