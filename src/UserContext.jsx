import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider =({children})=>{
  const [log, setLog] = useState('logout');
  const toggleLog =()=>{
    const value = log==='logout'?'login':'logout';
    setLog(value);
  }
  return(
    <UserContext.Provider value = {{log, toggleLog}}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
