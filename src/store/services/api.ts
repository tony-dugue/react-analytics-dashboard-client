import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Geography from "../../models/geography";
import Product from "../../models/product";
import User from "../../models/user";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
<<<<<<< HEAD
  tagTypes: ["User", "Products", "Customers", "Transactions", "Geography"],
=======
  tagTypes: ["User", "Products", "Customers"],
>>>>>>> parent of e32dabd (Added Transactions page content with datatable + server-side pagination & custom toolbar)
  endpoints: (build) => ({

    getUser: build.query<User, string>({
      query: (id: string) => `general/user/${id}`,
      providesTags: ["User"]
    }),

    getProducts: build.query<Product[], void>({
      query: () => "client/products",
      providesTags: ["Products"]
    }),

    getCustomers: build.query<User[], void>({
      query: () => "client/customers",
      providesTags: ["Customers"]
    })

<<<<<<< HEAD
    getTransactions: build.query<{ total: number, transactions: Transaction[] }, { page: number, pageSize: number, sort: string, search: string }>({
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/transactions",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Transactions"],
    }),

    getGeography: build.query<Geography[], void>({
      query: () => "client/geography",
      providesTags: ["Geography"]
    })
  })
})

export const { useGetUserQuery, useGetProductsQuery, useGetCustomersQuery, useGetTransactionsQuery, useGetGeographyQuery } = api;
=======
  })
})

export const { useGetUserQuery, useGetProductsQuery, useGetCustomersQuery } = api;
>>>>>>> parent of e32dabd (Added Transactions page content with datatable + server-side pagination & custom toolbar)

