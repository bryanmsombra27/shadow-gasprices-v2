import { getAllGasStaionAction } from "@/actions/getStationsAction";
import type { Pagination } from "@/interfaces/pagination";
import { useQuery } from "@tanstack/react-query";

const useAllGasStations = (pagination?: Pagination) => {
  console.log(pagination?.page, "se envia");
  const { data, error, isPending } = useQuery({
    queryKey: ["all_gas_stations", pagination?.page],
    queryFn: () => getAllGasStaionAction(pagination),
  });

  return {
    data,
    error,
    isPending,
  };
};
export default useAllGasStations;
