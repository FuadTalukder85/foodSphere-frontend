import { baseApi } from "../../api/baseApi";

const supplyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postSupply: builder.mutation({
      query: (postSupply) => ({
        url: "/create-supply",
        method: "POST",
        body: postSupply,
      }),
    }),
    updateSupply: builder.mutation({
      query: ({ _id, supplyData }) => ({
        url: `/supplies/${_id}`,
        method: "PUT",
        body: supplyData,
      }),
    }),
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
        url: `/supplies/${_id}`,
        method: "DELETE",
      }),
    }),
    getAllStats: builder.query({
      query: () => ({
        url: "/all-stats",
        method: "GET",
      }),
    }),
  }),
});
export const {
  usePostSupplyMutation,
  useGetSuppliesQuery,
  useGetSupplyByIdQuery,
  useDeleteSupplyMutation,
  useUpdateSupplyMutation,
  useGetAllStatsQuery,
} = supplyApi;
