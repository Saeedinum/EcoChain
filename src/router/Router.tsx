import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom"

import { Toaster } from "@/components/ui/toaster"
import { useAppSelector } from "@/store/hooks"

import NotFound from "@/pages/404/NotFound"
import Home from "@/pages/home/Home"
import Play from "@/pages/play/Play"

import Header from "@/components/Header"
import Footer from "@/components/Footer"

import GreenhouseGases from "@/feature/learn/pages/topics/GreenhouseGases"
import RenewableEnergy from "@/feature/learn/pages/topics/RenewableEnergy"
import AirQuality from "@/feature/learn/pages/topics/AirQuality"
import SeaLevels from "@/feature/learn/pages/topics/SeaLevels"
import WildFires from "@/feature/learn/pages/topics/WildFires"
import Water from "@/feature/learn/pages/topics/Water"
import Soil from "@/feature/learn/pages/topics/Soil"
import Discover from "@/pages/discover/Discover"
import SignUp from "@/feature/auth/pages/SignUp"
import Forget from "@/feature/auth/pages/Forget"
import Learn from "@/feature/learn/pages/Learn"
import Login from "@/feature/auth/pages/Login"
import Quiz from "@/feature/learn/pages/Quiz"
import Scenarios from "@/pages/senarios/Scenarios"

const Router = () => {
  const auth = useAppSelector(state => state.auth)
  console.log(auth)
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
                  <Home />
                  <Toaster />
                  <Footer />
                </>
              )
            },
            {
              path: "learn",
              element: <Learn />,
              children: [
                {
                  path: "air-quality",
                  element: <AirQuality />
                },
                {
                  path: "greenhouse-gases",
                  element: <GreenhouseGases />
                },
                {
                  path: "renewable-energy",
                  element: <RenewableEnergy />
                },
                {
                  path: "sea-levels",
                  element: <SeaLevels />
                },
                {
                  path: "soil",
                  element: <Soil />
                },
                {
                  path: "water",
                  element: <Water />
                },
                {
                  path: "wild-fires",
                  element: <WildFires />
                }
              ]
            },
            {
              path: "/scenarios",
              element: <Scenarios />
            },
            {
              path: "/play",
              element: <Play />
            },
            {
              path: "/discover/:id?",
              element: <Discover />
            },
            {
              path: "*",
              element: <NotFound />
            }
          ]
        },
        {
          path: "learn/:id/quiz",
          element: auth.token ? <Quiz /> : <Navigate to={"/login"} />
        },
        {
          path: "login",
          element: auth.token ? <Navigate to={"/"} /> : <Login />
        },
        {
          path: "signup",
          element: auth.id ? <Navigate to={"/"} /> : <SignUp />
        },
        {
          path: "forgetPassword",
          element: auth.id ? <Navigate to={"/"} /> : <Forget />
        }
      ])}
    />
  )
}

export default Router
