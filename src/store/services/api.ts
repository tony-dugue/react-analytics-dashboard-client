import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Product from "../../models/product";
import User from "../../models/user";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: ["User", "Products"],
  endpoints: (build) => ({

    getUser: build.query<User, string>({
      query: (id: string) => `general/user/${id}`,
      providesTags: ["User"]
    }),

    getProducts: build.query<Product[], void>({
      query: () => "client/products",
      providesTags: ["Products"]
    })

  })
})

export const { useGetUserQuery, useGetProductsQuery } = api;

