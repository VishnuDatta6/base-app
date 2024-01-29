import { createContext, useState } from "react";

export const conText = createContext();

const CentralState = ({ children }) => {
  const [username, setUsername] = useState(localStorage.getItem("logged") ? true : false);
  return (
    <conText.Provider value={{username, setUsername}}>
      {children}
    </conText.Provider>
  );
};

export default CentralState;