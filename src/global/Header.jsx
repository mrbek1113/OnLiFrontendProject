import { NavLink, useLocation } from "react-router-dom";
import SearchPng from "../assets/icons/Search.png";
import PrifilePng from '../assets/icons/profile.png';

const Header = () => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div
      className={` ${location.pathname === "/" ? "hidden" : "block"} && ${
        location.pathname === "/register" ? "hidden" : "block"
      }
    flex items-center justify-between px-[40px] h-[80px] border-b-4 `}
    >
      <h1 className="text-3xl">Logo</h1>
      <div className="flex items-center shadow-md border-2 rounded-xl py-[10px] border-gray h-[50px] w-[600px]">
        <input
          type="search"
          className="outline-none w-[90%] text-xl p-[10px] font-serif h-[100%]"
        />
        <button className="rounded-xl text-center bg-orange-500 w-[60px]">
          <img src={SearchPng} alt="Search" className="h-full" />
        </button>
      </div>
      <button className={`${user ? "hidden" : "block"} px-[20px] py-[8px] shadow-xl bg-orange-500 rounded-xl text-xl`}>
        Kirish
      </button>
      <NavLink to="/profile" className="flex flex-col items-center justify-center">
        <img className="w-[50px]" src={PrifilePng} alt="Profile" />
        <h1>{user ? user.name : "Guest"}</h1>
      </NavLink>
    </div>
  );
};

export default Header;
