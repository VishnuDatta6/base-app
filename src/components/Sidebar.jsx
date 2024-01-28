import React, {useState} from "react";
import logomini from "../assets/logo-mini.svg";
import { navs } from "../utils/navs";
import "../scss/sidebar.scss";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({isOpen, setIsOpen}) => {
  const {pathname} = useLocation();
  const [clickedNav, setClickedNav] = useState("");
  console.log(clickedNav);

  return (
    <section id="sidebar" className={`${isOpen ? 'w-2/3' : 'w-0'} h-dvh duration-300 ease-in overflow-hidden sm:w-1/6 sm:block rounded-r-3xl z-20 fixed bg-white`}>
      <div className="flex justify-between gap-6 items-center m-6">
        <div className="sb-heading flex items-center gap-4 sm:mx-10">
        <img src={logomini} alt="logo" className="w-10 sm:w-16"/>
        <span className="font-nunito font-semibold text-xl sm:text-2xl">Base</span>
        </div>
        <button className="sm:hidden text-3xl mx-4" onClick={()=>setIsOpen(false)}>&times;</button>
      </div>
      <div className="space-y-12 py-10">
        {navs.map(({ icon, title,path }, index) => {
          return (
            <Link
              to={path}
              key={index}
              data-index={index}
              className={`font-nunito font-semibold text-lg flex w-full px-10 gap-6 items-center ${pathname === path ? 'activenav' : ''}`}
              onClick={()=>setClickedNav(title)}
            >
              <div className="w-10">{icon}</div>
              {title}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
