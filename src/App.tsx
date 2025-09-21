import type { FC } from "react";
import { RouterProvider } from "react-router";
import { AppRouter } from "./router/router";
import { Toaster } from "sonner";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// Create a client
const queryClient = new QueryClient();

interface AppProps {}
const App: FC<AppProps> = ({}) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Toaster
          position="top-right"
          duration={1500}
        />
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={AppRouter} />
      </QueryClientProvider>
    </>
  );
};

export default App;
