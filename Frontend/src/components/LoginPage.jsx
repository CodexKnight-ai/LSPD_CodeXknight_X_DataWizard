import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Back = () => {
  return (
    <>
      <NavLink
        className="absolute top-3 right-7 text-white font-gtaHeadingText1 text-4xl hover:text-yellow-500"
        to="/"
      >
        <button>Back</button>
      </NavLink>
    </>
  );
};

function LoginPage() {
  // State variables to hold user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // State for error handling

  // Function to handle form submission (login)
  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      // Make a POST request to your backend API for login
      const response = await fetch("http://localhost:8002/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log("Login successful!");
      } else {
        const data = await response.json();
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div>
      <section className="h-screen w-screen overflow-hidden bg-[url('/LoginPage.png')] bg-cover bg-center flex justify-end">
        <Back />
        <article className="w-1/2 h-full flex flex-col pt-[7%] gap-3">
          <div className="w-[10rem] h-[4rem] text-dblue text-[1.1em] font-gtaDescriptionText bg-whitish rounded-full flex justify-center items-center">
            <p>Welcome!</p>
          </div>
          <p className="text-[4vw] text-whitish font-gtaHeadingText1 leading-[90px]">
            Los Santos
            <br />
            Police Department
          </p>
          <form className="w-[30vw] h-[25vh]" onSubmit={handleLogin}>
            <div className="flex flex-col w-full gap-[30px] pt-[2em]">
              <div className="flex items-center w-full h-[3.5rem]">
                <i className="fa-solid fa-envelope left-3 text-blackish"></i>
                <input
                  className="w-full h-full bg-whitish border-b border-whitish text-blackish pl-10 py-2 rounded-[5px] focus:outline-none"
                  type="text"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex items-center w-full h-[3.5rem]">
                <i className="fas fa-lock left-3 text-blackish"></i>
                <input
                  className="w-full h-full bg-whitish border-b border-whitish text-blackish pl-10 py-2 rounded-[5px] focus:outline-none"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="w-fit h-fit p-3 flex gap-4 mt-10">
              <button
                type="submit"
                className="bg-white flex justify-center items-center cursor-pointer border-b border-white text-blackish px-10 py-5 rounded-full focus:outline-none"
              >
                Login
              </button>
              <NavLink to="/signup">
                <button className="bg-[#120658] text-whitish flex justify-center items-center cursor-pointer border-b border-black px-10 py-5 rounded-full focus:outline-none">
                  Signup
                </button>
              </NavLink>
            </div>
            {/* Error message display */}
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </article>
      </section>
    </div>
  );
}

export default LoginPage;
