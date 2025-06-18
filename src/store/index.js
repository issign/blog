import { configureStore } from "@reduxjs/toolkit";
import { categoriesApi } from "./apis/categoriesApi";
import { subCategoriesApi } from "./apis/subCategoriesApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const rtkMiddlewares = [categoriesApi.middleware, subCategoriesApi.middleware];

export const store = configureStore({
  reducer: {
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [subCategoriesApi.reducerPath]: subCategoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(...rtkMiddlewares);
  },
});

setupListeners(store.dispatch);

export { useFetchCategoriesQuery } from "./apis/categoriesApi";
export { useFetchSubCategoriesQuery } from "./apis/subCategoriesApi";
