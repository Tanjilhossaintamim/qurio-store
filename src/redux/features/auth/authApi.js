import api from "../api/api";

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
        body: data,
      }),
    }),
    verify: builder.mutation({
      query: (data) => ({
        url: "/api/verify",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const { useSingupMutation, useLoginMutation, useVerifyMutation } =
  authApi;
