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
      <div className="tempmain bg-slate-800 w-full min-h-screen">
        <h2 className="font-bold text-[4vw] text-center text-white uppercase p-4 mb-4">
          Select a template:
        </h2>
        <div className="tempcont flex gap-5 justify-center items-center p-10">
          <div className="box w-[30vw]" onClick={() => setSelectedTemplate(1)}>
            <img
              src={resu1}
              alt=""
              className={`w-full h-full object-contain
              ${
                selectedTemplate === 1
                  ? "scale-105 border-8 border-green-500"
                  : "scale-90"
              }
             duration-1000`}
            />
          </div>
          <div className="box w-[30vw]" onClick={() => setSelectedTemplate(2)}>
            <img
              src={resu2}
              alt=""
              className={`w-full h-full object-contain
              ${
                selectedTemplate === 2
                  ? "scale-105 border-8 border-green-500"
                  : "scale-90"
              }
             duration-1000`}
            />
          </div>
          <div className="box w-[30vw]">
            <img
              src="https://marketplace.canva.com/EAFjRZP7Qy4/1/0/1131w/canva-minimalist-modern-professional-cv-resume-xkDELtpQH94.jpg"
              alt=""
              className={`w-full h-full object-contain blur-sm`}
            />
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
