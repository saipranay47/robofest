import React from 'react'
import { Fragment } from "react";
import ROBOFEST2023 from "../images/ROBO FEST 2023.png";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Events", href: "#events" },
  // { name: "Timeline", href: "#" },
  // { name: "Sponsors", href: "#" },
];
function Navbar() {
  return (
    <Popover className="sticky top-0 bg-white/40 z-10 backdrop-blur-md">
      <div className="relative top-0 px-4 py-6 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <nav
          className=" flex items-center justify-between sm:h-10 "
          aria-label="Global"
        >
          <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
            <div className="flex w-full items-center justify-between md:w-auto">
              <a href="#">
                <span className="sr-only">RoboFest</span>
                <img
                  alt="Your Company"
                  className="h-8 w-auto sm:h-10"
                  src={ROBOFEST2023}
                />
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-medium text-gray-500 hover:text-gray-900"
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://forms.gle/bmhRfRXG3uDD82kB8"
              target="_blank"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Register Now
            </a>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                <img className="h-8 w-auto" src={ROBOFEST2023} alt="" />
              </div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close main menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <a
              href="https://forms.gle/bmhRfRXG3uDD82kB8"
              target="_blank"
              className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
            >
              Register Now
            </a>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default Navbar