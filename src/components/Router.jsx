import React from "react";
import Signin from "./Signin";
import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import DashboardLayout from "./DashboardLayout";
import Upload from "./Upload";

const Router = ({ username }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={true ? <DashboardLayout /> : <Navigate to="/login" />}
      >
        <Route path="upload" element={<Upload />} />
      </Route>
      <Route path="/" element={<MainLayout />}>
        <Route path="login" element={<Signin />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Route>
    </Routes>
  );
};

export default Router;
