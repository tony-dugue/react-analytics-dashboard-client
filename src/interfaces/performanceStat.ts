import Product from "./product";

export default interface PerformanceStat {
  sales: Array<{_id: string, userId: string, cost: string, products: Product[]}>;
  user?: {
    _id?: string;
    affiliateStats: {
      _id?: string;
      userId: string;
      affiliateSales: Array<string>;
    };
    city?: string;
    country?: string;
    createdAt?: Date;
    email?: string;
    name?: string;
    updatedAt?: Date;
    occupation?: string;
    password?: string;
    phoneNumber?: string;
    role?: string;
    state?: string;
    transactions?: Array<string>;
  }
}
