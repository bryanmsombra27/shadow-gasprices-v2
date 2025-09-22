export interface LoginForm {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  token: string;
}
