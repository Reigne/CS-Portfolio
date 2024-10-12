import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import svg1 from "/svg1.svg";
import svg3 from "/svg3.svg";

// CSS for floating animation
const styles = {
  star: {
    animation: "float 3s ease-in-out infinite",
  },
};

const Home = () => {
  return (
    <div className=" bg-zinc-950 text-white">
      {/* Left Circle */}
      <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-3xl"></div>

      {/* Right Circle */}
      <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-3xl"></div>

      <div className=" min-h-screen overflow-hidden flex flex-col">
        {/* Star Circles */}
        {Array.from({ length: 50 }).map((_, index) => (
          <div
            key={index}
            className={`absolute bg-white rounded-full opacity-${Math.floor(
              Math.random() * 3 + 5
            )}`}
            style={{
              width: `${Math.random() * 3 + 1}px`, // Random width between 1 and 3
              height: `${Math.random() * 3 + 1}px`, // Random height between 1 and 3
              left: `${Math.random() * 100}vw`, // Random left position across the viewport width
              top: `${Math.random() * 100}vh`, // Random top position across the viewport height
              animation: `float ${Math.random() * 2 + 4}s ease-in-out infinite`, // Random float duration between 3 and 5 seconds
            }}
          ></div>
        ))}

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="flex flex-1 justify-center items-center w-full">
          <div className="flex flex-row justify-center px-80">
            <div className="w-3/6 flex justify-start items-center font-montserrat">
              <div className="flex flex-col gap-4">
                <p className="text-6xl font-bold">
                  Secure IT Solutions for a more secure environment
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida
                </p>

                <div className="px-12 py-4 w-fit rounded bg-white mt-4 shadow-lg shadow-white">
                  <p className="text-black font-bold text-lg">Email Us</p>
                </div>
              </div>
            </div>

            <div className="w-3/6 flex justify-center ">
              <img
                src={svg3}
                width={600}
                style={{
                  animation: `float ${
                    Math.random() * 1 + 10
                  }s ease-in-out infinite`, // Random float duration between 3 and 5 seconds
                }}
              />
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0);
            }
          }
        `}</style>
      </div>

      {/* services */}
      <div className="flex flex-col gap-12">
        <div className="flex flex-row px-80">
          <div className="flex flex-col gap-2 font-montserrat">
            <p className="font-bold">● SERVICES ●</p>

            <p className="font-extrabold text-4xl">Services We Offer</p>

            <p className="font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-8 px-80 font-montserrat">
          {/* Web Development Card */}
          <div className="flex flex-col gap-4 p-8 border border-zinc-700 hover:border-white rounded-xl w-1/2 transition-transform ease-in-out duration-300  transform hover:scale-105 hover:shadow-xl hover:shadow-zinc-400">
            <img src="/images/computer.png" width={50} />
            <p className="font-bold text-2xl text-white">Web Development</p>
            <p className="font-light text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Mobile Development Card */}
          <div className="flex flex-col gap-2 p-8 border border-zinc-700 hover:border-white rounded-xl w-1/2 transition-transform ease-in-out duration-300  transform hover:scale-105 hover:shadow-xl hover:shadow-zinc-400">
            <img src="/images/phone.png" width={50} />
            <p className="font-bold text-2xl text-white">Mobile Development</p>
            <p className="font-light text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 mt-40">
        <div className="flex flex-row px-80">
          <div className="flex flex-col gap-2 font-montserrat">
            <p className="font-bold">● PORTFOLIO ●</p>

            <p className="font-extrabold text-4xl">Our Finish Work</p>

            <p className="font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 px-80 font-montserrat">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
