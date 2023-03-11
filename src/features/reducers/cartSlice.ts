import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  items: string[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex((id) => id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    addItems: (state, action: PayloadAction<string[]>) => {
      state.items = action.payload;
    },
    clearItems: (state) => {
      state.items = [];
    }
  },
});

export const {
  addItem,
  addItems,
  removeItem,
  clearItems
} = cartSlice.actions;

export default cartSlice.reducer;