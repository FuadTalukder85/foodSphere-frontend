import { baseApi } from "../../api/baseApi";

const leatherboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLeatherboard: builder.query({
      query: () => ({
        url: "/total-quantity-by-user",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetLeatherboardQuery } = leatherboardApi;
