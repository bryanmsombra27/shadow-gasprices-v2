import { createBrowserRouter } from "react-router";
import Home from "@/pages/Home";
import Favorites from "@/pages/Favorites";
import Login from "@/pages/Login";

export const AppRouter = createBrowserRouter([
  {
    path: "",
    element: <Home />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
