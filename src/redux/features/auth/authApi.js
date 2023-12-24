import api from "../api/api";
import { setUser } from "./authSlice";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    singup: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        credentials: "include",
        body: data,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          dispatch(setUser(res.data.payload));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    verify: builder.mutation({
      query: (data) => ({
        url: "/verify",
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: (data) => ({
        url: "/logout",
        method: "POST",
        credentials: "include",
        body: data,
      }),
    }),
    checkLogin: builder.mutation({
      query: () => ({
        url: "/verifyLogin",
        method: "POST",
        credentials: "include",
      }),
    }),
  }),
});
export const {
  useSingupMutation,
  useLoginMutation,
  useVerifyMutation,
  useLogoutMutation,
  useCheckLoginMutation,
} = authApi;
