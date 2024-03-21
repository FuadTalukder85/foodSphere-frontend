import { baseApi } from "../../api/baseApi";

const volunteerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postVolunteer: builder.mutation({
      query: (postVolunteer) => ({
        url: "/volunteer",
        method: "POST",
        body: postVolunteer,
      }),
    }),

    getVolunteer: builder.query({
      query: () => ({
        url: "/volunteer",
        method: "GET",
      }),
    }),
  }),
});
export const { usePostVolunteerMutation, useGetVolunteerQuery } = volunteerApi;
