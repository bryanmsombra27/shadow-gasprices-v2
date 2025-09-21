import type { FC } from "react";
import { RouterProvider } from "react-router";
import { AppRouter } from "./router/router";
import { Toaster } from "sonner";

interface AppProps {}
const App: FC<AppProps> = ({}) => {
  return (
    <>
      <Toaster
        position="top-right"
        duration={1500}
      />
      <RouterProvider router={AppRouter} />
    </>
  );
};

export default App;
