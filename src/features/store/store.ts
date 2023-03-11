import { configureStore } from "@reduxjs/toolkit";
import goodsReducer from "../reducers/goodsSlice";
import cartReducer from "../reducers/cartSlice";

export const store = configureStore({
  reducer: {
    goodsReducer,
    cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
