import api from "../api/api";

const cartApi = api.injectEndpoints({
  endpoints: (builder) => ({
    allCartItems: builder.query({
      query: () => ({
        url: "/api/carts",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["Carts"],
    }),
    addToCart: builder.mutation({
      query: (data) => ({
        url: "/api/carts/addToCart",
        method: "POST",
        credentials: "include",
        body: data,
      }),
      invalidatesTags: ["Carts"],
    }),
    updateQuantity: builder.mutation({
      query: (data) => ({
        url: "/api/carts/updateQuantity",
        method: "PATCH",
        credentials: "include",
        body: data,
      }),
      invalidatesTags: ["Carts"],
    }),
    deleteCartItem: builder.mutation({
      query: (id) => ({
        url: `/api/carts/delete/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Carts"],
    }),
  }),
});
export const {
  useAddToCartMutation,
  useAllCartItemsQuery,
  useUpdateQuantityMutation,
  useDeleteCartItemMutation,
} = cartApi;
