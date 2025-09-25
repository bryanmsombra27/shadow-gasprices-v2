import useAllGasStations from "@/hooks/useAllGasStations";
import { useState, type FC } from "react";
import { CustomAlert, Spinner } from "@/components";
import GasStationTable from "./GasStationTable";
import CustomPagination from "./CustomPagination";
interface GasStationListProps {}
const GasStationList: FC<GasStationListProps> = ({}) => {
  const [page, setPage] = useState<number>(1);
  const [startPagination, setStartPagination] = useState<number>(0);
  const { data, error, isPending } = useAllGasStations({ page });

  if (isPending) return <Spinner />;

  if (error)
    return (
      <CustomAlert
        content="No fue posible cargar las gasolineras"
        title="Error "
      />
    );
  console.log(data, "GAS STATIONS RESPONSE");
  const handlePagination = (value: number) => {
    setPage(value);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-10">
        Todas las gasolineras disponibles
      </h1>
      {data && (
        <>
          <GasStationTable gasStations={data.gas_stations} />
          <CustomPagination
            totalPages={data.totalPages}
            handlePage={handlePagination}
            page={page}
            startPagination={startPagination}
            setStartPagination={setStartPagination}
          />
        </>
      )}
    </>
  );
};

export default GasStationList;
