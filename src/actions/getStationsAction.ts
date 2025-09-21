import type { GasStationResponse } from "@/interfaces/gas_station.interface";
import { gasapi } from "@/lib/axios";

export const getGasStationAction = async (
  location: number[]
): Promise<GasStationResponse> => {
  const { data } = await gasapi.post<GasStationResponse>(`/location/coords/`, {
    location,
  });

  return data;
};
