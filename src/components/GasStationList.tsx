import useAllGasStations from "@/hooks/useAllGasStations";
import type { FC } from "react";
import { CustomAlert, Spinner } from "@/components";
import GasStationTable from "./GasStationTable";
interface GasStationListProps {}
const GasStationList: FC<GasStationListProps> = ({}) => {
  const { data, error, isPending } = useAllGasStations();

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
        Todas las gasolineras disponibles
      </h1>
      {data && <GasStationTable gasStations={data.gas_stations} />}
    </>
  );
};

export default GasStationList;
