import { api } from "./api";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: (params) => ({
        url: "/products?limit=8",
        params,
      }),
      providesTags: ["Product"],
    }),
    getDeteilProduct: build.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetProductsQuery, useGetDeteilProductQuery } = productApi;
