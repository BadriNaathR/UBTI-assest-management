import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../layout/Main";
import EmployeeForm from "../components/AddNew";
import Home from "../pages/home/Homepage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children : [
        {
          path: "/",
          element: <Home/>
        },
        {
          path : "/assets",
          element : <EmployeeForm/>
        }
      ]
    },
]);

export default router;
