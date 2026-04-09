import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ItemType = {
  id: number;
  title: string;
  price: string;
  desc: string;
  img: string;
  quantity: number;
};

type CartState = {
  items: ItemType[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<ItemType, "quantity">>) => {
      const exists = state.items.find((i) => i.id === action.payload.id);

      if (exists) {
        exists.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    incrementQty: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
    },

    decrementQty: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
  },
});

export const { addToCart, incrementQty, decrementQty, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
