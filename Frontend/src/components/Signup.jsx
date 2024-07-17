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

function Signup() {
  // State variables to hold user input
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null); // State for error handling

  // Function to handle form submission (signup)
  const handleSignup = async (e) => {
    e.preventDefault();

    // Validate password match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Prepare user data
    const userData = {
      fullname,
      email,
      phone,
      password,
    };

    try {
      // Make a POST request to your backend API for signup
      const response = await fetch("http://localhost:8002/api/v1/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }); 

      if (response.ok) {
        console.log("Signup successful!");
      } else {
        const data = await response.json();
        setError(data.message || "Signup failed. Please try again.");
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
          <form className="w-fit h-fit" onSubmit={handleSignup}>
            <div className="flex flex-col w-full gap-[20px]">
              {/* Fullname input */}
              <div className="flex items-center h-[3.5rem]">
                <i className="fas fa-user text-blackish"></i>
                <input
                  className="w-full h-full bg-whitish border-b border-white text-blackish pl-10 py-2 rounded-[5px] focus:outline-none"
                  type="text"
                  placeholder="Fullname"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  required
                />
              </div>
            
              <div className="flex gap-[10px] w-full">
            
                <div className="flex items-center w-[60%] h-[3.5rem]">
                  <i className="fa-solid fa-envelope left-3 text-blackish"></i>
                  <input
                    className="w-full h-full bg-whitish border-b border-white text-blackish pl-10 py-2 rounded-[5px] focus:outline-none"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className=" flex items-center w-[40%] h-[3.5rem]">
                  <i className="fas fa-phone text-blackish"></i>
                  <input
                    className="w-full h-full bg-whitish border-b border-white text-blackish pl-10 py-2 rounded-[5px] focus:outline-none"
                    type="tel"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
              {/* Password and Confirm Password inputs */}
              <div className="flex gap-[10px] w-full">
                {/* Password input */}
                <div className=" flex items-center w-[50%] h-[3.5rem]">
                  <i className="fas fa-lock text-blackish"></i>
                  <input
                    className="w-full h-full bg-whitish border-b border-white text-blackish pl-10 py-2 rounded-[5px] focus:outline-none"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onClick={()=>setError(null)}
                    required
                  />
                </div>
                {/* Confirm Password input */}
                <div className=" flex items-center w-[50%] h-[3.5rem]">
                  <i className="fas fa-lock left-3 text-blackish"></i>
                  <input
                    className="w-full h-full bg-whitish border-b border-white text-blackish pl-10 py-2 rounded-[5px] focus:outline-none"
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              {/* Error message display */}
              {error && <p className="text-red-500">{error}</p>}
            </div>
            {/* Submit button */}
            <div className="w-fit h-fit p-3 flex gap-4">
              {/* Login NavLink */}
              <NavLink to="/login">
                <button className="bg-[#120658] text-whitish flex justify-center items-center cursor-pointer border-b border-black px-10 py-5 rounded-full focus:outline-none">
                  Login
                </button>
              </NavLink>
              {/* Signup button */}
              <button
                type="submit"
                className="bg-white text-blackish flex justify-center items-center cursor-pointer border-b border-white px-10 py-5 rounded-full focus:outline-none"
              >
                Signup
              </button>
            </div>
          </form>
        </article>
      </section>
    </div>
  );
}

export default Signup;
