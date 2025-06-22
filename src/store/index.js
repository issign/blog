import { configureStore } from "@reduxjs/toolkit";
import { categoriesApi } from "./apis/categoriesApi";
import { subCategoriesApi } from "./apis/subCategoriesApi";
import { postsApi } from "./apis/postsApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const rtkMiddlewares = [
  categoriesApi.middleware,
  subCategoriesApi.middleware,
  postsApi.middleware,
];

export const store = configureStore({
  reducer: {
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [subCategoriesApi.reducerPath]: subCategoriesApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(...rtkMiddlewares);
  },
});

setupListeners(store.dispatch);

export { useFetchCategoriesQuery } from "./apis/categoriesApi";
export { useFetchSubCategoriesQuery } from "./apis/subCategoriesApi";
export { useFetchPostsQuery } from "./apis/postsApi";
