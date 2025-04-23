export type SignInDto = {
  email: string;
  password: string;
};

export type SignIn = {
  access_token: string;
  sub: number;
  email?: string;
  name: string;
};

export type Session = {
  user: SignIn
  expires: Date
}
