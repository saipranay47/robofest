import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ROBOFEST2023 from "./images/ROBO FEST 2023.png";
import roboDance from "./images/robot-loading-dance.gif";
import Timeline from "./components/Timeline";
import Events from "./components/Events";
const navigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Events", href: "#events" },
  { name: "Timeline", href: "#" },
  { name: "Sponsors", href: "#" },
];

export default function Hero() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative  bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full">
          <main className="mx-auto mt-10 px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex flex-col xl:flex-row lg:flex-row items-cente xl:items-start lg:items-start">
            <div className="sm:text-center lg:text-left mt-10">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Indian Robot Olympaid</span>{" "}
                <br />
                <span className="block text-indigo-600 xl:inline">
                  12-August-2023
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                The Indian Robo Olympiad 2023 is a competition for engineering
                students to design and build innovative robots. Hosted by the
                Centre of Excellence in AI and Robotics at VIT-AP University,
                this event is an opportunity to showcase your skills in robotics
                and artificial intelligence. Join us and see what you can
                create!
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                  >
                    Register now
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3" id="about">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <img
              src={roboDance}
              alt="robo"
              className="max-w-lg xl:-mt-36 lg:-mt-36"
            />
          </main>

          <div className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
              <div className="">
                <div>
                  <h2 className="text-3xl font-semibold text-gray-800 uppercase tracking-wide">
                    About
                  </h2>
                  {/* 2 paras inside div, side by side in large screens and one after another in small screens */}
                  <div className="flex flex-col xl:flex-row lg:flex-row">
                    <p className="mt-3 text-base text-gray-500 mr-5">
                      IndianRoboOlympiad (IRO-2023), is being conducted by
                      Centre of Excellence in AI and Robotics at VIT-AP
                      University, Near Vijayawada, Andhra Pradesh. The
                      combination of Robotics with AI is useful in systems
                      performing complex tasks. Automation through AI and
                      Robotics had a great positive impact on the growth and
                      proft of many industries. Today the applications have
                      extended beyond Industry and has touched our personal life
                      too.
                    </p>
                    <p className="mt-3 text-base text-gray-500" id="events">
                      IRO 2023 is a competition for Engineering Students of all
                      parts of India to build a variety of robots based on
                      principles of Science, Technology, Engineering, Math,
                      Computer Science and AI. Students are encouraged to
                      design, construct, and program the robots such as
                      interactive medical robotic devices, robots that paint, do
                      artworks, play music, sing, dance, kitchen robots,
                      agriculture robots, cooking robot, customer care robots
                      etc. Students can bring any robotic kit for the
                      construction of robots and they can use any programming
                      language to program the Robots.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Events/> */}
          {/* <Timeline/> */}
        </div>
      </div>
    </div>
  );
}
