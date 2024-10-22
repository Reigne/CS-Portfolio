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
import TUPTSchedulerModalMobile from "../../components/Carousel/TUPT-TScheduler/TUPTSchedulerModalMobile";
import BlessedLandModalMobile from "../../components/Carousel/BlessedLandAcademyOfTaguig/BlessedLandModalMobile";
import { FaGithub } from "react-icons/fa";

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
    isOpen: isOpenBlessedLandMobile,
    onOpen: onOpenBlessedLandMobile,
    onOpenChange: onOpenChangeBlessedLandMobile,
  } = useDisclosure();

  const {
    isOpen: isOpenTUPTScheduler,
    onOpen: onOpenTUPTScheduler,
    onOpenChange: onOpenChangeTUPTScheduler,
  } = useDisclosure();

  const {
    isOpen: isOpenTUPTSchedulerMobile,
    onOpen: onOpenTUPTSchedulerMobile,
    onOpenChange: onOpenChangeTUPTSchedulerMobile,
  } = useDisclosure();

  const {
    isOpen: isOpenTeamPoorWebsite,
    onOpen: onOpenTeamPoorWebsite,
    onOpenChange: onOpenChangeTeamPoorWebsite,
  } = useDisclosure();

  return (
    <div className="relative bg-zinc-950 text-white overflow-hidden p-4 ">
      {/* Left Circle */}
      <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-3xl"></div>

      {/* Right Circle */}
      <div className="absolute top-[600px] right-[-100px] w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-3xl"></div>

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
                  Elevate Your Vision with App Development!
                </p>

                <p className="text-zinc-300">
                  We offer comprehensive web and mobile application development
                  services that are specifically designed to cater to the
                  diverse needs of everyone, ensuring that our solutions are
                  both accessible and user-friendly for all individuals and
                  businesses.
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
        <div className="flex flex-row">
          <div className="flex flex-col gap-2 font-montserrat">
            <p className="font-bold">● SERVICES ●</p>

            <p className="font-extrabold text-4xl">Services We Offer</p>

            <p className="font-light">
              Discover a range of tailored solutions designed to meet your
              unique needs. From web and mobile development to digital marketing
              and consulting, our expert team is dedicated to delivering
              exceptional results that drive growth and success for your
              business.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 font-montserrat">
          {/* Web Development Card */}
          <div className="flex flex-col gap-4 p-8 border border-zinc-700 hover:border-white rounded-xl  transition-transform ease-in-out duration-300  transform hover:scale-105 hover:shadow-xl hover:shadow-zinc-400">
            <img src="/images/computer.png" width={50} />
            <p className="font-bold text-2xl text-white">Web Development</p>
            <p className="font-light text-white">
              At Capstone Solutions, we specialize in creating dynamic and
              responsive websites tailored to meet your unique business needs.
              Our team of skilled developers combines creativity with technical
              expertise to deliver high-quality web solutions that drive
              engagement and conversions.
            </p>

            <p className="font-light text-white">
              From e-commerce platforms to informative blogs, we offer
              end-to-end development services, including custom website design,
              content management systems, and seamless integrations with
              third-party applications. Our commitment to user experience
              ensures that every site we create is intuitive, mobile-friendly,
              and optimized for search engines.
            </p>
          </div>

          {/* Mobile Development Card */}
          <div className="flex flex-col gap-2 p-8 border border-zinc-700 hover:border-white rounded-xl  transition-transform ease-in-out duration-300  transform hover:scale-105 hover:shadow-xl hover:shadow-zinc-400">
            <img src="/images/phone.png" width={50} />
            <p className="font-bold text-2xl text-white">Mobile Development</p>
            <p className="font-light text-white">
              At Capstone Solutions, we offer cutting-edge mobile development
              services that empower your business to thrive in the digital
              landscape. Our team of experienced developers specializes in
              creating intuitive, high-performance mobile applications for
              Android platforms.
            </p>

            <p className="font-light text-white">
              We focus on user-centered design, ensuring that every app we
              develop provides an engaging and seamless experience for your
              users. Whether you need a native app or a cross-platform solution,
              we tailor our approach to meet your specific goals and
              requirements.
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

            <p className="font-extrabold text-4xl">Our Projects</p>

            <p className="font-light">
              Explore our diverse portfolio showcasing innovative projects that
              highlight our expertise and commitment to quality. From dynamic
              websites to robust mobile applications, each project reflects our
              dedication to delivering impactful solutions that meet our
              clients' unique needs and drive their success.
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
                <p className="font-bold">TUPT-T Scheduler (Website)</p>

                <p className="font-light text-xs">
                  The TUP-T Sports and eSports Scheduler is a dynamic platform
                  designed to streamline the organization and management of
                  sports and esports events for students and teams. With an
                  intuitive interface, it allows users to easily create, update,
                  and manage schedules for various activities, including
                  tournaments, practices, and matches.
                </p>

                <TUPTSchedulerModal
                  isOpen={isOpenTUPTScheduler}
                  onOpenChange={onOpenChangeTUPTScheduler}
                />
              </div>
            </div>
          </a>

          {/* scheduler Mobile */}
          <a
            onClick={onOpenTUPTSchedulerMobile}
            className="flex flex-col bg-zinc-900 overflow-hidden rounded hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img src="/images/tupt-scheduler/mobile-1.png" />

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
                <p className="font-bold">TUPT-T Scheduler (Mobile App)</p>

                <p className="font-light text-xs">
                  The TUP-T Sports and eSports Scheduler is a dynamic platform
                  designed to streamline the organization and management of
                  sports and esports events for students and teams. With an
                  intuitive interface, it allows users to easily create, update,
                  and manage schedules for various activities, including
                  tournaments, practices, and matches.
                </p>

                <TUPTSchedulerModalMobile
                  isOpen={isOpenTUPTSchedulerMobile}
                  onOpenChange={onOpenChangeTUPTSchedulerMobile}
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
                <p className="font-bold">
                  Blessed Land Academy of Taguig (Website)
                </p>

                <p className="font-light text-xs">
                  The Blessed Land Academy of Taguig web system is a dynamic
                  online platform designed to enhance communication and
                  streamline operations for students, parents, and staff. This
                  comprehensive system features user-friendly interfaces for
                  enrollment, class schedules, and academic resources, enabling
                  easy access to vital information.
                </p>

                <BlessedLandModal
                  isOpen={isOpenBlessedLand}
                  onOpenChange={onOpenChangeBlessedLand}
                />
              </div>
            </div>
          </a>

          {/* blessed land mobile */}
          <a
            onClick={onOpenBlessedLandMobile}
            className="flex flex-col bg-zinc-900 overflow-hidden rounded hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img src="/images/blessed-land/mobile-1.png" />

            <div className="p-4 flex flex-col gap-3">
              <div className="flex flex-row gap-1 flex-wrap">
                <div className="bg-yellow-500/10 w-fit px-2 rounded-full flex items-center">
                  <p className="text-[10px] text-yellow-500">Mobile</p>
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
                <p className="font-bold">
                  Blessed Land Academy of Taguig (Mobile App)
                </p>

                <p className="font-light text-xs">
                  The Blessed Land Academy of Taguig web system is a dynamic
                  online platform designed to enhance communication and
                  streamline operations for students, parents, and staff. This
                  comprehensive system features user-friendly interfaces for
                  enrollment, class schedules, and academic resources, enabling
                  easy access to vital information.
                </p>

                <BlessedLandModalMobile
                  isOpen={isOpenBlessedLandMobile}
                  onOpenChange={onOpenChangeBlessedLandMobile}
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

      <div className="flex flex-col gap-8">
        <div
          id="skills"
          className="flex flex-col gap-8 mt-32 px-10 sm:px-20 md:px-32 lg:px-40 xl:px-48"
        >
          <div className="flex flex-row">
            <div className="flex flex-col gap-2 font-montserrat">
              <p className="font-bold">● SKILLS ●</p>

              <p className="font-extrabold text-4xl">Our Technology Stack</p>

              <p className="font-light">
                Tools and programming languages we utilize.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 bg-zinc-950 overflow-hidden">
          <div className="flex items-center gap-32 p-8 space-x-8 animate-marquee hover:pause-marquee">
            {/* First set of logos */}
            <img
              className="grayscale hover:grayscale-0"
              src="/images/tools/MongoDB-white.png"
              width={250}
            />
            <img
              className="grayscale hover:grayscale-0"
              src="/images/tools/express.png"
              width={80}
            />
            <img
              className="grayscale hover:grayscale-0"
              src="/images/tools/reactjs.png"
              width={80}
            />
            <img
              className="grayscale hover:grayscale-0"
              src="/images/tools/nodejs.png"
              width={250}
            />
            <img
              className="grayscale hover:grayscale-0"
              src="/images/tools/tailwindcss-white.svg"
              width={250}
            />
            <img
              className="grayscale hover:grayscale-0"
              src="/images/tools/laravel.png"
              width={250}
            />

            {/* Duplicate logos for seamless scrolling */}
            <img
              className="grayscale hover:grayscale-0"
              src="/images/tools/MongoDB-white.png"
              width={250}
            />
            <img
              className="grayscale hover:grayscale-0"
              src="/images/tools/express.png"
              width={80}
            />
            <img
              className="grayscale hover:grayscale-0"
              src="/images/tools/reactjs.png"
              width={80}
            />
            <img
              className="grayscale hover:grayscale-0"
              src="/images/tools/nodejs.png"
              width={250}
            />
            <img
              className="grayscale hover:grayscale-0"
              src="/images/tools/tailwindcss-white.svg"
              width={250}
            />
            <img
              className="grayscale hover:grayscale-0"
              src="/images/tools/laravel.png"
              width={250}
            />
          </div>
        </div>

        {/* languages */}
        <div className="flex flex-col gap-4 bg-zinc-950 overflow-hidden">
          <div className="flex items-center gap-52 p-8 space-x-8 animate-marquee hover:pause-marquee">
            {/* First set of logos */}
            <img
              className="grayscale hover:grayscale-0"
              src="/images/languages/php.png"
              width={110}
            />
            <img
              className="grayscale hover:grayscale-0"
              src="/images/languages/html.png"
              width={80}
            />
            <img
              className="grayscale hover:grayscale-0"
              src="/images/languages/javascript.png"
              width={80}
            />
            <img
              className="grayscale hover:grayscale-0"
              src="/images/languages/css.png"
              width={80}
            />
            <img
              className="grayscale hover:grayscale-0"
              src="/images/languages/typescript.png"
              width={80}
            />
            <img
              className="grayscale hover:grayscale-0"
              src="/images/languages/python.png"
              width={80}
            />

            <img
              className="grayscale hover:grayscale-0"
              src="/images/languages/php.png"
              width={110}
            />
            <img
              className="grayscale hover:grayscale-0"
              src="/images/languages/html.png"
              width={80}
            />
            <img
              className="grayscale hover:grayscale-0"
              src="/images/languages/javascript.png"
              width={80}
            />
            <img
              className="grayscale hover:grayscale-0"
              src="/images/languages/css.png"
              width={80}
            />
            <img
              className="grayscale hover:grayscale-0"
              src="/images/languages/typescript.png"
              width={80}
            />
            <img
              className="grayscale hover:grayscale-0"
              src="/images/languages/python.png"
              width={80}
            />
          </div>
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

            <p className="font-extrabold text-4xl">Our Team</p>

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

        <div className="flex flex-wrap justify-center gap-4 font-montserrat">
          <div className="flex flex-col items-center justify-center gap-3 rounded overflow-hidden hover:scale-105 transition-transform duration-300 p-8 basis-full sm:basis-1/2 lg:basis-1/4">
            <img
              src="/images/teams/formal-reigne.JPG"
              className="rounded-full"
            />
            <div className="flex flex-col justify-center items-center space-y-1">
              <p className="text-md text-zinc-500">Mobile Developer</p>
              <p className="font-bold">ELIJA REIGNE MONTERONA</p>
            </div>
            <a
              href="https://github.com/Reigne"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} color="#71717a" />
            </a>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 rounded overflow-hidden hover:scale-105 transition-transform duration-300 p-8 basis-full sm:basis-1/2 lg:basis-1/4">
            <img
              src="/images/teams/formal-frans.JPG"
              className="rounded-full"
            />
            <div className="flex flex-col justify-center items-center space-y-1">
              <p className="text-md text-zinc-500">Mobile Developer</p>
              <p className="font-bold">FRANS ADRYHEL MANLANGIT</p>
            </div>
            <a
              href="https://github.com/FransManlangit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} color="#71717a" />
            </a>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 rounded overflow-hidden hover:scale-105 transition-transform duration-300 p-8 basis-full sm:basis-1/2 lg:basis-1/4">
            <img
              src="/images/teams/formal-daniel.JPG"
              className="rounded-full"
            />
            <div className="flex flex-col justify-center items-center space-y-1">
              <p className="text-md text-zinc-500">Website Developer</p>
              <p className="font-bold">DANIEL ANGELO RODRIGUEZ</p>
            </div>
            <a
              href="https://github.com/d4Nc0D31902"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} color="#71717a" />
            </a>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 rounded overflow-hidden hover:scale-105 transition-transform duration-300 p-8 basis-full sm:basis-1/2 lg:basis-1/4">
            <img src="/images/teams/formal-nov.JPG" className="rounded-full" />
            <div className="flex flex-col justify-center items-center space-y-1">
              <p className="text-md text-zinc-500">Website Developer</p>
              <p className="font-bold">NOVEMGER PASCUA</p>
            </div>
            <a
              href="https://github.com/XdebronneX"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} color="#71717a" />
            </a>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 rounded overflow-hidden hover:scale-105 transition-transform duration-300 p-8 basis-full sm:basis-1/2 lg:basis-1/4">
            <img src="/images/teams/formal-ian.JPG" className="rounded-full" />
            <div className="flex flex-col justify-center items-center space-y-1">
              <p className="text-md text-zinc-500">Website Developer</p>
              <p className="font-bold">IAN KHENN MAGAT</p>
            </div>
            <a
              href="https://github.com/WatchingDino"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} color="#71717a" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6"></div>
    </div>
  );
};

export default Home;
