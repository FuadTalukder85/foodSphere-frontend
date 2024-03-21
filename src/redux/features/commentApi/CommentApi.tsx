import { baseApi } from "../../api/baseApi";

const commentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postComment: builder.mutation({
      query: (postComment) => ({
        url: "/comment",
        method: "POST",
        body: postComment,
      }),
    }),
  }),
});
export const { usePostCommentMutation } = commentApi;
