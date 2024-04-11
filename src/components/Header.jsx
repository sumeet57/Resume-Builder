import React from "react";
import { NavLink, Link } from "react-router-dom/dist";
import "../components/responsive.css";

function Header() {
  return (
    <>
      <header>
        <nav className="w-full h-16 bg-white text-black flex justify-between items-center px-8">
          <h3 className="icon text-2xl capitalize font-bold tracking-tighter">
            resume builder
          </h3>
          <div className="navelem">
            <button className="px-5 capitalize tracking-tight font-semibold hover:text-slate-400">
              <NavLink to={"/"}>home</NavLink>
            </button>
            <button className="px-5 capitalize tracking-tight font-semibold hover:text-slate-400">
              <NavLink to={"/templates"}>templates</NavLink>
            </button>
            <button className="px-5 capitalize tracking-tight font-semibold hover:text-slate-400">
              about
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
