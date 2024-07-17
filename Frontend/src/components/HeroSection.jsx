import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <section className="relative w-scren h-screen bg-blackish overflow-y-hidden">
        <div className="absolute flex justify-center items-center w-[100%] h-[100%]">
          <video autoPlay muted loop playsInline className="h-[80%] w-auto">
            <source src="/gtaBgVideo.mp4" type="video/mp4" />
          </video>
        </div>

        <img
          src="/backGround.png"
          className="absolute w-screen h-screen z-30"
        ></img>
        <div className="absolute top-0 left-0 z-40">
          {/* NavSection */}
          <nav className="w-screen h-[8vh] flex justify-start items-center">
            <div className=" w-[12%] flex-col items-center pl-[7px] pt-[50px]">
              <div className="">
                <p className="leading-[40px]">
                  <span className="pt-[8px] text-[5vw] font-gtaHeadingText2 font-semibold text-whitish">
                    LSPD
                  </span>
                  <br />
                  <span className="font-gtaDescriptionText italic text-[1.4em] pl-[5px] text-cyan-400">
                    Police Agency
                  </span>
                </p>
              </div>
            </div>
            <ul className="font-gtaDescriptionText text-whitish w-[65%] h-[100%] top-[5px] flex flex-row justify-center items-center gap-[5vw] text-[1em]">
              <NavLink
                to=""
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "bg-[#49608E] p-2 rounded-full transition duration-300 "
                      : "text-white"
                  }`
                }
              >
                <li>Home</li>
              </NavLink>
              <NavLink to="/most-wanted">
                <li>Most Wanted</li>
              </NavLink>
              <NavLink to="/self-defense">
                <li>Self Defense</li>
              </NavLink>
              <NavLink to="/lost-and-found">
                <li>Lost and Found</li>
              </NavLink>
              <NavLink to="/careers">
                <li>Careers</li>
              </NavLink>
              <NavLink to="/newsSection">
                <li>News</li>
              </NavLink>
            </ul>
          </nav>
          <div className="flex h-[55vh]">
            <div className="w-[12vw] h-[100%] flex justify-between items-center ">
              <ul className="flex flex-col gap-[50px] justify-end items-center space-y-4 p-4 text-whitish font-gtaDescriptionText h-[100%]">
                <li className="rotate-[270deg] text-[1.2em]">Social Media</li>
                <div className="flex flex-col gap-[8px]">
                  <li className="bg-whitish rounded-full h-[2.7em] w-[2.7em] flex items-center justify-center">
                    <i className="fab fa-instagram text-blackish fa-lg"></i>
                  </li>
                  <li className="bg-whitish rounded-full h-[2.7em] w-[2.7em] flex items-center justify-center">
                    <i className="fab fa-twitter text-blackish fa-lg"></i>
                  </li>
                  <li className="bg-whitish rounded-full h-[2.7em] w-[2.7em] flex items-center justify-center">
                    <i className="fab fa-youtube text-blackish fa-lg"></i>
                  </li>
                </div>
              </ul>
            </div>
            <div className="flex flex-col gap-[20px] h-[90%] w-[35vh] ml-[25px]">
              <div className="h-[60%] backdrop-blur-sm bg-white/20 rounded-3xl mt-[50px]"></div>
              <div className="h-[40%] backdrop-blur-sm bg-white/20 rounded-3xl"></div>
            </div>
          </div>

          <div className=" font-gtaDescriptionText mt-[20px] w-[60vh] h-[28vh] text-whitish flex  flex-col justify-between items-start ml-[20vh] pl-[20px] pt-[10px]">
            <p className="h-[75%]">
              <span className="font-thin text-[1.8em] opacity-[65%]">
                Ready to join the
              </span>
              <br />
              <span className="font-thin text-[1.8em] opacity-[65%]">
                force?
              </span>
              <br />
              <span className="flex items-center gap-[20px] font-thin text-[2.5em] mt-[10px] w-[100%]">
                Sign Up{" "}
                <span className="bg-whitish text-blackish h-[1.5em] w-[1.5em] flex justify-center items-center rounded-full">
                  &rarr;
                </span>
              </span>
            </p>
            <div className="w-[100%] h-[25%]">
              <div className="text-blackish flex justify-between gap-[20px] w-[100%] h-[100%]">
                <NavLink
                  className="bg-blackish text-whitish border-[1px] border-whitish rounded-full w-[25%]"
                  to="/login"
                >
                  <button>Join Us</button>
                </NavLink>
                <button className="bg-blackish text-whitish border-[1px] border-whitish rounded-full w-[30%]">
                  Community
                </button>
                <NavLink 
                  className="bg-blackish text-whitish border-[1px] border-whitish rounded-full w-[45%]"
                  to="/newsSection">
                  <button>News & Updates</button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 h-[28vh] mr-[4vw]">
            <div className="flex h-[100%]">
              <span className="h-[100%] flex items-end font-gtaDescriptionText text-[11px] text-whitish">
                <div className="h-[30%]">
                  Welcome to the Los Santos Police Department's official
                  website, dedicated to serving and protecting
                  <br />
                  our vibrant city.Our committed officers work tirelessly to
                  ensure the safety and
                  <br />
                  well-being of all citizens, upholding justice and fostering
                  community trust.
                </div>
              </span>
              <span className=" p-[18px]">
                <div className="bg-blackish border-[1px] border-whitish w-[22vh] h-[100%] rounded-[2.5em]"></div>
              </span>
            </div>
          </div>
          <div className="absolute top-14 right-40 w-[10em] animate-[spin_4.5s_linear_infinite]">
            <img src="/SecurityLogo.png"></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
