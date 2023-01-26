import Transaction from "./transaction";

export default class DashboardStat {
  monthlyData: Array<{ _id: string , month: string, totalSales: number, totalUnits: number }> = [];
  salesByCategory?: any;
  thisMonthStats?: { _id: string, month: string, totalSales: number, totalUnits: number };
  todayStats?: { _id: string, date: Date, totalSales: number, totalUnits: number };
  totalCustomers: number = 0;
  transactions: Transaction[] = [];
  yearlySalesTotal: number = 0;
  yearlyTotalSoldUnits: number = 0;
}





