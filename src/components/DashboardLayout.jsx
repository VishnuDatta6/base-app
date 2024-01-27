import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div className={`sm:w-5/6 float-right h-screen w-full ${isOpen ? '' : ''}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
