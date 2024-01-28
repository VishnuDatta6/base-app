import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { conText } from "../context/centralState";

const MainLayout = () => {
  const {username} = useContext(conText);
  const storedPath = sessionStorage.getItem("lastvisited");

  return <div>{username ? <Navigate to={storedPath ? storedPath : "/upload" } /> : <Outlet />}</div>;
};

export default MainLayout;
