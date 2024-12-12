"use client";
import { IProduct } from "@/interfaces/Product";
import React, { useEffect, useState } from "react";
import BackToProductButton from "../../../components/BackToProductButton";
import ProductInfo from "./ProductInfo";
import ProductForm from "./ProductForm";

const ProductDetails = ({ productData }: { productData: IProduct }) => {
  console.log(productData, "dfasadsf");
  const [variantPrice, setVariantPrice] = useState<string>("");
  useEffect(() => {
    setVariantPrice(productData.variants.edges[0].node.price);
  }, [productData]);
  return (
    <div className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
      <BackToProductButton />
      <ProductInfo
        title={productData.title}
        description={productData.description}
        price={variantPrice}
      />
      <ProductForm
        title={productData.title}
        handle={productData.id}
        variants={productData.variants.edges}
        mainImg={productData.images.edges[0].node}
        setVariantPrice={setVariantPrice}
      />
    </div>
  );
};

export default ProductDetails;
