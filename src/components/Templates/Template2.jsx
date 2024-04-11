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
import { MdAlternateEmail } from "react-icons/md";

function Template2(props) {
  const handleDownloadClick = (event) => {
    event.preventDefault(); // Prevent default behavior of the button
    const element = document.getElementById("wrapp2");
    html2pdf().from(element).save("resume.pdf");
  };

  useEffect(() => {
    // Function to generate and download PDF
    const downloadResumeAsPDF = () => {
      const element = document.getElementById("wrapp2");
      html2pdf().from(element).save("resume.pdf");
    };

    // Call the function to generate PDF when the component mounts
    // downloadResumeAsPDF();
  }, []);

  return (
    <>
      <div className="wrap flex bg-white" id="wrapp2">
        <div className="left bg-[#004A4D] w-[35%] p-1">
          <div className="info text-white">
            <h1 className="capitalize tracking-tighter p-2 pl-4 text-2xl font-bold">
              {props.info.name}
            </h1>
            <h3 className="capitalize tracking-tighter pl-4 text-lg pb-3">
              {props.info.role}
            </h3>
            <h3
              className={`bg-cyan-950 text-center uppercase p-2 text-slate-200 font-thin
            ${
              props.info.phone ||
              props.info.linkedin ||
              props.info.github ||
              props.info.email ||
              props.info.instagram ||
              props.info.facebook != ""
                ? "visible"
                : "hidden"
            }
            `}
            >
              personal info
            </h3>
            <div className="links text-center text-lg p-3 pt-4 capitalize font-light tracking-tight">
              <div className="flex justify-center items-center gap-2">
                {props.info.phone != "" ? (
                  <FaPhoneAlt className="text-sm" />
                ) : (
                  ""
                )}
                <p>{props.info.phone}</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                {props.info.linkedin != "" ? <FaLinkedin /> : ""}
                <a href={props.info.linkedin}>
                  {props.info.linkedin != "" ? "linkedin" : ""}
                </a>
              </div>
              <div className="flex justify-center items-center gap-2">
                {props.info.github != "" ? <FaGithub /> : ""}
                <a href={props.info.github}>
                  {props.info.github != "" ? "github" : ""}
                </a>
              </div>
              <div className="flex justify-center items-center gap-2">
                {props.info.email != "" ? <MdAlternateEmail /> : ""}
                <a>{props.info.email}</a>
              </div>
              <div className="flex justify-center items-center gap-2">
                {props.info.instagram != "" ? <FaInstagram /> : ""}
                <a href={props.info.instagram}>
                  {props.info.instagram != "" ? "instagram" : ""}
                </a>
              </div>
              <div className="flex justify-center items-center gap-2">
                {props.info.facebook != "" ? <FaFacebook /> : ""}
                <a href={props.info.facebook}>
                  {props.info.facebook != "" ? "facebook" : ""}
                </a>
              </div>
            </div>
            <h3
              className={`bg-cyan-950 text-center uppercase p-2 text-slate-200 font-thin ${
                props.eduinfo[0].collegeName.length == 0 ? "hidden" : "visible"
              }`}
            >
              education
            </h3>
            <div className="edu">
              {[
                {
                  Cname: props.eduinfo[0].courseName,
                  Uname: props.eduinfo[0].collegeName,
                  Fyear: props.eduinfo[0].startYear,
                  Lyear: props.eduinfo[0].endYear,
                },
                {
                  Cname: props.eduinfo[1].courseName,
                  Uname: props.eduinfo[1].collegeName,
                  Fyear: props.eduinfo[1].startYear,
                  Lyear: props.eduinfo[1].endYear,
                },
                {
                  Cname: props.eduinfo[2].courseName,
                  Uname: props.eduinfo[2].collegeName,
                  Fyear: props.eduinfo[2].startYear,
                  Lyear: props.eduinfo[2].endYear,
                },
                // {
                //   Cname: props.eduinfo[3].courseName,
                //   Uname: props.eduinfo[3].collegeName,
                //   Fyear: props.eduinfo[3].startYear,
                //   Lyear: props.eduinfo[3].endYear,
                // },
              ].map((index, key) => (
                <div
                  className={`box${key} ${
                    props.eduinfo[2].courseName.length != 0
                      ? "border-b-[1px]"
                      : "border-none"
                  } border-slate-300 p-1 leading-6`}
                >
                  <h3 className="font-bold tracking-tighter uppercase">
                    {index.Cname}
                  </h3>
                  <h4 className="capitalize">
                    {index.Uname}{" "}
                    {index.Uname && index.Lyear != "" ? " - " : ""}{" "}
                    {index.Fyear}
                    {index.Fyear && index.Lyear != "" ? " to " : ""}
                    {index.Lyear}
                  </h4>
                </div>
              ))}
            </div>
            <h3
              className={`bg-cyan-950 text-center uppercase p-2 text-slate-200 font-thin
            ${props.skill.length != 0 ? "visible" : "hidden"}
            `}
            >
              skills
            </h3>
            <div className="skills text-center">
              {props.skill.map((e) => (
                <p className="capitalize font-medium p-2">{e.skill}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="right w-[65%] p-1">
          <div className="work">
            <h2
              className={`p-1 pl-2 pr-2 uppercase text-lg font-medium border-b-2 border-zinc-800
            ${props.workinfo[0].companyName != "" ? "visible" : "hidden"}
            `}
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
                  props.workinfo[2].companyName != ""
                    ? "border-b-2"
                    : "border-none"
                }`}
              >
                <h3 className="capitalize font-medium">
                  {e.name} {e.role != "" ? "-" : ""} {e.role}{" "}
                  {e.role && e.duration != "" ? "-" : ""} {e.duration}
                  {e.duration != "" ? "months" : ""}
                </h3>
                <p className="flex flex-wrap">{e.info}</p>
              </div>
            ))}
          </div>
          <div className="pro">
            <h2
              className={`p-1 pl-2 pr-2 uppercase text-lg font-semibold border-b-2 border-zinc-800
            ${props.proinfo[0].projectName != "" ? "visible" : "hidden"}
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
                  props.proinfo[2].projectName != ""
                    ? "border-b-2"
                    : "border-none"
                }`}
              >
                <h3 className="capitalize text-base font-medium">
                  {e.name} {e.name && e.duration != "" ? " - " : ""}
                  {e.duration}
                  {e.duration != "" ? " months" : ""}{" "}
                  {e.link != "" ? " - " : ""}{" "}
                  <a
                    className="text-blue-800 uppercase font-medium"
                    href={`${e.link}`}
                  >
                    {e.link != "" ? "link" : ""}
                  </a>
                </h3>
                <p>{e.info}</p>
              </div>
            ))}
          </div>
          <div className="cert">
            <h2
              className={`p-1 pl-2 pr-2 uppercase text-lg font-medium border-b-2 border-zinc-800 ${
                props.certinfo[0].certName != "" ? "visible" : "hidden"
              }`}
            >
              certification -
            </h2>
            {[
              {
                name: props.certinfo[0].certName,
                time: props.certinfo[0].duration,
                provider: props.certinfo[0].provider,
              },
              {
                name: props.certinfo[1].certName,
                time: props.certinfo[1].duration,
                provider: props.certinfo[1].provider,
              },
              {
                name: props.certinfo[2].certName,
                time: props.certinfo[2].duration,
                provider: props.certinfo[2].provider,
              },
            ].map((e) => (
              <div
                className={`${
                  props.certinfo[2].certName != "" ? "border-b-2" : ""
                } pl-2`}
              >
                <h3 className="font-medium capitalize">
                  {e.name} {e.name && e.time != "" ? " - " : ""} {e.time}{" "}
                  {e.time != "" ? "months" : ""}
                </h3>
                <h4 className="capitalize">
                  {e.provider != "" ? "by -" : ""} {e.provider}
                </h4>
              </div>
            ))}
          </div>
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

export default Template2;
