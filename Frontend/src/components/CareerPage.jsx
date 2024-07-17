import React from "react";
import NavBar from "./NavBar";

function CareerPage() {
  return (
    <>
      <div className='w-full h-screen  border-[#11304D] border-b-8 bg-[url("/bgCareerGIF.gif")] bg-cover bg-center bg-no-repeat flex flex-col justify-end overflow-hidden'>
        <span className="absolute top-[35%] left-1/4 text-8xl text-whitish font-gtaHeadingText1">
          Careers
        </span>
        <div className="flex w-full h-[10%] px-[15%] justify-evenly gap-3">
          <div className=" box h-full w-1/4 p-3 text-center text-whitish rounded-t-3xl text-lg font-gtaDescriptionText border-[#11304D] border-2 bg-[#11304dbd] hover:h-full">
            Police Officer
          </div>
          <div className=" box h-full w-1/4 p-3 text-center text-whitish rounded-t-3xl text-lg font-gtaDescriptionText border-[#11304D] border-2 bg-[#11304dbd] hover:h-full">
            Dispatcher
          </div>
          <div className=" box h-full w-1/4 p-3 text-center text-whitish rounded-t-3xl text-lg font-gtaDescriptionText border-[#11304D] border-2 bg-[#11304dbd] hover:h-full ">
            Forensic Analyst
          </div>
          <div className=" box h-full w-1/4 p-3 text-center text-whitish rounded-t-3xl text-lg font-gtaDescriptionText border-[#11304D] border-2 bg-[#11304dbd] hover:h-full ">
            K-9 Unit
          </div>
        </div>
      </div>
      <div className="bg-[#121212] text-whitish py-10 w-full h-fit  text-white flex flex-col gap-y-4 justify-start">
        {/* Police Officer */}
        <div className="h-screen w-screen flex flex-col gap-1 p-10">
          <p className="font-gtaHeadingText1 text-5xl text-center p-5">
            Police Officer
          </p>
          <div className="flex h-full w-full">
            <div className="h-full w-[40%] flex items-start justify-center">
              <img
                className="h-[75%] w-auto rounded-full drop-shadow-[0_15px_15px_rgba(5,67,120,255)]"
                src="/policeOfficer.png"
                alt="Dispatcher"
              />
            </div>
            <div className="h-full w-[60%] flex flex-col items-start justify-start m-5">
              <ul className="flex flex-col m-4 gap-3 text-xl text-justify">
                <li>
                  Description: Police officers in Los Santos maintain law and
                  order by patrolling streets, responding quickly to crimes, and
                  investigating incidents thoroughly.
                </li>
                <li>
                  Qualifications: They typically need at least a high school
                  diploma, and some may have additional training from a police
                  academy or college courses in criminal justice.
                </li>
                <li>
                  Job: Their daily tasks include patrolling neighborhoods,
                  responding to emergencies, enforcing laws, engaging with the
                  community, and sometimes working in specialized units like
                  SWAT or vice.
                </li>
                <li>
                  Salary: They earn competitive pay based on experience and
                  rank, with benefits such as healthcare, retirement plans, and
                  opportunities for overtime.
                </li>
              </ul>
              <div className="w-full h-1/3 items-center flex justify-center">
                <button className="bg-[#120658] px-10 py-4 rounded-full">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dispatcher */}
        <div className="h-screen w-screen flex flex-col gap-1 p-10">
          <p className="font-gtaHeadingText1 text-5xl text-center py-5">
            {" "}
            Dispatchers
          </p>
          <div className="flex h-full w-full">
            <div className="h-full w-[60%] flex flex-col items-start justify-start m-5">
              <ul className="flex flex-col m-4 gap-3 text-xl  text-justify">
                <li>
                  Description: Dispatchers in Los Santos play a crucial role in
                  public safety by coordinating emergency response,
                  communicating with field units, and managing crisis situations
                  efficiently.
                </li>
                <li>
                  Qualifications: They typically require a high school diploma
                  or equivalent, along with specialized training in emergency
                  communication and proficiency in computer systems used for
                  dispatching.
                </li>
                <li>
                  Job: Their daily tasks involve receiving emergency calls,
                  determining the nature and location of the emergency,
                  dispatching appropriate personnel, and maintaining accurate
                  records of incidents and responses.
                </li>
                <li>
                  Salary: Dispatchers earn competitive pay based on experience
                  and skill level, with benefits including healthcare,
                  retirement plans, and potential for shift differentials and
                  overtime.
                </li>
              </ul>
              <div className="w-full h-1/3 items-center flex justify-center">
                <button className="bg-[#120658] px-10 py-4 rounded-full">
                  Apply
                </button>
              </div>
            </div>
            <div className="h-full w-[40%] flex items-start justify-center">
              <img
                className="h-auto w-auto rounded-full drop-shadow-[0_15px_15px_rgba(5,67,120,255)]"
                src="/Dispatcher.png"
                alt="Dispatcher"
              />
            </div>
          </div>
        </div>

        {/* Forensics */}

        <div className="h-screen w-screen flex flex-col gap-1 p-10">
          <p className="font-gtaHeadingText1 text-5xl text-center p-5">
            {" "}
            Forensics Analyst
          </p>
          <div className="flex h-full w-full">
            <div className="h-full w-[40%] flex items-start justify-center">
              <img
                className="h-[75%] w-auto transform scale-x-[-1] rounded-full drop-shadow-[0_15px_15px_rgba(5,67,120,255)]"
                src="/Forensics.png"
                alt="Dispatcher"
              />
            </div>
            <div className="h-full w-[60%] flex flex-col items-start justify-start m-5">
              <ul className="flex flex-col m-4 gap-3 text-xl text-justify">
                <li>
                  Description: Forensic analysts in Los Santos are critical to
                  criminal investigations, using scientific techniques to
                  analyze physical evidence and help solve crimes.
                </li>
                <li>
                  Qualifications: They typically require a bachelor's degree in
                  forensic science, chemistry, biology, or a related field, and
                  may have additional certifications or specialized training in
                  forensic analysis.
                </li>
                <li>
                  Job: Their daily tasks include collecting and preserving
                  evidence from crime scenes, analyzing substances such as DNA,
                  drugs, and fingerprints, writing detailed reports, and
                  testifying in court as expert witnesses.
                </li>
                <li>
                  Salary: Forensic analysts earn competitive salaries based on
                  experience and expertise, with benefits such as healthcare,
                  retirement plans, and opportunities for professional
                  development and advancement.
                </li>
              </ul>
              <div className="w-full h-1/3 items-center flex justify-center">
                <button className="bg-[#120658] px-10 py-4 rounded-full">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* K-9 unit */}

        <div className="h-screen w-screen flex flex-col gap-1 p-10">
          <p className="font-gtaHeadingText1 text-5xl text-center py-5">
            K-9 unit
          </p>
          <div className="flex h-full w-full">
            <div className="h-full w-[60%] flex flex-col items-start justify-start m-5">
              <ul className="flex flex-col m-4 gap-3 text-xl text-justify">
                <li>
                  Description: K9 units in Los Santos are specialized teams
                  consisting of trained police dogs and their handlers, working
                  together to detect drugs, explosives, track suspects, and
                  assist in search and rescue operations.
                </li>
                <li>
                  Qualifications: Handlers typically require a high school
                  diploma and must complete extensive training programs with
                  their K9 partners. Both handler and dog undergo continuous
                  training to maintain their skills and effectiveness.
                </li>
                <li>
                  Job: Their daily tasks include patrolling with their K9
                  partners, conducting searches for narcotics or explosives,
                  tracking and apprehending suspects, participating in search
                  and rescue missions, and engaging in community outreach and
                  demonstrations.
                </li>
                <li>
                  Salary: K9 unit officers earn competitive pay based on their
                  experience and rank, with additional stipends for handling a
                  K9. Benefits include healthcare, retirement plans, and
                  specialized equipment for their K9 partners.
                </li>
              </ul>
              <div className="w-full h-1/3 items-center flex justify-center">
                <button className="bg-[#120658] px-10 py-4 rounded-full">
                  Apply
                </button>
              </div>
            </div>
            <div className="h-full w-[40%] flex items-start justify-center">
              <img
                className="h-auto w-auto rounded-full drop-shadow-[0_15px_15px_rgba(5,67,120,255)]"
                src="/K9Units.png"
                alt="Dispatcher"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className=" h-full w-full p-3 text-whitish bg-blackish text-xl text-center">
        Los Santos Police Department
      </div>
    </>
  );
}

export default CareerPage;
