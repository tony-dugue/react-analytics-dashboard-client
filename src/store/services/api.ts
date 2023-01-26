import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import PerformanceStat from "../../models/performanceStat";
import DashboardStat from "../../models/dashboardStat";
import Geography from "../../models/geography";
import OverallStat from "../../models/overallStat";
import Product from "../../models/product";
import Transaction from "../../models/transaction";
import User from "../../models/user";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "Products",
    "Customers",
    "Transactions",
    "Geography",
    "Sales",
    "Admins",
    "Performance",
    "Dashboard",
  ],

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

    getAdmins: build.query<User[], void>({
      query: () => "management/admins",
      providesTags: ["Admins"],
    }),

    getUserPerformance: build.query<PerformanceStat, string>({
      query: (id) => `management/performance/${id}`,
      providesTags: ["Performance"],
    }),

    getDashboard: build.query<DashboardStat, void>({
      query: () => "general/dashboard",
      providesTags: ["Dashboard"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetGeographyQuery,
  useGetSalesQuery,
  useGetAdminsQuery,
  useGetUserPerformanceQuery,
  useGetDashboardQuery,
} = api;
