import type { ComponentProps, FC } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
interface LoginProps extends ComponentProps<"form"> {
  isPage?: boolean;
}
const Login: FC<LoginProps> = ({ isPage = true, className, ...props }) => {
  return (
    <>
      <form
        className={`p-10 gap-5 w-[500px] flex flex-col border-2  rounded-3xl justify-center mx-auto  shadow-lg ${className} ${
          isPage ? "mt-20" : ""
        } `}
        {...props}
      >
        <h1 className="text-center font-bold text-2xl ">Inicia Sesión</h1>
        <Input
          name="email"
          placeholder="Ingresa tu email..."
          type="email"
        />
        <Input
          name="password"
          placeholder="Ingresa tu contraseña"
          type="password"
        />
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
