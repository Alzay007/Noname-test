import { Product } from "../../types/Product";
import axios from "axios";
import { AppDispatch } from "../store/store";
import { goodsSlice } from "./goodsSlice";

export const BASE_URL = 'https://apple-shop-ed92.onrender.com'

export const fetchGoods = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(goodsSlice.actions.phonesFetching())
    const response = await axios.get<Product[]>(BASE_URL + '/goods')
    dispatch(goodsSlice.actions.phonesFetchingSuccess(response.data))
  } catch (e) {
    dispatch(goodsSlice.actions.phonesFetchingError())
  }
}

export const fetchOnePhone = (id: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(goodsSlice.actions.phonesFetching())
    const response = await axios.get<Product>(BASE_URL + `${id}`)
    dispatch(goodsSlice.actions.phoneFetchingSuccess(response.data))
  } catch (e) {
    dispatch(goodsSlice.actions.phonesFetchingError())
  }
}
