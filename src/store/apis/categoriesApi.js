import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const categoriesApi = createApi({
  reducerPath: "categories",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
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
