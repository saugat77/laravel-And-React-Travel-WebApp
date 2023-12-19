import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import User from "./views/Users";
import NotFound from "./views/NotFound";
import DashboardLayouts from "./components/Layouts/DashboardLayouts";
import GuestLayout from "./components/Layouts/GuestLayout";
import Dashboard from "./views/dashboard";
import App from "./App";
import LandingLayout from "./components/Layouts/LandingLayout";
const router = createBrowserRouter([
  {
    path: '/admin',
    element: <DashboardLayouts />,
    children: [
      {
        path: '/admin/users',
        element: <User />
      },
      {
        path: '/admin/dashboard',
        element: <Dashboard />
      },
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/',
    element: <LandingLayout />
  },
  {
    path: '*',
    element: <NotFound />
  }
])
export default router;
