import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://qorio-ecommerce.vercel.app/api",
  }),
  endpoints: () => ({}),
  tagTypes: ["Carts"],
});

export default api;
