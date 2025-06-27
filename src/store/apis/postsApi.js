import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const postsApi = createApi({
  reducerPath: "posts",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
  }),
  endpoints(builder) {
    return {
      // get all the posts
      fetchPosts: builder.query({
        query: () => {
          return {
            url: "/posts",
            method: "GET",
          };
        },
      }),
      //  create a new post
      addPost: builder.mutation({
        query: (post) => {
          return {
            url: "/posts",
            method: "POST",
            body: post,
          };
        },
      }),
    };
  },
});

export const { useFetchPostsQuery, useAddPostMutation } = postsApi;
export { postsApi };
