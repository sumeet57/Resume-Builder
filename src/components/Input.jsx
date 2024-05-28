import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Template1 from "./Templates/Template1";
import Template2 from "./Templates/Template2";
import "../components/responsive.css";

//icons
import { FaArrowRight, FaArrowLeft, FaPlus } from "react-icons/fa";

const Input = () => {
  //for template id
  const { template } = useParams();

  //for sliding button

  const [currentinput, setcurrentinput] = useState(1);
  const changeslide = (direction) => {
    if (direction === "next" && currentinput < (template != 1 ? 5 + 1 : 5)) {
      setcurrentinput(currentinput + 1);
    } else if (direction === "prev" && currentinput > 1) {
      setcurrentinput(currentinput - 1);
    }
  };

  //for personal info
  const [info, setInfo] = useState({
    name: "",
    role: "",
    summary: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    instagram: "",
    facebook: "",
    // Add other perinfo as needed
  });

  const perinfo = [
    {
      type: "text",
      name: "name",
      max: 20,
    },
    {
      type: "text",
      name: "role",
      max: 20,
    },
    template != 1
      ? ""
      : {
          type: "text",
          name: "summary",
          max: 200,
        },
    {
      type: "number",
      name: "phone",
      max: 13,
    },
    {
      type: "email",
      name: "email",
      max: 40,
    },
    {
      type: "text",
      name: "linkedin",
      max: 100,
    },
    {
      type: "text",
      name: "github",
      max: 100,
    },
    {
      type: "text",
      name: "instagram",
      max: 100,
    },
    {
      type: "text",
      name: "facebook",
      max: 100,
    },
  ];

  const handleChange = (e, fieldName) => {
    const { value } = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [fieldName]: value.slice(
        0,
        perinfo.find((field) => field.name === fieldName).max
      ),
    }));
  };

  //for education details

  const [eduInfo, seteduInfo] = useState([
    {
      collegeName: "",
      courseName: "",
      startYear: "",
      endYear: "",
    },
    {
      collegeName: "",
      courseName: "",
      startYear: "",
      endYear: "",
    },
    {
      collegeName: "",
      courseName: "",
      startYear: "",
      endYear: "",
    },
  ]);

  const handlechangeinedu = (index, fieldName, value) => {
    const neweduInfo = [...eduInfo];
    neweduInfo[index][fieldName] = value;
    seteduInfo(neweduInfo);
  };

  const [maxbox, setmaxbox] = useState(3);
  const [currentbox, setcurrentbox] = useState(1);
  const [edutype, setedutype] = useState([
    {
      collegeName: "college name",
      courseName: "course name",
      startYear: "start year",
      endYear: "end year",
      type: "text",
      max: 50,
    },
  ]);

  const addBox = () => {
    if (currentbox != maxbox) {
      setedutype([
        ...edutype,
        {
          collegeName: "college name",
          courseName: "course name",
          startYear: "start year",
          endYear: "end year",
          type: "text",
          max: 50,
        },
      ]);
      setcurrentbox(currentbox + 1);
    }
  };

  //for skills details

  const [skills, setskills] = useState([]);
  const [skillsin, setskillsin] = useState("");

  const addbt = () => {
    if (skillsin.trim()) {
      const newSkill = { skill: skillsin };
      if (skills.length != 15) setskills([...skills, newSkill]);
      setskillsin("");
    }
  };

  //for project details

  const [proInfo, setproInfo] = useState([
    {
      projectName: "",
      proSummary: "",
      duration: "",
      link: "",
    },
    {
      projectName: "",
      proSummary: "",
      duration: "",
      link: "",
    },
    {
      projectName: "",
      proSummary: "",
      duration: "",
      link: "",
    },
  ]);

  const handlechangeinpro = (index, fieldName, value) => {
    const newproInfo = [...proInfo];
    newproInfo[index][fieldName] = value;
    setproInfo(newproInfo);
  };

  const [protype, setprotype] = useState([
    {
      projectName: "project name",
      proSummary: "summary",
      duration: "duration in month",
      link: "live link",
      type: "text",
      type1: "number",
      max: 50,
    },
  ]);
  const [maxboxforpro, setmaxboxforpro] = useState(3);
  const [currentboxforpro, setcurrentboxforpro] = useState(1);
  const addBoxforpro = () => {
    if (currentboxforpro != maxboxforpro) {
      setprotype([
        ...protype,
        {
          projectName: "project name",
          proSummary: "summary",
          duration: "duration in month",
          link: "live link",
          type: "text",
          type1: "number",
          max: 50,
        },
      ]);
      setcurrentboxforpro(currentboxforpro + 1);
    }
  };

  //for work details

  const [workInfo, setworkInfo] = useState([
    {
      companyName: "",
      workSummary: "",
      role: "",
      duration: "",
    },
    {
      companyName: "",
      workSummary: "",
      role: "",
      duration: "",
    },
    {
      companyName: "",
      workSummary: "",
      role: "",
      duration: "",
    },
  ]);

  const handlechangeinwork = (index, fieldName, value) => {
    const newworkInfo = [...workInfo];
    newworkInfo[index][fieldName] = value;
    setworkInfo(newworkInfo);
  };

  const [worktype, setworktype] = useState([
    {
      companyName: "company name",
      workSummary: "work summary",
      role: "role in company",
      duration: "duration in month",
      type: "text",
      max: 150,
    },
  ]);
  const [maxboxforwork, setmaxboxforwork] = useState(3);
  const [currentboxforwork, setcurrentboxforwork] = useState(1);
  const addBoxforwork = () => {
    if (currentboxforwork != maxboxforwork) {
      setworktype([
        ...worktype,
        {
          companyName: "company name",
          workSummary: "work summary",
          role: "role in company",
          duration: "duration in month",
          type: "text",
          max: 200,
        },
      ]);
      setcurrentboxforwork(currentboxforwork + 1);
    }
  };

  //for certificate details (template 2)

  const [certInfo, setcertInfo] = useState([
    {
      certName: "",
      provider: "",
      duration: "",
    },
    {
      certName: "",
      provider: "",
      duration: "",
    },
    {
      certName: "",
      provider: "",
      duration: "",
    },
  ]);
  const handlechangeincert = (index, fieldName, value) => {
    const newcertInfo = [...certInfo];
    newcertInfo[index][fieldName] = value;
    setcertInfo(newcertInfo);
  };

  const [certtype, setcerttype] = useState([
    {
      certName: "certification name",
      provider: "certificate provider",
      duration: "duration in month",
      type: "text",
      max: 50,
    },
  ]);
  const [maxboxforcert, setmaxboxforcert] = useState(3);
  const [currentboxforcert, setcurrentboxforcert] = useState(1);
  const addBoxforcert = () => {
    if (currentboxforcert != maxboxforcert) {
      setcerttype([
        ...certtype,
        {
          certName: "certification name",
          provider: "certificate provider",
          duration: "duration in month",
          type: "text",
          max: 50,
        },
      ]);
      setcurrentboxforcert(currentboxforcert + 1);
    }
  };

  //template handling with route

  const temp = {
    1: (
      <Template1
        info={info}
        eduinfo={eduInfo}
        skill={skills}
        proinfo={proInfo}
        workinfo={workInfo}
      />
    ),
    2: (
      <Template2
        info={info}
        eduinfo={eduInfo}
        skill={skills}
        proinfo={proInfo}
        workinfo={workInfo}
        certinfo={certInfo}
      />
    ),
  };

  return (
    <>
      <div className="cont flex justify-center items-center bg-slate-800">
        <div className="wrap_for_inputandbutton flex flex-col w-[40%] overflow-x-auto">
          <div className="forinput">
            <div
              className={`input1cont min-w-[100%] flex flex-col gap-5 p-5 flex-grow ${
                currentinput === 1 ? "" : "hidden"
              }`}
            >
              <h2 className="uppercase text-white font-semibold text-2xl">
                personal info
              </h2>
              <div className="w-full h-[65vh] overflow-y-scroll overflow-x-hidden text-white flex items-center flex-col">
                {perinfo.map((field) =>
                  field.name == undefined ? (
                    ""
                  ) : (
                    <div className="m-2 capitalize">
                      <h4>{field.name} : </h4>
                      <input
                        key={field.name}
                        type={field.type}
                        name={field.name}
                        value={info[field.name]}
                        onChange={(e) => handleChange(e, field.name)}
                        maxLength={field.max}
                        placeholder={`Enter ${field.name}`}
                        className="input border-[1px] p-2 bg-black rounded-lg"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
            <div
              className={`input2cont w-[100%] flex flex-col gap-5 flex-grow ${
                currentinput === 2 ? "" : "hidden"
              }`}
            >
              <div
                className={`w-[100%] flex flex-col gap-5 p-5 flex-grow ${
                  currentinput === 2 ? "" : "hidden"
                }`}
              >
                <h2 className={`uppercase text-white font-semibold text-2xl`}>
                  qualification
                </h2>
                <div className="w-full h-[65vh] overflow-y-scroll overflow-x-hidden text-white flex items-center flex-col">
                  {edutype.map((field, index, e) => (
                    <div key={index} className="m-1  border-2">
                      <h2 className="p-1 capitalize font-medium text-xl">
                        education box - {index + 1}
                      </h2>
                      <div className="m-2 capitalize">
                        <h4>{field.collegeName} : </h4>
                        <input
                          type={field.type}
                          name={field.collegeName}
                          value={eduInfo[index].collegeName}
                          onChange={(e) =>
                            handlechangeinedu(
                              index,
                              "collegeName",
                              e.target.value
                            )
                          }
                          maxLength={field.max}
                          placeholder={`Enter ${field.collegeName}`}
                          className="border-[1px] p-2 bg-black rounded-lg"
                        />
                        {/* course name */}
                        <h4>{field.courseName} : </h4>
                        <input
                          type={field.type}
                          name={field.courseName}
                          value={eduInfo[index].courseName}
                          onChange={(e) =>
                            handlechangeinedu(
                              index,
                              "courseName",
                              e.target.value
                            )
                          }
                          maxLength={field.max}
                          placeholder={`Enter ${field.courseName}`}
                          className="border-[1px] p-2 bg-black rounded-lg"
                        />
                        {/* start year */}
                        <h4>{field.startYear} : </h4>
                        <input
                          type={field.type}
                          name={field.startYear}
                          value={eduInfo[index].startYear}
                          onChange={(e) =>
                            handlechangeinedu(
                              index,
                              "startYear",
                              e.target.value
                            )
                          }
                          maxLength={field.max}
                          placeholder={`Enter ${field.startYear}`}
                          className="border-[1px] p-2 bg-black rounded-lg"
                        />
                        {/* end year */}
                        <h4>{field.endYear} : </h4>
                        <input
                          type={field.type}
                          name={field.endYear}
                          value={eduInfo[index].endYear}
                          onChange={(e) =>
                            handlechangeinedu(index, "endYear", e.target.value)
                          }
                          maxLength={field.max}
                          placeholder={`Enter ${field.endYear}`}
                          className="border-[1px] p-2 bg-black rounded-lg"
                        />
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={addBox}
                    className="px-4 py-2 m-5 bg-blue-900 rounded-3xl uppercase font-semibold flex flex-row items-center gap-2"
                  >
                    add box <FaPlus className="text-sm" />
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`input1cont w-[100%] flex flex-col gap-5 p-5 flex-grow ${
                currentinput === 3 ? "" : "hidden"
              }`}
            >
              <h2 className="uppercase text-white font-semibold text-2xl">
                skills
              </h2>
              <div className="w-full h-[65vh] overflow-y-scroll overflow-x-hidden text-white flex items-center flex-col">
                <input
                  type="text"
                  id="skillinput"
                  placeholder="Enter Your Skill"
                  value={skillsin}
                  onChange={(e) => setskillsin(e.target.value)}
                  maxLength={15}
                  className="w-full mr-4 py-4 rounded-lg px-2 text-lg bg-black scale-[0.955] border-[1px]"
                />
                <button
                  onClick={addbt}
                  className="bg-blue-900 py-2 px-10 m-2 rounded-3xl"
                >
                  ADD
                </button>
                <div className="skilldisplay mt-4 flex flex-wrap">
                  {skills.map((e) => (
                    <span className="capitalize font-semibold text-xl border-[1px] p-2 m-2 rounded-xl">
                      {e.skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div
              className={`input4cont w-[100%] flex flex-col gap-5 p-5 flex-grow ${
                currentinput === 4 ? "" : "hidden"
              }`}
            >
              <h2 className={`uppercase text-white font-semibold text-2xl`}>
                project
              </h2>
              <div className="w-full h-[65vh] overflow-y-scroll overflow-x-hidden text-white flex items-center flex-col">
                {protype.map((field, index, e) => (
                  <div key={index} className="m-1  border-2">
                    <h2 className="p-1 capitalize font-medium text-xl">
                      project box - {index + 1}
                    </h2>
                    <div className="m-2 capitalize">
                      <h4>{field.projectName} : </h4>
                      <input
                        type={field.type}
                        name={field.projectName}
                        value={eduInfo[index].projectName}
                        onChange={(e) =>
                          handlechangeinpro(
                            index,
                            "projectName",
                            e.target.value
                          )
                        }
                        maxLength={30}
                        placeholder={`Enter ${field.projectName}`}
                        className="border-[1px] p-2 bg-black rounded-lg"
                      />
                      {/* course name */}
                      <h4>{field.proSummary} : </h4>
                      <input
                        type={field.type}
                        name={field.proSummary}
                        value={eduInfo[index].proSummary}
                        onChange={(e) =>
                          handlechangeinpro(index, "proSummary", e.target.value)
                        }
                        maxLength={200}
                        placeholder={`Enter ${field.proSummary}`}
                        className="border-[1px] p-2 bg-black rounded-lg"
                      />
                      {/* start year */}
                      <h4>{field.duration} : </h4>
                      <input
                        type={field.type}
                        name={field.duration}
                        value={eduInfo[index].duration}
                        onChange={(e) =>
                          handlechangeinpro(index, "duration", e.target.value)
                        }
                        maxLength={3}
                        placeholder={`Enter ${field.duration}`}
                        className="border-[1px] p-2 bg-black rounded-lg"
                      />
                      {/* end year */}
                      <h4>{field.link} : </h4>
                      <input
                        type={field.type}
                        name={field.link}
                        value={eduInfo[index].link}
                        onChange={(e) =>
                          handlechangeinpro(index, "link", e.target.value)
                        }
                        placeholder={`Enter ${field.link}`}
                        className="border-[1px] p-2 bg-black rounded-lg"
                      />
                    </div>
                  </div>
                ))}
                <button
                  onClick={addBoxforpro}
                  className="px-4 py-2 m-5 bg-blue-900 rounded-3xl uppercase font-semibold flex flex-row items-center gap-2"
                >
                  add box <FaPlus className="text-sm" />
                </button>
              </div>
            </div>
            <div
              className={`input4cont w-[100%] flex flex-col gap-5 p-5 flex-grow ${
                currentinput === 5 ? "" : "hidden"
              }`}
            >
              <h2 className={`uppercase text-white font-semibold text-2xl`}>
                experience
              </h2>
              <div className="w-full h-[65vh] overflow-y-scroll overflow-x-hidden text-white flex items-center flex-col">
                {worktype.map((field, index, e) => (
                  <div key={index} className="m-1  border-2">
                    <h2 className="p-1 capitalize font-medium text-xl">
                      experience box - {index + 1}
                    </h2>
                    <div className="m-2 capitalize">
                      <h4>{field.companyName} : </h4>
                      <input
                        type={field.type}
                        name={field.companyName}
                        value={workInfo[index].companyName}
                        onChange={(e) =>
                          handlechangeinwork(
                            index,
                            "companyName",
                            e.target.value
                          )
                        }
                        maxLength={20}
                        placeholder={`Enter ${field.companyName}`}
                        className="border-[1px] p-2 bg-black rounded-lg"
                      />
                      {/* course name */}
                      <h4>{field.workSummary} : </h4>
                      <input
                        type={field.type}
                        name={field.workSummary}
                        value={workInfo[index].workSummary}
                        onChange={(e) =>
                          handlechangeinwork(
                            index,
                            "workSummary",
                            e.target.value
                          )
                        }
                        maxLength={field.max}
                        placeholder={`Enter ${field.workSummary}`}
                        className="border-[1px] p-2 bg-black rounded-lg"
                      />
                      {/* start year */}
                      <h4>{field.duration} : </h4>
                      <input
                        type={field.type}
                        name={field.duration}
                        value={workInfo[index].duration}
                        onChange={(e) =>
                          handlechangeinwork(index, "duration", e.target.value)
                        }
                        maxLength={3}
                        placeholder={`Enter ${field.duration}`}
                        className="border-[1px] p-2 bg-black rounded-lg"
                      />
                      {/* role */}
                      <h4>{field.role} : </h4>
                      <input
                        type={field.type}
                        name={field.role}
                        value={workInfo[index].role}
                        onChange={(e) =>
                          handlechangeinwork(index, "role", e.target.value)
                        }
                        maxLength={20}
                        placeholder={`Enter ${field.role}`}
                        className="border-[1px] p-2 bg-black rounded-lg"
                      />
                    </div>
                  </div>
                ))}
                <button
                  onClick={addBoxforwork}
                  className="px-4 py-2 m-5 bg-blue-900 rounded-3xl uppercase font-semibold flex flex-row items-center gap-2"
                >
                  add box <FaPlus className="text-sm" />
                </button>
              </div>
            </div>

            <div
              className={`input4cont w-[100%] flex flex-col gap-5 p-5 flex-grow ${
                currentinput === 6 ? "" : "hidden"
              }`}
            >
              <h2 className={`uppercase text-white font-semibold text-2xl`}>
                certificates
              </h2>
              <div className="w-full h-[65vh] overflow-y-scroll overflow-x-hidden text-white flex items-center flex-col">
                {certtype.map((field, index, e) => (
                  <div key={index} className="m-1  border-2">
                    <h2 className="p-1 capitalize font-medium text-xl">
                      certificate box - {index + 1}
                    </h2>
                    <div className="m-2 capitalize">
                      <h4>{field.certName} : </h4>
                      <input
                        type={field.type}
                        name={field.certName}
                        value={certInfo[index].certName}
                        onChange={(e) =>
                          handlechangeincert(index, "certName", e.target.value)
                        }
                        maxLength={field.max}
                        placeholder={`Enter ${field.certName}`}
                        className="border-[1px] p-2 bg-black rounded-lg"
                      />
                      {/* course name */}
                      <h4>{field.provider} : </h4>
                      <input
                        type={field.type}
                        name={field.provider}
                        value={certInfo[index].provider}
                        onChange={(e) =>
                          handlechangeincert(index, "provider", e.target.value)
                        }
                        maxLength={field.max}
                        placeholder={`Enter ${field.provider}`}
                        className="border-[1px] p-2 bg-black rounded-lg"
                      />
                      {/* start year */}
                      <h4>{field.duration} : </h4>
                      <input
                        type={field.type}
                        name={field.duration}
                        value={certInfo[index].duration}
                        onChange={(e) =>
                          handlechangeincert(index, "duration", e.target.value)
                        }
                        maxLength={3}
                        placeholder={`Enter ${field.duration}`}
                        className="border-[1px] p-2 bg-black rounded-lg"
                      />
                    </div>
                  </div>
                ))}
                <button
                  onClick={addBoxforcert}
                  className="px-4 py-2 m-5 bg-blue-900 rounded-3xl uppercase font-semibold flex flex-row items-center gap-2"
                >
                  add box <FaPlus className="text-sm" />
                </button>
              </div>
            </div>
          </div>
          <div className="nextbt p-2 w-[30%] flex justify-between gap-5">
            <button
              onClick={() => changeslide("prev")}
              className="text-center bg-red-300 px-8 py-2 uppercase font-bold rounded-3xl flex flex-row items-center gap-2"
            >
              <FaArrowLeft /> prev
            </button>
            <button
              onClick={() => changeslide("next")}
              className="text-center bg-green-300 px-8 py-2 uppercase font-bold rounded-3xl flex flex-row items-center gap-2"
            >
              next <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="wrap_for_template w-[60%] scale-90">
          <div className="w-full max-h-[90%] overflow-y-scroll">
            {temp[template]}
          </div>
        </div>
      </div>
    </>
  );
};

export default Input;
