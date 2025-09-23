import { getAllGasStaionAction } from "@/actions/getStationsAction";
import { useQuery } from "@tanstack/react-query";

const useAllGasStations = () => {
  const { data, error, isPending } = useQuery({
    queryKey: ["all_gas_stations"],
    queryFn: () => getAllGasStaionAction(),
  });

  return {
    data,
    error,
    isPending,
  };
};
export default useAllGasStations;
