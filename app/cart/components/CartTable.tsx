"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Price from "@/components/Price";
import { FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/store/store";
import { CartItem } from "@/interfaces/Cart";
import Image from "next/image";
import { removeItem } from "@/store/cartSlice";

function CartTable() {
  const dispatch = useAppDispatch();
  const { items, totalPrice, totalQuantity } = useSelector(
    (state: RootState) => state.cart
  );

  // id: string;
  // variantId: string;
  // imgSrc: string;
  // title: string;
  // price: number;
  // quantity: number;

  const [cartItems, setCartItems] = useState<CartItem[]>(items);
  const [subtotal, setSubtotal] = useState(totalPrice);

  useEffect(() => {
    setCartItems(items);
    setSubtotal(totalPrice);
  }, [items, totalPrice, totalQuantity]);

  function updateItem(id: string, variantId: string, quantity: string) {
    dispatch(removeItem({ id, variantId, quantity: parseInt(quantity) }));
  }

  return (
    <div className="min-h-80 max-w-2xl my-4 sm:my-8 mx-auto w-full">
      <table className="mx-auto">
        <thead>
          <tr className="uppercase text-xs sm:text-sm text-palette-primary border-b border-palette-light">
            <th className="font-primary font-normal px-6 py-4">Product</th>
            <th className="font-primary font-normal px-6 py-4">Quantity</th>
            <th className="font-primary font-normal px-6 py-4 hidden sm:table-cell">
              Price
            </th>
            <th className="font-primary font-normal px-6 py-4">Remove</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-palette-lighter">
          {cartItems.map((item) => (
            <tr
              key={item.variant.node.id}
              className="text-sm sm:text-base text-gray-600 text-center"
            >
              <td className="font-primary font-medium px-4 sm:px-6 py-4 flex items-center">
                <Image
                  src={item.imgSrc}
                  alt=""
                  height={64}
                  width={64}
                  className={`hidden sm:inline-flex`}
                />
                <Link
                  passHref
                  href={`/products/${item.id}`}
                  className="pt-1 hover:text-palette-dark"
                >
                  {item.title}, {item.variant.node.title}
                </Link>
              </td>
              <td className="font-primary font-medium px-4 sm:px-6 py-4">
                <input
                  type="number"
                  inputMode="numeric"
                  id="variant-quantity"
                  name="variant-quantity"
                  min="1"
                  step="1"
                  value={item.quantity}
                  onChange={(e) =>
                    updateItem(item.id, item.variant.node.id, e.target.value)
                  }
                  className="text-gray-900 form-input border border-gray-300 w-16 rounded-sm focus:border-palette-light focus:ring-palette-light"
                />
              </td>
              <td className="font-primary text-base font-light px-4 sm:px-6 py-4 hidden sm:table-cell">
                <Price
                  currency="$"
                  num={item.price.toString()}
                  numSize="text-lg"
                />
              </td>
              <td className="font-primary font-medium px-4 sm:px-6 py-4">
                <button
                  aria-label="delete-item"
                  className=""
                  onClick={() =>
                    updateItem(item.id, item.variant.node.id, "-1")
                  }
                >
                  <FaTimes className="w-8 h-8 text-palette-primary border border-palette-primary p-1 hover:bg-palette-lighter" />
                </button>
              </td>
            </tr>
          ))}
          {subtotal === 0 ? null : (
            <tr className="text-center">
              <td></td>
              <td className="font-primary text-base text-gray-600 font-semibold uppercase px-4 sm:px-6 py-4">
                Subtotal
              </td>
              <td className="font-primary text-lg text-palette-primary font-medium px-4 sm:px-6 py-4">
                <Price
                  currency="$"
                  num={totalPrice.toString()}
                  numSize="text-xl"
                />
              </td>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CartTable;
