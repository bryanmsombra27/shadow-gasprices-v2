import useGetStationsByRating from "@/hooks/useGetStationsByRating";
import type { FC } from "react";
import Spinner from "./ui/Spinner";
import CustomAlert from "./CustomAlert";
import GasStationRatingTable from "./GasStationRatingTable";

interface GasStationListByRatingProps {}
const GasStationListByRating: FC<GasStationListByRatingProps> = ({}) => {
  const { data, error, isPending } = useGetStationsByRating();

  if (isPending) return <Spinner />;

  if (error)
    return (
      <CustomAlert
        content="No fue posible cargar las gasolineras"
        title="Error "
      />
    );

  return (
    data && (
      <>
        <h1 className="text-3xl font-bold text-center my-10">
          Top 10 de las gasolineras con mejor servicio
        </h1>
        <GasStationRatingTable gasStations={data.stations} />
      </>
    )
  );
};

export default GasStationListByRating;
