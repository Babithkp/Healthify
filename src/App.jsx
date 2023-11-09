import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import AdminLogin from "./pages/AdminLogin";
import CreateId from "./pages/CreateId";
import Body from "./components/Body";
import AdminLogined from "./components/AdminLogined";
import Reports from "./components/Reports";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/adminLogin",
        element: <AdminLogin />,
      },
      {
        path: "/createID",
        element: <CreateId />,
      },
      {
        path: "/reports",
        element:<Reports/>
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
