export interface GasStationResponse {
  places: Place[];
  message: string;
}

export interface Place {
  place_id: string;
  name: string;
  cre_id: string;
  latitude: number;
  longitude: number;
  price_id: null | string;
  price_place_id: null | string;
  regular: number | null;
  premium: number | null;
  diesel: null;
  distance: number;
}
export interface AllGasStationResponse {
  gas_stations: GasStation[];
  count: number;
  totalPages: number;
  page: number;
}

export interface GasStation {
  id: string;
  name: string;
  place_id: string;
  cre_id: string;
  latitude: number;
  longitude: number;
  prices: Price[];
}

export interface Price {
  id: string;
  regular: number;
  premium: number;
  diesel: number | null;
  place_id: string;
}
export interface GasStationByRatingResponse {
  stations: Station[];
}

export interface Station {
  name: string;
  place_id: string;
  regular: number | null;
  premium: number;
  diesel: number | null;
  avg_rating: string;
}
