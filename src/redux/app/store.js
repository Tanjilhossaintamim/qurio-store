import { configureStore } from "@reduxjs/toolkit";
import api from "../features/api/api";
import authSlice from "../features/auth/authSlice";
import productSlice from "../features/product/productSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authSlice,
    product: productSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
export default store;
