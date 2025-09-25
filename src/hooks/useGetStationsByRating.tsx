import { getGaSationByRatingAction } from "@/actions/getStationsAction";
import { useQuery } from "@tanstack/react-query";

const useGetStationsByRating = () => {
  const { data, error, isPending } = useQuery({
    queryKey: ["gas_station_by_ratings"],
    queryFn: getGaSationByRatingAction,
  });

  return {
    data,
    error,
    isPending,
  };
};
export default useGetStationsByRating;
