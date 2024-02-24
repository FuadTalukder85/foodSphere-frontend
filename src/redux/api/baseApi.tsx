import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "http://l2-b2-assignment-6-backend-fuad-talukder85-k46s6mhhj.vercel.app",
    credentials: "include",
  }),
  endpoints: () => ({}),
});
