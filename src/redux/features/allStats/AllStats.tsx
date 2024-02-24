import { baseApi } from "../../api/baseApi";

const allStatsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllStats: builder.query({
      query: () => ({
        url: "/all-stats",
        method: "GET",
      }),
    }),
    getAllCategoryCounts: builder.query({
      query: () => ({
        url: "/categoryCounts",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllStatsQuery, useGetAllCategoryCountsQuery } =
  allStatsApi;
