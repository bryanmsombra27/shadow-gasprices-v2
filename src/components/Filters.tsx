import type { FC } from "react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { BiWorld } from "react-icons/bi";
import { GrMapLocation } from "react-icons/gr";
import { FaVoteYea } from "react-icons/fa";
interface FiltersProps {}
const Filters: FC<FiltersProps> = ({}) => {
  return (
    <ToggleGroup
      type="single"
      size="lg"
      className=" w-[500px]    "
      variant="default"
    >
      <ToggleGroupItem
        value="bold"
        className="w-full text-md px-2 data-[state=on]:text-primary-foreground  data-[state=on]:bg-primary cursor-pointer"
        variant="default"
        size="lg"
        aria-label="Toggle bold"
      >
        <GrMapLocation
          size={24}
          className="cursor-pointer"
        />
        En mi ubicación
      </ToggleGroupItem>
      <ToggleGroupItem
        value="italic"
        size={"lg"}
        variant="default"
        aria-label="Toggle italic"
        className="w-full text-md px-2 data-[state=on]:text-primary-foreground  data-[state=on]:bg-primary cursor-pointer"
      >
        <BiWorld />
        Todas
      </ToggleGroupItem>
      <ToggleGroupItem
        size={"lg"}
        variant="default"
        value="strikethrough"
        aria-label="Toggle strikethrough"
        className="w-full text-md px-2 data-[state=on]:text-primary-foreground  data-[state=on]:bg-primary cursor-pointer"
      >
        <FaVoteYea />
        Mejor votadas
      </ToggleGroupItem>
    </ToggleGroup>
  );

  //   return (
  //     <div className="flex gap-6">
  //       <div className="flex items-center gap-1 bg-red-500 rounded-tl-lg rounded-bl-lg p-2">
  //         <GrMapLocation />
  //         <span>Mas cercanas</span>
  //       </div>
  //       <div className="flex items-center gap-1">
  //         <BiWorld />
  //         <span>Todas</span>
  //       </div>
  //       <div className="flex items-center gap-1">
  //         <FaVoteYea />
  //         <span>Mejor votadas</span>
  //       </div>
  //     </div>
  //   );
};

export default Filters;
