import "./App.css";
import DashBoard from "./DashBoard/DashBoard";
import DropDown from "./DropDown/DropDown";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/grid",
    element: <DashBoard />,
  },
  {
    path: "/dropdown",
    element: <DropDown />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
