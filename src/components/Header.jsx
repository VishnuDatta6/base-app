import React, { useContext, useState } from "react";
import notification from "../assets/notification-icon.svg";
import userIcon from "../assets/v-image.png";
import logomini from "../assets/logo-mini.svg";
import hamburger from "../assets/hamburger.svg";
import { conText } from "./context/centralState";

const Header = ({setIsOpen}) => {
  const [pop, setPop] = useState(false);
  const {setUsername} = useContext(conText);

  const handleLogout = ()=>{
    sessionStorage.removeItem("logged");
    setUsername(false);
  }

  const renderPopover = ()=>{
    return(
      <div className={`${pop ? 'absolute top-11' : 'hidden'} flex flex-col font-figtree font-semibold bg-white border-2 border-gray-400 rounded-xl p-2`}>
        <button className="hover:bg-primary p-2 hover:text-white rounded-xl">Profile</button>
        <button className="hover:bg-primary hover:text-white p-2 rounded-xl" onClick={handleLogout}>Logout</button>
      </div>
    )
  }

  return (
    <section className="sm:w-5/6 w-full z-20 h-24 flex items-center justify-between float-right" onMouseLeave={()=>setPop(false)}>
      <div className="hidden sm:block font-semibold font-figtree text-2xl">Upload CSV</div>
      <div id='mobileheader' className="flex items-center mx-7 gap-6 sm:hidden">
        <button onClick={()=>setIsOpen(true)}>
        <img src={hamburger} alt="hamburger menu icon" className="w-8"/>
        </button>
        <img src={logomini} alt="logo" className="w-10"/>
        <span>Base</span>
      </div>
      <div className="flex items-center gap-8 mx-5 sm:mx-10 relative">
        <img src={notification} alt="notification" />
        <button className="" onClick={()=>setPop(true)}>
        <img className="rounded-full w-10" src={userIcon} alt="user icon" />
        </button>
        {renderPopover()}
      </div>
    </section>
  );
};

export default Header;
