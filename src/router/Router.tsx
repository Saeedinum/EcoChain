import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"

import Home from "../pages/home/Home"
import NotFound from "../pages/404/NotFound"
import Header from "../components/Header"
import Footer from "@/components/Footer"
import Learn from "@/pages/learn/Learn"
import Login from "@/feature/auth/pages/Login"
import SignUp from "@/feature/auth/pages/SignUp"

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
          children: [
            {
              index: true,
              element: (
                <>
                  <Home /> <Footer />
                </>
              ),
            },
            {
              path: "learn/:id?",
              element: <Learn />,
            },
            {
              path: "*",
              element: <NotFound />,
            },
          ],
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
      ])}
    />
  )
}

export default Router
