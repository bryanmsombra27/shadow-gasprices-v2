import { registerAction } from "@/actions/loginAction";
import { useauthStore } from "@/store/auth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const useRegister = () => {
  const navigate = useNavigate();
  const { setAuthState, setToken } = useauthStore();

  const { mutateAsync } = useMutation({
    mutationKey: ["register"],
    mutationFn: registerAction,
    onMutate: () => {
      setAuthState("authenticating");
    },
    onSuccess: (val) => {
      toast.success(val.message);
      setAuthState("autenthicated");
      setToken(val.token);

      navigate("/");
    },
    onError: () => {
      setAuthState("not-authenticated");
      toast.error("No fue posible realizar el registro");
    },
  });

  return {
    registerAccount: mutateAsync,
  };
};
export default useRegister;
