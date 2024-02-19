import { baseApi } from "../../api/api";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    users: builder.mutation({
      query: (users) => ({
        url: "/api/v1/register",
        method: "POST",
        body: users,
      }),
    }),
  }),
});
export const { useUsersMutation } = authApi;
