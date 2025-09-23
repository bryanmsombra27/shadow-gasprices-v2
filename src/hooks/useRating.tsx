import { createRatingAction } from "@/actions/createRatingAction";
import { useauthStore } from "@/store/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toast } from "sonner";

const useRating = () => {
  const { setToken, setAuthState } = useauthStore();
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: createRatingAction,
    mutationKey: ["rating"],
    onMutate: () => {},
    onSuccess: (rating) => {
      queryClient.invalidateQueries({
        queryKey: ["rating_by_user", rating.comment.gasStationId],
      });
      toast.success("Tu comentario fue realizado con exito!");
    },
    onError: (err: AxiosError) => {
      if (err.status == 401) {
        setToken("");
        setAuthState("not-authenticated");
        toast.error("Token ha expirado, inicia sesion nuevamente!");
        return;
      }

      toast.error("No fue posible realizar el comentario");
    },
  });

  return {
    createRating: mutateAsync,
  };
};
export default useRating;
