import type { FC } from "react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { BiWorld } from "react-icons/bi";
import { GrMapLocation } from "react-icons/gr";
import { FaVoteYea } from "react-icons/fa";
import { usefiltersStore, type FilterState } from "@/store/filters";
interface FiltersProps {}
const Filters: FC<FiltersProps> = ({}) => {
  const { setType, type } = usefiltersStore();

  const setFilterType = (type: FilterState) => {
    setType(type);
  };

  return (
    <ToggleGroup
      type="single"
      size="lg"
      className=" md:w-[500px]   flex-col  w-full md:flex-row"
      variant="default"
    >
      <ToggleGroupItem
        value="bold"
        className={`w-full text-md px-2 data-[state=on]:text-primary-foreground  data-[state=on]:bg-primary cursor-pointer ${
          type == "location" ? "text-primary-foreground  bg-primary" : ""
        } `}
        variant="default"
        size="lg"
        aria-label="Toggle bold"
        onClick={() => setFilterType("location")}
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
        onClick={() => setFilterType("all")}
        className={`w-full text-md px-2 data-[state=on]:text-primary-foreground  data-[state=on]:bg-primary cursor-pointer ${
          type == "all" ? "text-primary-foreground  bg-primary" : ""
        } `}
      >
        <BiWorld />
        Todas
      </ToggleGroupItem>
      <ToggleGroupItem
        size={"lg"}
        variant="default"
        value="strikethrough"
        onClick={() => setFilterType("top")}
        aria-label="Toggle strikethrough"
        className={`w-full text-md px-2 data-[state=on]:text-primary-foreground  data-[state=on]:bg-primary cursor-pointer ${
          type == "top" ? "text-primary-foreground  bg-primary" : ""
        } `}
      >
        <FaVoteYea />
        Mejor votadas
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

export default Filters;
