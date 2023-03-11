import { Product } from "../../types/Product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GoodsState {
  phones: Product[],
  phone: Product | null,
  isLoading: boolean,
  isError: boolean,
}

const initialState: GoodsState = {
  phones: [],
  phone: null,
  isLoading: false,
  isError: false,
}

export const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    phonesFetching(state) {
      state.isLoading = true;
      state.phone = null;
    },
    phonesFetchingSuccess(state, action: PayloadAction<Product[]>) {
      state.isLoading = false;
      state.phones = action.payload;
    },
    phoneFetchingSuccess(state, action: PayloadAction<Product>) {
      state.isLoading = false;
      state.phone = action.payload;
    },
    phonesFetchingError(state) {
      state.isLoading = false;
      state.isError = true;
    }
  },
})

export default goodsSlice.reducer;

export const {
  phonesFetching,
  phonesFetchingSuccess,
  phoneFetchingSuccess,
  phonesFetchingError
} = goodsSlice.actions;
