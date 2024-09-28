import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom"

import Home from "@/pages/home/Home"
import NotFound from "@/pages/404/NotFound"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Login from "@/feature/auth/pages/Login"
import SignUp from "@/feature/auth/pages/SignUp"
import Forget from "@/feature/auth/pages/Forget"
import Learn from "@/feature/learn/pages/Learn"

import { Toaster } from "@/components/ui/toaster"
import { useAppSelector } from "@/store/hooks"
import Quiz from "@/feature/learn/pages/Quiz"

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
              path: "learn/:id/quiz",
              element: <Quiz />,
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
          element: auth.id ? <Navigate to={"/"} /> : <Forget />,
        },
      ])}
    />
  )
}

export default Router
