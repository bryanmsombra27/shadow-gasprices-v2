import { CurrentLocation } from "@/components";
import GasStationListByLocation from "@/components/GasStationListByLocation";
import { uselocationStore } from "@/store/location";
import type { FC } from "react";

interface HomeProps {}
const Home: FC<HomeProps> = ({}) => {
  const { location } = uselocationStore();

  console.log(location, "LOCATION ACTUAL");

  return (
    <>
      <div className="flex my-10 mx-auto justify-end container px-20">
        <CurrentLocation />
      </div>
      <main className="container mx-auto px-20">
        <GasStationListByLocation location={location} />
      </main>
    </>
  );
};

export default Home;
