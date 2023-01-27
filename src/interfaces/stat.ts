export default interface Stat {
  _id?: string;
  productId?: string;
  yearlySalesTotal?: number;
  yearlyTotalSoldUnits?: number;
  year?: number;
  monthlyData?: [
    {
      month?: string;
      totalSales?: number;
      totalUnits?: number;
    }
  ];
  dailyData?: [
    {
      date?: string;
      totalSales?: number;
      totalUnits?: number;
    }
  ];
}
