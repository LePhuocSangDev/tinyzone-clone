import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-12 gap-2">
        <Sidebar />

        <div className="col-span-12 lg:col-span-10 p-4 lg:p-0 bg-[#151515] ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
