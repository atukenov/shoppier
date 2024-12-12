"use client";

import ProductSection from "@/app/products/components/ProductSection";
import { products } from "@/db";
import { IProduct } from "@/interfaces/Product";
import React, { useEffect, useState } from "react";

const ProductPage = ({ params }: { params: Promise<{ product: string }> }) => {
  // const product = await(params).product;
  const [productData, setProductData] = useState<IProduct>(products[0]);

  useEffect(() => {
    const getProduct = async () => {
      return (await params).product;
    };

    getProduct().then((product) => {
      if (product) {
        //fetch product
        setProductData(products[parseInt(product) - 1]);
      }
    });
  }, [params]);

  return (
    <div className="min-h-screen py-12 sm:pt-20">
      <ProductSection productData={productData} />
    </div>
  );
};

export default ProductPage;
