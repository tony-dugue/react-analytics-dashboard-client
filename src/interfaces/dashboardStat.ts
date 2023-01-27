import Transaction from "./transaction";

export default interface DashboardStat {
  monthlyData: Array<{ _id: string , month: string, totalSales: number, totalUnits: number }>;
  salesByCategory?: any;
  thisMonthStats?: { _id: string, month: string, totalSales: number, totalUnits: number };
  todayStats?: { _id: string, date: Date, totalSales: number, totalUnits: number };
  totalCustomers: number;
  transactions: Transaction[];
  yearlySalesTotal: number;
  yearlyTotalSoldUnits: number;
}





