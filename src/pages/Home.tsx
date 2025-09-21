import { CurrentLocation } from "@/components";
import type { FC } from "react";

interface HomeProps {}
const Home: FC<HomeProps> = ({}) => {
  return (
    <>
      <div className="flex my-10 mx-auto justify-end container px-20">
        <CurrentLocation />
      </div>
    </>
  );
};

export default Home;
