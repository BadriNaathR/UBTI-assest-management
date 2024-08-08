import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../layout/Main";
import EmployeeForm from "../components/AddNew";
import Home from "../pages/home/Homepage";
import Main1 from "../sample/main1";
import Get from "../sample/get1";
import EmployeeDetailsPage from "../Employee/EmployeeDetailsPage";

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
        },
        {
          path : "/sample",
          element : <Main1/>
        },
        {
          path : "/get",
          element : <Get/>
        },
        {
          path : "/employee/:id",
          element : <EmployeeDetailsPage/>
        }
      ]
    },
]);

export default router;
