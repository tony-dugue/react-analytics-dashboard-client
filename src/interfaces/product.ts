import Stat from "./stat";

export default interface Product {
  _id?: string;
  name?: string;
  price?: number;
  description?: string;
  category?: string;
  rating?: number;
  supply?: number;
  createdAt?: Date;
  updatedAt?: Date;
  stat?: Stat[];
}
