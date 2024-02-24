import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://l2-b2-assignment-6-backend-fuad-talukder85.vercel.app",
    credentials: "include",
  }),
  endpoints: () => ({}),
});

export const {} = baseApi;
