import type { FC } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
interface LoginProps {}
const Login: FC<LoginProps> = ({}) => {
  return (
    <>
      <form className="p-10 gap-5 w-[500px] flex flex-col border-2  rounded-3xl justify-center mx-auto mt-20 shadow-lg">
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
