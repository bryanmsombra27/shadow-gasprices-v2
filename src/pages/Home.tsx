import { Button } from "@/components/ui/button";
import type { FC } from "react";

interface HomeProps {}
const Home: FC<HomeProps> = ({}) => {
  return (
    <>
      <Button
        variant="default"
        className="cursor-pointer"
      >
        kesero
      </Button>
    </>
  );
};

export default Home;
