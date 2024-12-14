// store/cartSlice.ts
import { CartItem } from "@/interfaces/Cart";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) =>
          item.id === newItem.id &&
          item.variant.node.id === newItem.variant.node.id
      );
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.items.push(newItem);
      }
      state.totalQuantity += newItem.quantity;
      state.totalPrice += newItem.price * newItem.quantity;
    },
    removeItem(
      state,
      action: PayloadAction<{ id: string; variantId: string; quantity: number }>
    ) {
      const { id, variantId, quantity } = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === id && item.variant.node.id === variantId
      );
      if (existingItem) {
        if (quantity === -1) {
          state.totalQuantity -= existingItem.quantity;
          state.totalPrice -= existingItem.price * existingItem.quantity;
          state.items = state.items.filter(
            (item) => !(item.id === id && item.variant.node.id === variantId)
          );
        } else {
          state.totalQuantity -= existingItem.quantity - quantity;
          state.totalPrice -=
            existingItem.price * (existingItem.quantity - quantity);
          state.items = state.items.map((item) => {
            if (item.id === id && item.variant.node.id === variantId)
              item.quantity = quantity;
            return item;
          });
        }
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
