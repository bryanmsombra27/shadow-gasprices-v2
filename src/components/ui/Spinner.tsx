import type { FC } from "react";
import "./spinner.css";
interface SpinnerProps {}
const Spinner: FC<SpinnerProps> = ({}) => {
  return (
    <div className="flex flex-center items-center w-full mx-auto h-screen">
      <span className="loader mx-auto"></span>
    </div>
  );
};

export default Spinner;
