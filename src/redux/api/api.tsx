import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    // users: builder.mutation({
    //   query: (users) => ({
    //     url: "/api/v1/register",
    //     method: "POST",
    //     body: users,
    //   }),
    // }),
    getSupplies: builder.query({
      query: () => ({
        url: "/supplies",
        method: "GET",
      }),
    }),
    getSupplyById: builder.query({
      query: (_id) => ({
        url: `/supplies/${_id}`,
        method: "GET",
      }),
    }),
    deleteSupply: builder.mutation({
      query: (_id) => ({
        url: `/asupplies/${_id}`,
        method: "DELETE",
      }),
    }),
    // postSupply: builder.mutation({
    //   query: (postSupply) => ({
    //     url: "/all-supplies",
    //     method: "POST",
    //     body: postSupply,
    //   }),
    // }),
    updateSupply: builder.mutation({
      query: (updateSupplyData) => ({
        url: "/supplies",
        method: "PUT",
        body: updateSupplyData,
      }),
      // invalidatesTags: ["supply"],
    }),
  }),
});

export const {
  // useUsersMutation,
  useGetSuppliesQuery,
  useGetSupplyByIdQuery,
  useDeleteSupplyMutation,
  // usePostSupplyMutation,
  useUpdateSupplyMutation,
} = baseApi;
