import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import { Outlet, useLocation } from "react-router-dom";
import Template1 from "./Templates/Template1";
import resu1 from "../assets/resu1.png";
import resu2 from "../assets/resu2.png";
import Template2 from "./Templates/Template2";
import "../components/responsive.css";

const Templates = () => {
  const location = useLocation();
  const [selectedTemplate, setSelectedTemplate] = useState(0);

  const handleTemplateSelect = (templateNumber) => {
    setSelectedTemplate(templateNumber);
  };

  if (location.pathname === "/templates") {
    return (
      <div className="tempmain bg-slate-800 h-[90.999vh]">
        <h2 className="flex justify-center items-center font-bold text-3xl text-white uppercase p-4 mb-4">
          Select a template:
        </h2>
        <div className="tempcont flex gap-5 justify-center items-center flex-wrap">
          <div className="w-[20%] min-h-[50vh] bg-black relative">
            <button
              className="group focus:outline-none"
              onClick={() => handleTemplateSelect(1)}
            >
              <img src={resu1} alt="" />
              <div
                className={`selectclass absolute w-full h-full top-0 bg-black opacity-50 flex justify-center items-center visible ${
                  selectedTemplate === 1 ? "visible" : "hidden"
                }`}
              >
                <h2 className="extratempfont text-white uppercase font-semibold text-2xl">
                  selected
                </h2>
              </div>
            </button>
          </div>
          <div className="w-[20%] min-h-[50vh] bg-black relative">
            <button onClick={() => handleTemplateSelect(2)}>
              <img src={resu2} alt="" />
              <div
                className={`selectclass absolute w-full h-full top-0 bg-black opacity-50 flex justify-center items-center visible ${
                  selectedTemplate === 2 ? "visible" : "hidden"
                }`}
              >
                <h2 className="extratempfont text-white uppercase font-semibold text-2xl">
                  selected
                </h2>
              </div>
            </button>
          </div>
          <div className="w-[20%] min-h-[50vh] bg-black relative">
            <button /*onClick={() => handleTemplateSelect(3)}*/>
              <img
                src="https://marketplace.canva.com/EAFjRZP7Qy4/1/0/1131w/canva-minimalist-modern-professional-cv-resume-xkDELtpQH94.jpg"
                alt=""
              />
              <div
                className={`selectclass absolute w-full h-full top-0 bg-black opacity-50 flex justify-center items-center visible`}
              >
                <h2 className="extratempfont text-white uppercase font-semibold text-2xl">
                  coming soon
                </h2>
              </div>
            </button>
          </div>
        </div>
        {selectedTemplate && (
          <Link to={`/templates/input/${selectedTemplate}`}>
            <div className="flex justify-center items-center p-4 mt-8">
              <h2 className="text-black uppercase font-bold bg-green-400 py-2 px-8 rounded-3xl">
                go with template {selectedTemplate}
              </h2>
            </div>
          </Link>
        )}
      </div>
    );
  }

  return <Outlet />;
};

export default Templates;
