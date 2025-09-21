import useGasStations from "@/hooks/useGasStations";
import { useEffect, type FC } from "react";
import { CustomAlert, CustomTable, Spinner } from "@/components";

interface GasStationListByLocationProps {
  location: number[];
}
const GasStationListByLocation: FC<GasStationListByLocationProps> = ({
  location,
}) => {
  const { getStationsByLocation } = useGasStations();
  const { data, isPending, error, mutateAsync } = getStationsByLocation;

  useEffect(() => {
    console.log("ENTRA", location);
    if (location.length > 0) {
      console.log("ENTRA", location);

      mutateAsync(location);
    }
  }, [location, mutateAsync]);

  if (isPending) return <Spinner />;

  if (error)
    return (
      <CustomAlert
        content="No fue posible cargar las gasolineras"
        title="Error "
      />
    );
  console.log(data, "GAS STATIONS RESPONSE");

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-10">
        Gasolineras cerca de ti
      </h1>
      {data && <CustomTable gasStations={data?.places!} />}
    </>
  );
};

export default GasStationListByLocation;
