import type { ComponentProps, FC } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { LoginForm } from "@/interfaces/loginForm";
import useLogin from "@/hooks/useLogin";
interface LoginProps extends ComponentProps<"form"> {
  isPage?: boolean;
}

const Login: FC<LoginProps> = ({ isPage = true, className, ...props }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();
  const { login } = useLogin();

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    login({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`p-10 gap-5 w-[500px] flex flex-col border-2  rounded-3xl justify-center mx-auto  shadow-lg ${className} ${
          isPage ? "mt-20" : ""
        } `}
        {...props}
      >
        <h1 className="text-center font-bold text-2xl ">Inicia Sesión</h1>
        <div>
          <Input
            placeholder="Ingresa tu email..."
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-sm text-red-500 font-semibold mt-3">
              El campo es obligatorio
            </span>
          )}
        </div>
        <div>
          <Input
            placeholder="Ingresa tu contraseña"
            type="password"
            {...register("password", { required: true, minLength: 6 })}
          />
          {errors.password && (
            <span className="text-sm text-red-500 font-semibold mt-3">
              El campo es obligatorio
            </span>
          )}
        </div>
        <Button
          type="submit"
          variant="default"
        >
          Ingresar{" "}
        </Button>{" "}
        <div className="flex  gap-5 items-center flex-end w-full mt-5">
          <span>¿No tienes una cuenta?</span>
          <Button
            type="button"
            variant="default"
          >
            Registrate
          </Button>{" "}
        </div>
      </form>
    </>
  );
};

export default Login;
