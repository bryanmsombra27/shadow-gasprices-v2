import { getGasStationAction } from "@/actions/getStationsAction";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const useGasStations = () => {
  const mutation = useMutation({
    mutationKey: ["gas_station_by_location"],
    mutationFn: getGasStationAction,
    onError: () => {
      toast.error(
        "No fue posible obtener las gasolineras por esas coordenadas"
      );
    },
  });

  return {
    getStationsByLocation: mutation,
  };
};

export default useGasStations;
