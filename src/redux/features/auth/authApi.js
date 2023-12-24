import api from "../api/api";
import { setUser } from "./authSlice";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    singup: builder.mutation({
      query: (data) => ({
        url: "/api/register",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/api/login",
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
        url: "/api/verify",
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: (data) => ({
        url: "/api/logout",
        method: "POST",
        credentials: "include",
        body: data,
      }),
    }),
    checkLogin: builder.mutation({
      query: () => ({
        url: "/api/verifyLogin",
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
