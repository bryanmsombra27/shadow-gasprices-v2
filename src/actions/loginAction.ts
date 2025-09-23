import type {
  LoginForm,
  LoginResponse,
  RegisterResponse,
} from "@/interfaces/loginForm";
import { gasapi } from "@/lib/axios";

export const loginAction = async (body: LoginForm): Promise<LoginResponse> => {
  const { data } = await gasapi.post<LoginResponse>("/auth/login", {
    email: body.email,
    password: body.password,
  });
  return data;
};

export const registerAction = async (
  body: LoginForm
): Promise<RegisterResponse> => {
  const { data } = await gasapi.post<RegisterResponse>("/auth/register", {
    email: body.email,
    password: body.password,
  });

  return data;
};
