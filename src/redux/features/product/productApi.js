import api from "../api/api";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "/api/products",
        method: "GET",
      }),
    }),
    getSingleProducts: builder.query({
      query: (id) => ({
        url: `/api/products/${id}`,
        method: "GEt",
      }),
    }),
  }),
});
export const { useGetAllProductsQuery, useGetSingleProductsQuery } = productApi;
