import React, { useContext } from "react";
import Signin from "./Signin";
import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Upload from "./Upload";
import { conText } from "./context/centralState";

const Router = () => {
  const {username} = useContext(conText);
  return (
    <Routes>
      <Route
        path="/"
        element={username ? <DashboardLayout /> : <Navigate to="/login" />}
      >
        <Route path="/" element={<Navigate to="/upload"/>} />
        <Route path="/upload" element={<Upload />} />
      </Route>
      <Route path="/" element={<MainLayout />}>
        <Route path="/login" element={<Signin />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Route>
    </Routes>
  );
};

export default Router;
