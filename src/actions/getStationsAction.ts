import type {
  AllGasStationResponse,
  GasStationResponse,
} from "@/interfaces/gas_station.interface";
import type { Pagination } from "@/interfaces/pagination";
import { gasapi } from "@/lib/axios";

export const getGasStationAction = async (
  location: number[]
): Promise<GasStationResponse> => {
  const { data } = await gasapi.post<GasStationResponse>(`/location/coords/`, {
    location,
  });

  return data;
};

export const getAllGasStaionAction = async (
  pagination?: Pagination
): Promise<AllGasStationResponse> => {
  const endpoint = "/zones";

  if (pagination?.page && pagination?.search) {
    endpoint.concat(`?page=${pagination.page}&search=${pagination.search}`);
  } else if (pagination?.page) {
    endpoint.concat(`?page=${pagination.page}`);
  } else if (pagination?.search) {
    endpoint.concat(`?search=${pagination.search}`);
  }

  const { data } = await gasapi.get<AllGasStationResponse>(endpoint);

  return data;
};
