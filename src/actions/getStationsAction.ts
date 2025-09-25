import type {
  AllGasStationResponse,
  GasStationByRatingResponse,
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
  let endpoint = "/zones";

  if (pagination?.page && pagination?.search) {
    endpoint = endpoint.concat(
      `?page=${pagination.page}&search=${pagination.search}`
    );
  }

  if (pagination?.page) {
    endpoint = endpoint.concat(`?page=${pagination.page}`);
  }

  if (pagination?.search) {
    endpoint = endpoint.concat(`?search=${pagination.search}`);
  }

  const { data } = await gasapi.get<AllGasStationResponse>(endpoint);

  return data;
};

export const getGaSationByRatingAction =
  async (): Promise<GasStationByRatingResponse> => {
    const { data } = await gasapi.get<GasStationByRatingResponse>(
      "/location/top"
    );

    return data;
  };
