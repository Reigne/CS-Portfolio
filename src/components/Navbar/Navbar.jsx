import React from "react";

const Navbar = () => {
  return (
    // <div className="relative bg-zinc-950 text-white px-5 overflow-hidden">
    //   {/* Left Circle */}
    //   <div className="absolute top-[-100px] left-[-150px] w-[300px] h-[300px] bg-white opacity-20 rounded-full blur-3xl"></div>

    //   {/* Right Circle */}
    //   <div className="absolute bottom-[-100px] right-[-150px] w-[200px] h-[200px] bg-white opacity-20 rounded-full blur-3xl"></div>

    //   <div className="flex flex-row justify-between items-center border-b border-zinc-900 py-5 px-80">
    //     <div className="flex flex-row justify-start items-center gap-4 w-4/12">
    //       <img
    //         src="/images/logo.jpg"
    //         height={40}
    //         width={40}
    //         className="rounded-full shadow shadow-zinc-50"
    //       />
    //       <h1 className="font-montserrat font-bold text-lg">
    //         Capstone Solutions
    //       </h1>
    //     </div>

    //     <div className="flex flex-row justify-center items-center gap-8 w-4/12">
    //       <div className="font-montserrat relative group">
    //         Home
    //         <span className="rounded block absolute left-1/2 bottom-0 h-0.5 bg-white w-full transform -translate-x-1/2 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
    //       </div>
    //       <div className="font-montserrat relative group">
    //         About
    //         <span className="rounded block absolute left-1/2 bottom-0 h-0.5 bg-white w-full transform -translate-x-1/2 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
    //       </div>
    //       <div className="font-montserrat relative group">
    //         Contact
    //         <span className="rounded block absolute left-1/2 bottom-0 h-0.5 bg-white w-full transform -translate-x-1/2 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
    //       </div>
    //     </div>

    //     <div className="flex flex-row justify-end w-4/12">
    //       <div className="border rounded-full border-zinc-700 px-8 py-2">
    //         <p className="font-montserrat">Hire Us</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className=" text-white px-80">
      <div className="flex flex-row justify-between items-center py-5">
        <div className="flex flex-row justify-start items-center gap-4 w-4/12">
          <img
            src="/images/logo.jpg"
            height={40}
            width={40}
            className="rounded-full shadow shadow-zinc-50"
          />
          <h1 className="font-montserrat font-bold text-lg">
            Capstone Solutions
          </h1>
        </div>

        <div className="flex flex-row justify-center items-center gap-8 w-4/12">
          <div className="font-montserrat relative group">
            Home
            <span className="rounded block absolute left-1/2 bottom-0 h-0.5 bg-white w-full transform -translate-x-1/2 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </div>
          <div className="font-montserrat relative group">
            About
            <span className="rounded block absolute left-1/2 bottom-0 h-0.5 bg-white w-full transform -translate-x-1/2 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </div>
          <div className="font-montserrat relative group">
            Contact
            <span className="rounded block absolute left-1/2 bottom-0 h-0.5 bg-white w-full transform -translate-x-1/2 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </div>
        </div>

        <div className="flex flex-row justify-end w-4/12">
          <div className="border rounded-full border-zinc-700 px-8 py-2">
            <p className="font-montserrat">Hire Us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
