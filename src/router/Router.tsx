import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom"

import Home from "../pages/home/Home"
import NotFound from "../pages/404/NotFound"
import Header from "../components/Header"
import Footer from "@/components/Footer"
import Learn from "@/pages/learn/Learn"
import Login from "@/feature/auth/pages/Login"
import SignUp from "@/feature/auth/pages/SignUp"
import Forget from "@/feature/auth/pages/Forget"

import { Toaster } from "@/components/ui/toaster"
import { useAppSelector } from "@/store/hooks"

const Router = () => {
  const auth = useAppSelector((state) => state.auth)
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: (
            <>
              <Header />
              <Outlet />
              <Toaster />
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
          element: auth.token ? <Navigate to={"/"} /> : <Login />,
        },
        {
          path: "signup",
          element: auth.id ? <Navigate to={"/"} /> : <SignUp />,
        },
        {
          path: "forgetPassword",
          element: auth.token ? <Navigate to={"/"} /> : <Forget />,
        },
      ])}
    />
  )
}

export default Router
