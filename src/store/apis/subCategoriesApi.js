import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const subCategoriesApi = createApi({
  reducerPath: "subCategories",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
  }),
  endpoints(builder) {
    return {
      // get all sub-categories
      fetchAllSubCategories: builder.query({
        query: () => {
          return {
            url: "/sub-categories",
            method: "GET",
          };
        },
      }),
      // get the specific sub-categories
      fetchSubCategories: builder.query({
        query: (category) => {
          return {
            url: "/sub-categories",
            params: {
              categoryID: category.id,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchAllSubCategoriesQuery, useFetchSubCategoriesQuery } =
  subCategoriesApi;
export { subCategoriesApi };
