export default class User {
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

  // 2. Définition des valeurs par défaut des propriétés d'un user.
  constructor(
    _id: string,
    name: '',
    email: '',
    password: '',
    city: '',
    state: '',
    country: '',
    occupation: '',
    phoneNumber: '',
    transactions: [],
    role: "admin",
    createdAt: Date = new Date(),
    updatedAt: Date = new Date()
  ) {
    // 3. Initialisation des propriétés d'un user.
    this._id = _id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.city = city;
    this.state = state;
    this.country = country;
    this.occupation = occupation;
    this.phoneNumber = phoneNumber;
    this.transactions = transactions;
    this.role = role;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
