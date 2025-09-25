import { CurrentLocation, Filters } from "@/components";
import GasStationList from "@/components/GasStationList";
import GasStationListByLocation from "@/components/GasStationListByLocation";
import GasStationListByRating from "@/components/GasStationListByRating";
import { usefiltersStore } from "@/store/filters";
import { uselocationStore } from "@/store/location";
import type { FC } from "react";

interface HomeProps {}
const Home: FC<HomeProps> = ({}) => {
  const { location } = uselocationStore();
  const { type } = usefiltersStore();

  console.log(location, "LOCATION ACTUAL");

  return (
    <>
      <main className="container mx-auto md:px-20 p-5">
        <div className="flex justify-end">
          <Filters />
        </div>
        {type == "location" && <GasStationListByLocation location={location} />}
        {type == "all" && <GasStationList />}
        {type == "top" && <GasStationListByRating />}
      </main>
    </>
  );
};

export default Home;
