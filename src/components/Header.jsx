import React from "react";
import notification from "../assets/notification-icon.svg";
import userIcon from "../assets/v-image.png";
import logomini from "../assets/logo-mini.svg";
import hamburger from "../assets/hamburger.svg";

const Header = ({setIsOpen}) => {
  return (
    <section className="sm:w-5/6 w-full z-20 h-24 flex justify-between float-right">
      <div className="hidden sm:block"></div>
      <div id='mobileheader' className="flex items-center mx-7 gap-6 sm:hidden">
        <button onClick={()=>setIsOpen(true)}>
        <img src={hamburger} alt="hamburger menu icon" className="w-8"/>
        </button>
        <img src={logomini} alt="logo" className="w-10"/>
        <span>Base</span>
      </div>
      <div className="flex items-center gap-8 mx-14">
        <img src={notification} alt="notification" />
        <img className="rounded-full w-10" src={userIcon} alt="user icon" />
      </div>
    </section>
  );
};

export default Header;
