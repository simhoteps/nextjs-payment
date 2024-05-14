export interface ILogin {
  message: string;
  token: string;
  user: IUser;
}

export interface IUser {
  _id: string;
  email: string;
  code: string;
  expireDate: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IPackageType {
  _id: string;
  imagePath: string;
  name: string;
  details: string[];
  tags: string[];
  amount: number;
  currency: string;
  moreInformation: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ICreditCardForm {
  cardHolderName: string;
  cardNumber: string;
  expireDate: string;
  cvv: string;
}


export interface IPayment {
  packageIds: string[];
  cardNumber: number;
  cardHolderName:string
  expireDate: string
  cvv: string
  totalAmount:number
  currency: string
}


