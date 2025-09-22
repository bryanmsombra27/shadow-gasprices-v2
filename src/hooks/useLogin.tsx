import { loginAction } from "@/actions/loginAction";
import { useauthStore } from "@/store/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const useLogin = () => {
  const { setAuthState, setToken } = useauthStore();

  const { mutateAsync } = useMutation({
    mutationFn: loginAction,
    mutationKey: ["login"],
    onMutate: () => {
      setAuthState("authenticating");
    },
    onSuccess: (val) => {
      toast.success(val.message);
      setToken(val.token);
      setAuthState("autenthicated");
    },
    onError: (err) => {
      console.log(err, "LOGIN ERROR");
      setAuthState("not-authenticated");
      toast.error(
        "No fue posible iniciar sesion, email o contraseña invalidos"
      );
    },
  });

  return {
    login: mutateAsync,
  };
};
export default useLogin;
