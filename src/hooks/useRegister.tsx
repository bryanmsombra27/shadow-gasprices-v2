import { registerAction } from "@/actions/loginAction";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const useRegister = () => {
  const navigate = useNavigate();

  const { mutateAsync } = useMutation({
    mutationKey: ["register"],
    mutationFn: registerAction,
    onSuccess: () => {
      toast.success("Registro exitoso!");
      navigate("/");
    },
    onError: () => {
      toast.error("No fue posible realizar el registro");
    },
  });

  return {
    registerAccount: mutateAsync,
  };
};
export default useRegister;
