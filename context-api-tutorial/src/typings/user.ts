export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  wsbsite: string;
  company: Company;
};

export type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};
export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

export type Geo = {
  lat: string;
  lng: string;
};

export type Data<T> = {
  isLoading: boolean;
  data: null | T;
  error: null | Error;
};

export type userReducerType = {
  users: Data<Array<User>>;
  user: Data<User>;
};

export type UserActionString =
  | "GET_USERS"
  | "GET_USERS_SUCCESS"
  | "GET_USERS_FAILURE"
  | "GET_USER"
  | "GET_USER_SUCCESS"
  | "GET_USER_FAILURE";

export type userActionType = {
  type: UserActionString;
  data?: null | User | Array<User>;
  error?: null | Error;
};
