import React, { useEffect } from "react";

import html2pdf from "html2pdf.js";

//icons
import {
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Input from "../Input";

function Template1(props) {
  const handleDownloadClick = (event) => {
    event.preventDefault();
    const element = document.getElementById("wrapp");
    html2pdf().from(element).save("resume.pdf");
  };

  useEffect(() => {
    // Function to generate and download PDF
    const downloadResumeAsPDF = () => {
      const element = document.getElementById("wrapp");
      html2pdf().from(element).save("resume.pdf");
    };

    // Call the function to generate PDF when the component mounts
    // downloadResumeAsPDF();
  }, []);

  return (
    <>
      <div className="wrap p-2 bg-white" id="wrapp">
        <div className="top flex pb-3">
          <div className="topl w-[75%]">
            <h1 className="font-bold capitalize text-3xl m-1">
              {props.info.name}
            </h1>
            <h3 className="tracking-tighter capitalize text-2xl m-1">
              {props.info.role}
            </h3>
            <p className="capitalize text-lg m-1">{props.info.summary}</p>
          </div>
          <div className="topr w-[25%] text-right leading-5">
            <div className="flex justify-end gap-2">
              <span className={`text-xs mt-2`}>
                {props.info.phone == "" ? "" : <FaPhoneAlt />}
              </span>

              <p className="capitalize font-medium">{props.info.phone}</p>
            </div>
            <div className="flex justify-end gap-2">
              <span className={`text-xs mt-2`}>
                {props.info.email == "" ? "" : <MdEmail />}
              </span>
              <a className="capitalize font-medium" href={props.info.email}>
                {props.info.email != "" ? "email" : ""}
              </a>
            </div>
            <div className="flex justify-end gap-2">
              <span className={`text-xs mt-2`}>
                {props.info.linkedin == "" ? "" : <FaLinkedin />}
              </span>

              <a className="capitalize font-medium" href={props.info.linkedin}>
                {props.info.linkedin != "" ? "linkedin" : ""}
              </a>
            </div>
            <div className="flex justify-end gap-2">
              <span className={`text-xs mt-2`}>
                {props.info.github == "" ? "" : <FaGithub />}
              </span>

              <a className="capitalize font-medium" href={props.info.github}>
                {props.info.github != "" ? "github" : ""}
              </a>
            </div>
            <div className="flex justify-end gap-2">
              <span className={`text-xs mt-2`}>
                {props.info.instagram == "" ? "" : <FaInstagram />}
              </span>

              <a className="capitalize font-medium" href={props.info.instagram}>
                {props.info.instagram != "" ? "instagram" : ""}
              </a>
            </div>
            <div className="flex justify-end gap-2">
              <span className={`text-xs mt-2`}>
                {props.info.facebook == "" ? "" : <FaFacebook />}
              </span>

              <a className="capitalize font-medium" href={props.info.facebook}>
                {props.info.facebook != "" ? "facebook" : ""}
              </a>
            </div>
          </div>
        </div>
        <div className="eduCont">
          <h2
            className={`text-lg uppercase font-bold p-1 border-b-2 border-zinc-800 ${
              props.eduinfo[0].collegeName == "" ? "hidden" : "visible"
            }`}
          >
            qualification -
          </h2>
          {[
            {
              Cname: props.eduinfo[0].collegeName,
              Uname: props.eduinfo[0].courseName,
              Syear: props.eduinfo[0].startYear,
              Lyear: props.eduinfo[0].endYear,
            },
            {
              Cname: props.eduinfo[1].collegeName,
              Uname: props.eduinfo[1].courseName,
              Syear: props.eduinfo[1].startYear,
              Lyear: props.eduinfo[1].endYear,
            },
            {
              Cname: props.eduinfo[2].collegeName,
              Uname: props.eduinfo[2].courseName,
              Syear: props.eduinfo[2].startYear,
              Lyear: props.eduinfo[2].endYear,
            },
          ].map((index, key) => (
            <div
              className={`{box${key} ${
                props.eduinfo[2].collegeName != ""
                  ? "border-b-2"
                  : "border-none"
              } p-1 leading-6}`}
            >
              <h3 className="font-semibold capitalize">{index.Cname}</h3>
              <h4 className="font-medium uppercase">
                {index.Uname}
                {(index.Uname && index.Syear) || index.Lyear != ""
                  ? " - "
                  : " "}
                {index.Syear}
                {index.Lyear && index.Syear != "" ? " to " : " "}
                {index.Lyear}
              </h4>
            </div>
          ))}
        </div>
        <div className="skillCont">
          <h2
            className={`text-lg p-1 pt-0 font-medium uppercase border-b-2 border-zinc-800 ${
              props.skill.length == 0 ? "hidden" : "visible"
            } `}
          >
            skills -
          </h2>
          <div className="skillsbox flex flex-wrap leading-3 pb-1">
            {props.skill.map((e) => (
              <p className="m-2 ml-2 mr-2 capitalize font-normal">{e.skill}</p>
            ))}
          </div>
        </div>
        <div className="proCont">
          <h2
            className={`p-1 pl-2 pr-2 uppercase text-lg font-bold border-b-2 border-zinc-800
            ${props.proinfo[0].projectName.length == 0 ? "hidden" : "visible"}
            `}
          >
            projects -
          </h2>
          {[
            {
              name: props.proinfo[0].projectName,
              link: props.proinfo[0].link,
              info: props.proinfo[0].proSummary,
              duration: props.proinfo[0].duration,
            },
            {
              name: props.proinfo[1].projectName,
              link: props.proinfo[1].link,
              info: props.proinfo[1].proSummary,
              duration: props.proinfo[1].duration,
            },
            {
              name: props.proinfo[2].projectName,
              link: props.proinfo[2].link,
              info: props.proinfo[2].proSummary,
              duration: props.proinfo[2].duration,
            },
          ].map((e) => (
            <div
              className={`box${e} pl-2 pr-2 p-1 ${
                props.proinfo[2].projectName != "" ? "border-b-2" : ""
              }`}
            >
              <h3 className="capitalize text-base font-medium">
                {e.name} {e.name && e.duration != "" ? " - " : ""} {e.duration}{" "}
                {e.duration != "" ? "months" : ""}
                {e.link != "" ? " - " : ""}{" "}
                <a
                  className="text-blue-900 underline font-medium"
                  href={`${e.link}`}
                >
                  {e.link != "" ? "LINK" : ""}
                </a>
              </h3>
              <p className="capitalize">{e.info}</p>
            </div>
          ))}
        </div>
        <div className="workCont">
          <h2
            className={`p-1 pl-2 pr-2 uppercase text-lg font-medium border-b-2 border-zinc-800 ${
              props.workinfo[0].companyName.length == 0 ? "hidden" : "visible"
            } border-zinc-800`}
          >
            experience -
          </h2>
          {[
            {
              name: props.workinfo[0].companyName,
              role: props.workinfo[0].role,
              info: props.workinfo[0].workSummary,
              duration: props.workinfo[0].duration,
            },
            {
              name: props.workinfo[1].companyName,
              role: props.workinfo[1].role,
              info: props.workinfo[1].workSummary,
              duration: props.workinfo[1].duration,
            },
            {
              name: props.workinfo[2].companyName,
              role: props.workinfo[2].role,
              info: props.workinfo[2].workSummary,
              duration: props.workinfo[2].duration,
            },
          ].map((e) => (
            <div
              className={`box${e} pl-2 pr-2 p-1 ${
                props.workinfo[2].companyName != "" ? "border-b-2" : ""
              }`}
            >
              <h3 className="capitalize font-semibold">
                {e.name} {e.name && e.duration != "" ? " - " : ""} {e.duration}
                {e.duration != "" ? " months" : ""}
                {e.duration && e.role != "" ? " - " : ""}
                {e.role}
              </h3>
              <p className="capitalize">{e.info}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleDownloadClick}
        className="mt-5 px-10 py-3 rounded-3xl uppercase font-black bg-green-500"
      >
        download
      </button>
    </>
  );
}

export default Template1;
