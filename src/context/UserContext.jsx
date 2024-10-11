import { createContext } from "react";

export const Usercontext=createContext()
const UserProvider=({children})=>{
  return(
    <Usercontext.Provider value={{}}>{children}</Usercontext.Provider>
  )  
}
export default UserProvider