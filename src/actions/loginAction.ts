import type { LoginForm, LoginResponse } from "@/interfaces/loginForm";
import { gasapi } from "@/lib/axios";

export const loginAction = async (body: LoginForm): Promise<LoginResponse> => {
  const { data } = await gasapi.post<LoginResponse>("/auth/login", {
    email: body.email,
    password: body.password,
  });
  return data;
};
