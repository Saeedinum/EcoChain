import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Home from "../pages/home/Home";
import NotFound from "../pages/404/NotFound";
import Header from "../components/Header";
import Footer from "@/components/Footer"

const Router = () => {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: (
            <>
              <Header />
              <Outlet />
              <Footer/>
            </>
          ),
          children: [{ index: true, element: <Home /> }],
        },
        {
          path: "*",
          element: <>
            <Header />
            <NotFound />
          </>
        },
      ])}
    />
  );
};

export default Router;
