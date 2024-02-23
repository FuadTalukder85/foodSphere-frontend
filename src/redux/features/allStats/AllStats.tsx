import { baseApi } from "../../api/baseApi";

const allStatsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllStats: builder.query({
      query: () => ({
        url: "/all-stats",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllStatsQuery } = allStatsApi;
