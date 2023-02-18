import Navbar from "../Navbar/navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-col">
      <Navbar></Navbar>
      <Outlet />
    </div>
  );
}

export default Layout;
