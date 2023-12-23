import api from "../api/api";

const cartApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (data) => ({
        url: "/api/products",
        method: "POST",
        body: data,
      }),
    }),
    updateQuantity: builder.mutation({
      query: (data) => ({
        url: "/api/products",
        method: "POST",
        body: data,
      }),
    }),
    allCartItems: builder.query({
      query: () => ({
        url: "/api/products",
        method: "POST",
      }),
    }),
  }),
});
export const { useAddToCartMutation } = cartApi;
