import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Geography from "../../models/geography";
import OverallStat from "../../models/OverallStat";
import Product from "../../models/product";
import Transaction from "../../models/transaction";
import User from "../../models/user";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: ["User", "Products", "Customers", "Transactions", "Geography", "Sales"],
  endpoints: (build) => ({
    getUser: build.query<User, string>({
      query: (id: string) => `general/user/${id}`,
      providesTags: ["User"],
    }),

    getProducts: build.query<Product[], void>({
      query: () => "client/products",
      providesTags: ["Products"],
    }),

    getCustomers: build.query<User[], void>({
      query: () => "client/customers",
      providesTags: ["Customers"],
    }),

    getTransactions: build.query<
      { total: number; transactions: Transaction[] },
      { page: number; pageSize: number; sort: string; search: string }
    >({
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/transactions",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Transactions"],
    }),

    getGeography: build.query<Geography[], void>({
      query: () => "client/geography",
      providesTags: ["Geography"],
    }),

    getSales: build.query<OverallStat, void>({
      query: () => "sales/sales",
      providesTags: ["Sales"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetGeographyQuery,
  useGetSalesQuery
} = api;
