import { createBrowserRouter } from "react-router-dom";
import Userlayout from "../Components/Block/Layout/Userlayout";
import HomeScreen from "../Pages/User/HomeScreen";
import AdminLayout from "../Components/Block/Layout/AdminLayout";
import Dashboard from "../Pages/Admin/Dashboard";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Userlayout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
]);
