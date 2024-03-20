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
  }),
});
export const { usePostVolunteerMutation } = volunteerApi;
