export default interface OverallStat {
  _id?: String;
  totalCustomers?: Number;
  yearlySalesTotal?: Number;
  yearlyTotalSoldUnits?: Number;
  year?: Number;
  monthlyData: Array<{ month: string, totalSales: number, totalUnits: number }>;
  dailyData: Array<{ date: string, totalSales: number, totalUnits: number }>;
  salesByCategory?: any;
  createdAt?: Date;
  updatedAt?: Date;
}

