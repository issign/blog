import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const pause = (duration) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, duration);
//   });
// };

const categoriesApi = createApi({
  reducerPath: "categories",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
    // For dev purpose to see loading skeleton
    // fetchFn: async (...args) => {
    //   await pause(10000);
    //   return fetch(...args);
    // },
  }),
  endpoints(builder) {
    return {
      // get all the categories
      fetchCategories: builder.query({
        query: () => {
          return {
            url: "/categories",
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchCategoriesQuery } = categoriesApi;
export { categoriesApi };
