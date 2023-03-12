import { Product } from "../../types/Product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GoodsState {
  goods: Product[],
  product: Product | null,
  isLoading: boolean,
  isError: boolean,
}

const initialState: GoodsState = {
  goods: [],
  product: null,
  isLoading: false,
  isError: false,
}

export const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    goodsFetching(state) {
      state.isLoading = true;
      state.product = null;
    },
    goodsFetchingSuccess(state, action: PayloadAction<Product[]>) {
      state.isLoading = false;
      state.goods = action.payload;
    },
    productFetchingSuccess(state, action: PayloadAction<Product>) {
      state.isLoading = false;
      state.product = action.payload;
    },
    goodsFetchingError(state) {
      state.isLoading = false;
      state.isError = true;
    }
  },
})

export default goodsSlice.reducer;

export const {
  goodsFetching,
  goodsFetchingSuccess,
  productFetchingSuccess,
  goodsFetchingError
} = goodsSlice.actions;
