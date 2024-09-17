import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Header from "../components/Header";

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
            </>
          ),
          children: [{ index: true, element: <Home /> }],
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ])}
    />
  );
};

export default Router;
