export default interface User {
  // 1. Typage des propriétés d'un user.
  _id?: string;
  name?: string;
  email?: string;
  password?: string;
  city?: string;
  state?: string;
  country?: string;
  occupation?: string;
  phoneNumber?: string;
  transactions?: Array<string>;
  role?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
