import type { FC } from "react";
import { RouterProvider } from "react-router";
import { AppRouter } from "./router/router";

interface AppProps {}
const App: FC<AppProps> = ({}) => {
  return (
    <>
      <RouterProvider router={AppRouter} />
    </>
  );
};

export default App;
