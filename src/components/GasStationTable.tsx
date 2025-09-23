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
import type { GasStation } from "@/interfaces/gas_station.interface";
import { GrMapLocation } from "react-icons/gr";
import CommentsRating from "./CommentsRating";

interface GasStationTableProps {
  gasStations: GasStation[];
}
const GasStationTable: FC<GasStationTableProps> = ({ gasStations }) => {
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
          <TableHead className="text-center">Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {gasStations.map((station) => (
          <TableRow key={station.place_id}>
            {/* <TableCell className="font-medium">{station.cre_id}</TableCell> */}

            <TableCell className="font-medium ">{station.name}</TableCell>
            {station.prices.length === 0 && (
              <>
                <TableCell className="text-center">N/A</TableCell>
                <TableCell className="text-center">N/A</TableCell>
                <TableCell className="text-center">N/A</TableCell>
              </>
            )}

            {station.prices.map((price) => (
              <>
                <TableCell className="text-center">
                  {price.diesel ? price.diesel : "N/A"}
                </TableCell>
                <TableCell className="text-center">
                  {" "}
                  {price.premium ?? "N/A"}
                </TableCell>
                <TableCell className="text-center">
                  {price.regular ?? "N/A"}
                </TableCell>
              </>
            ))}

            <TableCell className="text-center flex justify-center gap-8">
              <GrMapLocation
                size={24}
                className="cursor-pointer"
              />

              {/* <CommentsRating
                place={station}
                key={station.cre_id}
              /> */}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default GasStationTable;
