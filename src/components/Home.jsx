import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { NavLink, Link } from "react-router-dom";
import "../components/responsive.css";

function Home() {
  return (
    <>
      <div className="page1 w-full min-h-screen flex justify-center items-center bg-slate-800 text-white">
        <div className="cont1 w-1/2 h-full">
          <div className="imgcont w-full h-full relative overflow-hidden">
            <img
              src="https://www.livecareer.com/lcapp/uploads/2024/02/professional-resume-maker.png"
              alt=""
              className="w-full h-full object-contain scale-[0.7]"
            />
          </div>
        </div>
        <div className="cont2 w-1/2 flex flex-col gap-5 px-5">
          <h1 className="mt-10 text-[5vw] uppercase font-bold tracking-tighter">
            resume builder
          </h1>
          <h3 className="text-lg font-medium capitalize">
            we help you to create resume with the professional templates.
          </h3>
          <div className="mt-10 capitalize font-normal">
            <li>free to use</li>
            <li>Access to all templates</li>
            <li>custom sections</li>
            <li>free download in PDF file</li>
          </div>
          <button className="mt-5 text-left uppercase px-5 py-2 bg-green-700 w-fit rounded-full text-white font-medium flex justify-center items-center gap-3 hover:gap-8 transition-all">
            <Link to={"/templates"}>let's create</Link>
            <span>
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
