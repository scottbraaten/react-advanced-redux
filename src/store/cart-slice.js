import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQty: 0, changed: false },
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const pastItem = state.items.find((element) => element.id === item.id);
      state.totalQty++;
      state.changed = true;
      if (!pastItem) {
        state.items.push({
          id: item.id,
          price: item.price,
          qty: 1,
          totalPrice: item.price,
          title: item.title,
        });
      } else {
        pastItem.qty += 1;
        pastItem.totalPrice = pastItem.qty * pastItem.price;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const targetItem = state.items.find((item) => item.id === id);
      state.totalQty--;
      if (targetItem.qty === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        targetItem.qty--;
        targetItem.totalPrice -= targetItem.price;
      }
    },
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalQty = action.payload.totalQty;
      state.changed = false;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
