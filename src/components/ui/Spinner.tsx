import type { FC } from "react";
import "./spinner.css";
interface SpinnerProps {}
const Spinner: FC<SpinnerProps> = ({}) => {
  return <span className="loader"></span>;
};

export default Spinner;
