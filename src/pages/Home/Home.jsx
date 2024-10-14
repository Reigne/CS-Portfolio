import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import svg1 from "/svg1.svg";
import svg3 from "/svg3.svg";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Image,
} from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Mobile from "../../components/Carousel/TeamPoor/TPModalMobile";

// CSS for floating animation
const styles = {
  star: {
    animation: "float 3s ease-in-out infinite",
  },
};

const Home = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="relative bg-zinc-950 text-white overflow-hidden">
      {/* Left Circle */}
      <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-3xl"></div>

      {/* Right Circle */}
      <div className="absolute bottom-[500px] right-[-100px] w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-3xl"></div>

      <div className="min-h-screen overflow-hidden flex flex-col">
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
          {/* scheduler */}
          <div className="flex flex-col bg-zinc-900 overflow-hidden rounded hover:scale-105 transition-transform duration-300">
            <img src="/images/proj-b2.jpg" />

            <div className="p-4 flex flex-col gap-3">
              <div className="flex flex-row gap-1 flex-wrap">
                <div className="bg-red-500/10 w-fit px-2 rounded-full flex items-center">
                  <p className="text-[10px] text-red-500">Website</p>
                </div>

                <div className="bg-red-500/10 w-fit px-2 rounded-full flex items-center">
                  <p className="text-[10px] text-red-500">MongoDB</p>
                </div>

                <div className="bg-red-500/10 w-fit px-2 rounded-full flex items-center">
                  <p className="text-[10px] text-red-500">Express</p>
                </div>

                <div className="bg-red-500/10 w-fit px-2 rounded-full flex items-center">
                  <p className="text-[10px] text-red-500">React JS</p>
                </div>

                <div className="bg-red-500/10 w-fit px-2 rounded-full flex items-center">
                  <p className="text-[10px] text-red-500">Node JS</p>
                </div>
              </div>

              <div className="space-y-1">
                <p className="font-bold">TUPT-T Scheduler</p>

                <p className="font-light text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>

          {/* blessed land */}
          <div className="flex flex-col bg-zinc-900 overflow-hidden rounded hover:scale-105 transition-transform duration-300">
            <img src="/images/proj-a1.png" />

            <div className="p-4 flex flex-col gap-3">
              <div className="flex flex-row gap-1 flex-wrap">
                <div className="bg-yellow-500/10 w-fit px-2 rounded-full flex items-center">
                  <p className="text-[10px] text-yellow-500">Website</p>
                </div>

                <div className="bg-yellow-500/10 w-fit px-2 rounded-full flex items-center">
                  <p className="text-[10px] text-yellow-500">MongoDB</p>
                </div>

                <div className="bg-yellow-500/10 w-fit px-2 rounded-full flex items-center">
                  <p className="text-[10px] text-yellow-500">Express</p>
                </div>

                <div className="bg-yellow-500/10 w-fit px-2 rounded-full flex items-center">
                  <p className="text-[10px] text-yellow-500">React JS</p>
                </div>

                <div className="bg-yellow-500/10 w-fit px-2 rounded-full flex items-center">
                  <p className="text-[10px] text-yellow-500">Node JS</p>
                </div>
              </div>

              <div className="space-y-1">
                <p className="font-bold">Blessed Land Academy of Taguig</p>

                <p className="font-light text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>

          {/* web teampoor */}
          <div className="flex flex-col bg-zinc-900 overflow-hidden rounded hover:scale-105 transition-transform duration-300">
            <img src="/images/proj-c1.png" />

            <div className="p-4 flex flex-col gap-3">
              <div className="flex flex-row gap-1 flex-wrap">
                <div className="bg-red-500/10 w-fit px-2 rounded-full flex items-center">
                  <p className="text-[10px] text-red-500">Website</p>
                </div>

                <div className="bg-red-500/10 w-fit px-2 rounded-full flex items-center">
                  <p className="text-[10px] text-red-500">MongoDB</p>
                </div>

                <div className="bg-red-500/10 w-fit px-2 rounded-full flex items-center">
                  <p className="text-[10px] text-red-500">Express</p>
                </div>

                <div className="bg-red-500/10 w-fit px-2 rounded-full flex items-center">
                  <p className="text-[10px] text-red-500">React JS</p>
                </div>

                <div className="bg-red-500/10 w-fit px-2 rounded-full flex items-center">
                  <p className="text-[10px] text-red-500">Node JS</p>
                </div>
              </div>

              <div className="space-y-1">
                <p className="font-bold">
                  TEAMPOOR - Motorcycle Parts & Services
                </p>

                <p className="font-light text-xs">
                  TeamPoor System for Managing Motorcycle Parts and Services, a
                  sophisticated web-based and mobile application designed to
                  transform the management of motorcycle shops. The system aims
                  to enhance workflow efficiency, minimize manual processes,
                  boost productivity, and elevate service delivery and customer
                  satisfaction within the motorcycle shop environment.
                </p>
              </div>
            </div>
          </div>

          {/* web teampoor */}
          <a
            className="flex flex-col bg-zinc-900 overflow-hidden rounded hover:scale-105 transition-transform duration-300"
            onClick={onOpen}
          >
            {/* <img src="/images/proj-d1.png" /> */}

            <Image
              width="100%"
              src="/images/proj-d1.png"
              className="w-full rounded-none"
            />

            <div className="p-4 flex flex-col gap-3">
              <div className="flex flex-row gap-1 flex-wrap">
                <div className="bg-red-500/10 w-fit px-2 rounded-full flex items-center">
                  <p className="text-[10px] text-red-500">Mobile</p>
                </div>

                <div className="bg-red-500/10 w-fit px-2 rounded-full flex items-center">
                  <p className="text-[10px] text-red-500">MongoDB</p>
                </div>

                <div className="bg-red-500/10 w-fit px-2 rounded-full flex items-center">
                  <p className="text-[10px] text-red-500">Express</p>
                </div>

                <div className="bg-red-500/10 w-fit px-2 rounded-full flex items-center">
                  <p className="text-[10px] text-red-500">React JS</p>
                </div>

                <div className="bg-red-500/10 w-fit px-2 rounded-full flex items-center">
                  <p className="text-[10px] text-red-500">Node JS</p>
                </div>
              </div>

              <div className="space-y-1">
                <p className="font-bold">
                  TEAMPOOR - Motorcycle Parts & Services
                </p>

                <p className="font-light text-xs">
                  TeamPoor System for Managing Motorcycle Parts and Services, a
                  sophisticated web-based and mobile application designed to
                  transform the management of motorcycle shops. The system aims
                  to enhance workflow efficiency, minimize manual processes,
                  boost productivity, and elevate service delivery and customer
                  satisfaction within the motorcycle shop environment.
                </p>

                <Mobile isOpen={isOpen} onOpenChange={onOpenChange} />
              </div>
            </div>
          </a>
        </div>

        <div className="mt-2"></div>
      </div>
    </div>
  );
};

export default Home;
