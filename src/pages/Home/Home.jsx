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
import BlessedLandModal from "../../components/Carousel/BlessedLandAcademyOfTaguig/BlessedLandModal";
import TUPTSchedulerModal from "../../components/Carousel/TUPT-TScheduler/TUPTSchedulerModal";
import TPModalWebsite from "../../components/Carousel/TeamPoor/TPModalWebsite";

// CSS for floating animation
const styles = {
  star: {
    animation: "float 3s ease-in-out infinite",
  },
};

const Home = () => {
  const {
    isOpen: isOpenMobile,
    onOpen: onOpenMobile,
    onOpenChange: onOpenChangeMobile,
  } = useDisclosure();

  const {
    isOpen: isOpenBlessedLand,
    onOpen: onOpenBlessedLand,
    onOpenChange: onOpenChangeBlessedLand,
  } = useDisclosure();

  const {
    isOpen: isOpenTUPTScheduler,
    onOpen: onOpenTUPTScheduler,
    onOpenChange: onOpenChangeTUPTScheduler,
  } = useDisclosure();

  const {
    isOpen: isOpenTeamPoorWebsite,
    onOpen: onOpenTeamPoorWebsite,
    onOpenChange: onOpenChangeTeamPoorWebsite,
  } = useDisclosure();

  return (
    <div className="relative bg-zinc-950 text-white overflow-hidden">
      {/* Left Circle */}
      <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-3xl"></div>

      {/* Right Circle */}
      <div className="absolute bottom-[500px] right-[-100px] w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-3xl"></div>

      <div id="home" className="min-h-screen overflow-hidden flex flex-col">
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
          <div className="flex flex-col xl:flex-row gap-10 xl:gap-4 justify-center px-10 sm:px-20 md:px-32 lg:px-40 xl:px-48">
            <div className="xl:w-3/6 flex justify-center text-center xl:text-start xl:justify-start items-center font-montserrat">
              <div className="flex flex-col justify-center items-center xl:justify-start xl:items-start gap-4">
                <p className="text-6xl font-bold">
                  Secure IT Solutions for a more secure environment
                </p>

                <p className="text-zinc-300">
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Feugiat
                  congue at porta auctor mollis aliquam dolor. Dui finibus
                  dapibus curae nisl tellus dapibus donec vestibulum.
                </p>

                <a
                  className="px-12 py-4 w-fit rounded bg-white mt-4 shadow-lg shadow-white hover:scale-105 transition-transform duration-300"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=capstone.solutions24@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-black font-bold text-lg">Email Us</p>
                </a>
              </div>
            </div>

            <div className="xl:w-3/6 flex justify-center ">
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
      <div
        id="services"
        className="flex flex-col gap-12 px-10 sm:px-20 md:px-32 lg:px-40 xl:px-48"
      >
        <div className="flex flex-row ">
          <div className="flex flex-col gap-2 font-montserrat">
            <p className="font-bold">● SERVICES ●</p>

            <p className="font-extrabold text-4xl">Services We Offer</p>

            <p className="font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-8 font-montserrat">
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

      {/* portfolio */}
      <div
        id="portfolio"
        className="flex flex-col gap-8 mt-40 px-10 sm:px-20 md:px-32 lg:px-40 xl:px-48"
      >
        <div className="flex flex-row">
          <div className="flex flex-col gap-2 font-montserrat">
            <p className="font-bold">● PORTFOLIO ●</p>

            <p className="font-extrabold text-4xl">Our Finish Work</p>

            <p className="font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 font-montserrat">
          {/* scheduler */}
          <a
            onClick={onOpenTUPTScheduler}
            className="flex flex-col bg-zinc-900 overflow-hidden rounded hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
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

                <TUPTSchedulerModal
                  isOpen={isOpenTUPTScheduler}
                  onOpenChange={onOpenChangeTUPTScheduler}
                />
              </div>
            </div>
          </a>

          {/* blessed land */}
          <a
            onClick={onOpenBlessedLand}
            className="flex flex-col bg-zinc-900 overflow-hidden rounded hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
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

                <BlessedLandModal
                  isOpen={isOpenBlessedLand}
                  onOpenChange={onOpenChangeBlessedLand}
                />
              </div>
            </div>
          </a>

          {/* web teampoor */}
          <a
            onClick={onOpenTeamPoorWebsite}
            className="flex flex-col bg-zinc-900 overflow-hidden rounded hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
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
                  TEAMPOOR - Motorcycle Parts & Services (Website)
                </p>

                <p className="font-light text-xs">
                  TeamPoor System for Managing Motorcycle Parts and Services, a
                  sophisticated web-based and mobile application designed to
                  transform the management of motorcycle shops. The system aims
                  to enhance workflow efficiency, minimize manual processes,
                  boost productivity, and elevate service delivery and customer
                  satisfaction within the motorcycle shop environment.
                </p>

                <TPModalWebsite
                  isOpen={isOpenTeamPoorWebsite}
                  onOpenChange={onOpenChangeTeamPoorWebsite}
                />
              </div>
            </div>
          </a>

          {/* mobile teampoor */}
          <a
            className="flex flex-col bg-zinc-900 overflow-hidden rounded hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={onOpenMobile}
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
                  TEAMPOOR - Motorcycle Parts & Services (Mobile App)
                </p>

                <p className="font-light text-xs">
                  TeamPoor System for Managing Motorcycle Parts and Services, a
                  sophisticated web-based and mobile application designed to
                  transform the management of motorcycle shops. The system aims
                  to enhance workflow efficiency, minimize manual processes,
                  boost productivity, and elevate service delivery and customer
                  satisfaction within the motorcycle shop environment.
                </p>

                <Mobile
                  isOpen={isOpenMobile}
                  onOpenChange={onOpenChangeMobile}
                />
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* teams */}
      <div
        id="ourteam"
        className="flex flex-col gap-8 mt-32 px-10 sm:px-20 md:px-32 lg:px-40 xl:px-48"
      >
        <div className="flex flex-row">
          <div className="flex flex-col gap-2 font-montserrat">
            <p className="font-bold">● TEAMS ●</p>

            <p className="font-extrabold text-4xl">Our Teams</p>

            <p className="font-light">
              These people work on making our project best.
            </p>
          </div>
        </div>

        {/* <div className="grid grid-cols-4 gap-4 font-montserrat">
          <div className="bg-zinc-900 rounded overflow-hidden hover:scale-105 transition-transform duration-300">
            <img src="/images/teams/reigne.jpg" />

            <div className="flex flex-col justify-center items-center p-4 space-y-1">
              <p className="font-bold">ELIJA REIGNE MONTERONA</p>

              <p className="text-sm">Mobile Developer</p>
            </div>
          </div>
          <div className="bg-zinc-900 rounded overflow-hidden hover:scale-105 transition-transform duration-300">
            <img src="/images/teams/frans.jpg" />

            <div className="flex flex-col justify-center items-center p-4 space-y-1">
              <p className="font-bold">FRANS ADRYHEL MANLANGIT</p>

              <p className="text-sm">Mobile Developer</p>
            </div>
          </div>
          <div className="bg-zinc-900 rounded overflow-hidden hover:scale-105 transition-transform duration-300">
            <img src="/images/teams/daniel.jpg" />

            <div className="flex flex-col justify-center items-center p-4 space-y-1">
              <p className="font-bold">DANIEL ANGELO RODRIGUEZ</p>

              <p className="text-sm">Website Developer</p>
            </div>
          </div>
          <div className="bg-zinc-900 rounded overflow-hidden hover:scale-105 transition-transform duration-300">
            <img src="/images/teams/novemger.jpg" />

            <div className="flex flex-col justify-center items-center p-4 space-y-1">
              <p className="font-bold">NOVEMGER PASCUA</p>

              <p className="text-sm">Website Developer</p>
            </div>
          </div>

        </div> */}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 font-montserrat">
          <div className=" rounded overflow-hidden hover:scale-105 transition-transform duration-300 p-8">
            <img src="/images/teams/reigne.jpg" className="rounded-full" />

            <div className="flex flex-col justify-center items-center p-4 space-y-1">
              <p className="font-bold">ELIJA REIGNE MONTERONA</p>

              <p className="text-sm text-zinc-500">Mobile Developer</p>
            </div>
          </div>
          <div className="rounded overflow-hidden hover:scale-105 transition-transform duration-300 p-8">
            <img src="/images/teams/frans.jpg" className="rounded-full" />

            <div className="flex flex-col justify-center items-center p-4 space-y-1">
              <p className="font-bold">FRANS ADRYHEL MANLANGIT</p>

              <p className="text-sm text-zinc-500">Mobile Developer</p>
            </div>
          </div>
          <div className=" rounded overflow-hidden hover:scale-105 transition-transform duration-300 p-8">
            <img src="/images/teams/daniel.jpg" className="rounded-full" />

            <div className="flex flex-col justify-center items-center p-4 space-y-1">
              <p className="font-bold">DANIEL ANGELO RODRIGUEZ</p>

              <p className="text-sm text-zinc-500">Website Developer</p>
            </div>
          </div>
          <div className=" rounded overflow-hidden hover:scale-105 transition-transform duration-300 p-8">
            <img src="/images/teams/novemger.jpg" className="rounded-full" />

            <div className="flex flex-col justify-center items-center p-4 space-y-1">
              <p className="font-bold">NOVEMGER PASCUA</p>

              <p className="text-sm text-zinc-500">Website Developer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6"></div>
    </div>
  );
};

export default Home;
