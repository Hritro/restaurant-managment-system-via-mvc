import {
  createBrowserRouter,
}from "react-router";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home";
import Login from "./pages/Login";
import SignUp from "./pages/signUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        }
    ]
  },
]);