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
        query: (subCategory) => {
          return {
            url: "/posts",
            params: {
                subCategoryID: subCategory.id
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchPostsQuery } = postsApi;
export { postsApi };
