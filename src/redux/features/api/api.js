import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://qrio-ecommerece.vercel.app",
  }),
  endpoints: () => ({}),
  tagTypes: ["Carts"],
});

export default api;
