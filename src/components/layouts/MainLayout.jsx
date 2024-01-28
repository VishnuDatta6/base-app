import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { conText } from "../context/centralState";

const MainLayout = () => {
  const {username} = useContext(conText);
  return <div>{username ? <Navigate to="/upload" /> : <Outlet />}</div>;
};

export default MainLayout;
