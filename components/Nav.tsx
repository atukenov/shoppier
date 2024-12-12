"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdDiamond } from "react-icons/md";

const Nav = () => {
  // const cart = useCartContext()[0];

  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    let numItems = 4;
    numItems++;
    // cart.forEach((item) => {
    //   numItems += item.variantQuantity;
    // });
    setCartItems(numItems);
  }, []);

  return (
    <header className="border-b border-palette-lighter sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between mx-auto max-w-6xl px-6 pb-2 pt-4 md:pt-6">
        <Link href="/">
          <span className=" cursor-pointer">
            <h1 className="flex no-underline">
              <MdDiamond color="#5B21B6" size={32} />
              {/* <Image
                height="32"
                width="32"
                alt="logo"
                className="h-8 w-8 mr-1 object-contain"
                src="/icons/icon.svg"
              /> */}
              <span className="text-xl font-primary font-bold tracking-tight pt-1">
                {process.env.siteTitle}
              </span>
            </h1>
          </span>
        </Link>
        <div>
          <Link href="/cart">
            <span className="relative" aria-label="cart">
              <FaShoppingCart size={32} color="#5B21B6" />
              {cartItems === 0 ? null : (
                <div className="absolute top-0 right-0 text-xs bg-yellow-300 text-gray-900 font-semibold rounded-full py-1 px-2 transform translate-x-4 -translate-y-3">
                  {cartItems}
                </div>
              )}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Nav;
