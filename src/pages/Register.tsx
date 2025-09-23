import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useRegister from "@/hooks/useRegister";
import type { LoginForm } from "@/interfaces/loginForm";
import type { ComponentProps, FC } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link } from "react-router";

interface RegisterForm extends LoginForm {
  confirm_password: string;
}

interface RegisterProps extends ComponentProps<"form"> {
  isPage?: boolean;
}

const Register: FC<RegisterProps> = ({
  isPage = true,
  className,
  ...props
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterForm>();
  const { registerAccount } = useRegister();

  const onSubmit: SubmitHandler<RegisterForm> = (data) => {
    registerAccount({
      email: data.email,
      password: data.password,
    });
  };
  const password = watch("password"); // 👈 observar el valor de "password"

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`p-10 gap-5 w-[500px] flex flex-col border-2  rounded-3xl justify-center mx-auto  shadow-lg ${className} ${
          isPage ? "mt-20" : ""
        } `}
        {...props}
      >
        <h1 className="text-center font-bold text-2xl ">Registrate</h1>
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
        <div>
          <Input
            placeholder="Confirma tu contraseña"
            type="password"
            {...register("confirm_password", {
              required: true,
              minLength: 6,
              validate: (value) =>
                value === password || "Las contraseñas no coinciden",
            })}
          />
          {errors.confirm_password && (
            <span className="text-sm text-red-500 font-semibold mt-3">
              {errors.confirm_password.message ||
                "Las contraseñas no coinciden"}
            </span>
          )}
        </div>
        <Button
          type="submit"
          variant="default"
        >
          Registrarse
        </Button>{" "}
        <div className="flex  gap-5 items-center flex-end w-full mt-5">
          <span>¿Ya tienes una cuenta?</span>
          <Link to="/login">
            <Button
              type="button"
              variant="default"
            >
              Inicia Sesion
            </Button>{" "}
          </Link>
        </div>
      </form>
    </>
  );
};

export default Register;
