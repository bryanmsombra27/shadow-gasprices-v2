import { getRatingAction } from "@/actions/createRatingAction";
import { useQuery } from "@tanstack/react-query";

const useGetRating = (gasStationId: string) => {
  const { data, error, isPending } = useQuery({
    queryKey: ["rating_by_user", gasStationId],
    queryFn: () => getRatingAction(gasStationId),
    enabled: gasStationId != "",
  });

  return {
    data,
    error,
    isPending,
  };
};
export default useGetRating;
