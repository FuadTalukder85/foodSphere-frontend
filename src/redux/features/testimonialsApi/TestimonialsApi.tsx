import { baseApi } from "../../api/baseApi";

const testimonialsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postTestimonials: builder.mutation({
      query: (postTestimonials) => ({
        url: "/create-testimonial",
        method: "POST",
        body: postTestimonials,
      }),
    }),

    getTestimonials: builder.query({
      query: () => ({
        url: "/testimonials",
        method: "GET",
      }),
    }),
  }),
});
export const { usePostTestimonialsMutation, useGetTestimonialsQuery } =
  testimonialsApi;
