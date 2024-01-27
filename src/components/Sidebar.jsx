import React from "react";
import logomini from "../assets/logo-mini.svg";
import dashboard from "../assets/dashboard-icon.svg";
import upload from "../assets/charts-icon.svg";
import invoice from "../assets/invoice-icon.svg";
import schedule from "../assets/schedule-icon.svg";
import calendar from "../assets/calendar-icon.svg";
import bell from "../assets/bell-icon.svg";
import settings from "../assets/settings-icon.svg";

const Sidebar = ({isOpen, setIsOpen}) => {
  const navs = [
    { icon: dashboard, title: "Dashboard" },
    { icon: upload, title: "Upload" },
    { icon: invoice, title: "Invoice" },
    { icon: schedule, title: "Schedule" },
    { icon: calendar, title: "Calendar" },
    { icon: bell, title: "Notification" },
    { icon: settings, title: "Settings" },
  ];

  const handleNavigation = (e) => {
    const target = e.target.closest('div[data-index]');
    const index = target.getAttribute("data-index");
    console.log("Navigating to:", navs[index].title);
  };

  return (
    <section id="sidebar" className={`${isOpen ? 'w-2/3 h-dvh' : 'w-0 hidden'} delay-150 duration-300 sm:w-1/6 sm:block rounded-r-3xl z-20 fixed bg-white`}>
      <div className="sb-heading flex justify-between gap-6 items-center m-6">
        <div className="flex items-center gap-4">
        <img src={logomini} alt="logo" className="w-10 sm:w-16"/>
        <span>Base</span>
        </div>
        <button className="sm:hidden text-3xl mx-4" onClick={()=>setIsOpen(false)}>&times;</button>
      </div>
      <div className="space-y-12 p-10" onClick={(e) => handleNavigation(e)}>
        {navs.map(({ icon, title }, index) => {
          return (
            <div
              key={index}
              data-index={index}
              className="flex w-full gap-6 items-center"
            >
              <img src={icon} alt={title} className="w-10" />
              {title}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
