import type { FC } from "react";
import {
  Table,
  TableBody,
  //   TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Station } from "@/interfaces/gas_station.interface";
import { GrMapLocation } from "react-icons/gr";
import { FaStar } from "react-icons/fa";
interface GasStationRatingTableProps {
  gasStations: Station[];
}
const GasStationRatingTable: FC<GasStationRatingTableProps> = ({
  gasStations,
}) => {
  return (
    <Table className="px-20">
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          {/* <TableHead className="w-[100px]">id</TableHead> */}
          <TableHead className="text-left w-[100px]">Nombre</TableHead>
          <TableHead className="text-center">Diesel</TableHead>
          <TableHead className="text-center">Premium</TableHead>
          <TableHead className="text-center">Regular</TableHead>
          <TableHead className="text-center">Calificación</TableHead>
          <TableHead className="text-center">Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {gasStations.map((station) => (
          <TableRow key={station.place_id}>
            {/* <TableCell className="font-medium">{station.cre_id}</TableCell> */}

            <TableCell className="font-medium w-100 ">{station.name}</TableCell>
            <TableCell className="text-center">
              {station.diesel ? station.diesel : "N/A"}
            </TableCell>
            <TableCell className="text-center">
              {" "}
              {station.premium ?? "N/A"}
            </TableCell>
            <TableCell className="text-center">
              {station.regular ?? "N/A"}
            </TableCell>
            <TableCell className="text-center ">
              <div className="flex items-center gap-2 justify-center">
                <FaStar
                  size={24}
                  color="#c8cb25"
                />
                <span>{station.avg_rating}</span>
              </div>
            </TableCell>

            <TableCell className="text-center flex justify-center gap-8">
              <GrMapLocation
                size={24}
                className="cursor-pointer"
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default GasStationRatingTable;
