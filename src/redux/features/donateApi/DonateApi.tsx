import { baseApi } from "../../api/baseApi";

const donateApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postDonate: builder.mutation({
      query: (postComment) => ({
        url: "/donate",
        method: "POST",
        body: postComment,
      }),
    }),

    getDonate: builder.query({
      query: () => ({
        url: "/donate",
        method: "GET",
      }),
    }),
  }),
});
export const { usePostDonateMutation, useGetDonateQuery } = donateApi;
