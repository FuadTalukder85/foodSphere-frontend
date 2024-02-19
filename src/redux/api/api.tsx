import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
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
        url: "/all-supplies",
        method: "GET",
      }),
    }),
    deleteSupply: builder.mutation({
      query: (_id) => ({
        url: `/all-supplies/${_id}`,
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
        url: "/all-supplies",
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
  useDeleteSupplyMutation,
  // usePostSupplyMutation,
  useUpdateSupplyMutation,
} = baseApi;
