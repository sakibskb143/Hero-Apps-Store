import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installation/Installation";
import PageError from "../pages/PageError/PageError";
import AppDetails from "../pages/AppDetails/AppDetails";
import Loader from "../components/Loader/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <PageError />,
    children: [
      {
        index: true,
        loader: () => fetch("/softwareData.json"),
        Component: Home,
      },
      {
        path: "apps",
        loader: () => fetch("/softwareData.json"),
        Component: Apps,
      },
      {
        path: "/installation",
        loader: () => fetch("/softwareData.json"),
        Component: Installation,
      },
      {
        path:'/appDetails/:id',
         loader: () => fetch("/softwareData.json"),
        Component:AppDetails
      },
      {
        path: "*",
        Component: PageError,
      },
    ],
  },
]);

export default router;