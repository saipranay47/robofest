import React from 'react'
import Robosoce from "../images/robosoce.jpeg";
import Robofight from "../images/robofight.jpeg";
import Robokabbadi from "../images/robokabbadi.avif";
import robogame from "../images/robogame.png";

function Events() {
  return (
    <div id="events">
      <h1 className="lg:text-5xl text-2xl p-2 text-center font-bold">
        RoboFest Events: <br /> A Creative Convergence of Coding, Art, and
        Robotics
      </h1>
      <section
        aria-labelledby="feature-five"
        id="feature-five"
        class="bg-white mb-10"
      >
        <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:flex">
          <div class="">
            <div class=" top-5 pt-8 pb-5 lg:sticky">
              <div className="flex flex-wrap">
                <div class="lg:pr-24 md:pr-12 lg:max-w-2xl">
                  <div>
                    <p class="text-2xl font-medium tracking-tight text-black sm:text-4xl ">
                      Robo Soccer:
                    </p>
                    <p class="max-w-34xl mt-4 text-lg tracking-tight text-gray-600">
                      Get ready for the action-packed Robo Soccer event, where
                      teams compete using their specially designed robots in a
                      soccer-like game. These robots, controlled manually by
                      human operators, maneuver across the field, dribbling the
                      ball, passing to teammates, and aiming to score goals in
                      the opponent's net. With a combination of strategic
                      gameplay and precise robot control, teams battle it out to
                      showcase their skills in this futuristic sport. The event
                      combines elements of robotics, teamwork, and
                      sportsmanship, creating an engaging and thrilling
                      experience for both participants and spectators.
                    </p>
                  </div>
                  <div class="flex flex-col items-center justify-center gap-3 mt-5 lg:flex-row lg:justify-start">
                    <a
                      href="#"
                      class="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-indigo-600 border-2 border-indigo-600 rounded-full nline-flex hover:bg-transparent hover:border-indigo-600 hover:text-indigo-600 focus:outline-none lg:w-auto focus-visible:outline-indigo-600 text-sm focus-visible:ring-indigo-600"
                    >
                      Register Now
                    </a>
                    {/* <a
                      href="#"
                      class="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                    >
                      Learn more
                      <span aria-hidden="true"> → </span>
                    </a> */}
                  </div>
                </div>
                <img
                  src={Robosoce}
                  alt=""
                  className="max-w-lg lg:rounded-lg w-full lg:p-0 p-2 rounded-2xl border shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:flex">
          <div class="">
            <div class=" top-5 pt-8 pb-5 lg:sticky">
              <div className="flex flex-wrap">
                <img
                  src={Robofight}
                  alt=""
                  className="max-w-lg lg:rounded-lg w-full lg:p-0 p-2 rounded-2xl border shadow-sm"
                />
                <div class="lg:pl-24 md:pl-12 lg:max-w-2xl">
                  <div>
                    <p class="text-2xl font-medium tracking-tight text-black sm:text-4xl ">
                      Robo Fight:
                    </p>
                    <p class="max-w-34xl mt-4 text-lg tracking-tight text-gray-600">
                      Prepare for heart-pounding battles in the Robo Fight
                      event, where two robots go head-to-head in intense combat.
                      These robotic gladiators will engage in thrilling clashes,
                      showcasing their strength, agility, and strategic prowess.
                      The objective is simple: be the last robot standing.
                      Participants will unleash their robots' weaponry and
                      maneuvering abilities to outsmart and overpower their
                      opponents. Spectators will witness sparks fly and gears
                      clash as these mechanical warriors vie for supremacy.
                    </p>
                  </div>
                  <div class="flex flex-col items-center justify-center gap-3 mt-5 lg:flex-row lg:justify-start">
                    <a
                      href="#"
                      class="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-indigo-600 border-2 border-indigo-600 rounded-full nline-flex hover:bg-transparent hover:border-indigo-600 hover:text-indigo-600 focus:outline-none lg:w-auto focus-visible:outline-indigo-600 text-sm focus-visible:ring-indigo-600"
                    >
                      Register Now
                    </a>
                    {/* <a
                      href="#"
                      class="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                    >
                      Learn more
                      <span aria-hidden="true"> → </span>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:flex">
          <div class="">
            <div class=" top-5 pt-8 pb-5 lg:sticky">
              <div className="flex flex-wrap">
                <div class="lg:pr-24 md:pr-12 lg:max-w-2xl">
                  <div>
                    <p class="text-2xl font-medium tracking-tight text-black sm:text-4xl ">
                      Robo Kabaddi:
                    </p>
                    <p class="max-w-34xl mt-4 text-lg tracking-tight text-gray-600">
                      Experience the electrifying fusion of Kabaddi and
                      cutting-edge robotics in Robo Kabaddi. Teams showcase
                      their robots' agility, strategy, and power as they raid
                      opponents' territories, aiming to transfer cubes without
                      being pushed out. Strategic decision-making, teamwork, and
                      swift reactions are essential to gain an advantage.
                      Witness the captivating spectacle of intense competition
                      and futuristic technology in Robo Kabaddi.
                    </p>
                  </div>
                  <div class="flex flex-col items-center justify-center gap-3 mt-5 lg:flex-row lg:justify-start">
                    <a
                      href="#"
                      class="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-indigo-600 border-2 border-indigo-600 rounded-full nline-flex hover:bg-transparent hover:border-indigo-600 hover:text-indigo-600 focus:outline-none lg:w-auto focus-visible:outline-indigo-600 text-sm focus-visible:ring-indigo-600"
                    >
                      Register Now
                    </a>
                    {/* <a
                      href="#"
                      class="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                    >
                      Learn more
                      <span aria-hidden="true"> → </span>
                    </a> */}
                  </div>
                </div>
                <img
                  src={Robokabbadi}
                  alt=""
                  className="max-w-lg lg:rounded-lg w-full lg:p-0 p-2 rounded-2xl border shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section
        aria-labelledby="feature-five"
        id="feature-five"
        class="bg-white my-10"
      >
        <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:flex">
          <div class="lg:w-1/2">
            <div class="lg:sticky">
              <div>
                <div class="lg:pr-24 md:pr-12">
                  <div>
                    <p class="text-2xl font-medium tracking-tight text-black sm:text-4xl ">
                      Robo Race
                    </p>
                    <br />
                    <img
                      src={robogame}
                      alt=""
                      className="max-w-lg lg:rounded-lg w-full lg:p-0 p-2 rounded-2xl"
                    />
                    <br />
                    <p class="max-w-xl mt-4 text-lg tracking-tight text-gray-600">
                      Welcome to the exhilarating Robo Race event, where
                      participants will put their robots to the ultimate test on
                      a series of challenging paths. This thrilling competition
                      consists of three rounds, each designed to push the limits
                      of robot maneuverability and problem-solving.
                    </p>
                  </div>
                  <div class="flex flex-col items-center justify-center gap-3 mt-5 lg:flex-row lg:justify-start">
                    <a
                      href="#"
                      class="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-indigo-600 border-2 border-indigo-600 rounded-full nline-flex hover:bg-transparent hover:border-indigo-600 hover:text-indigo-600 focus:outline-none lg:w-auto focus-visible:outline-indigo-600 text-sm focus-visible:ring-indigo-600"
                    >
                      Register Now
                    </a>
                    {/* <a
                      href="#"
                      class="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                    >
                      Learn more
                      <span aria-hidden="true"> → </span>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:w-1/2">
            <div class="flex-shrink-0 flex mt-10">
              <div>
                <ul
                  class="grid grid-cols-1 gap-8 mt-6 list-none lg:mt-0 lg:gap-16"
                  role="list"
                >
                  <li>
                    <div className="flex items-center">
                      <div class="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                        ❖
                      </div>
                      <p class="ml-2 text-xl font-medium leading-6 text-black">
                        Round 1: Obstacle Course
                      </p>
                    </div>
                    <div class="mt-2 text-base text-gray-500">
                      Robots navigate a path strewn with cardboard obstacles,
                      testing their agility, decision-making, and adaptability.
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <div class="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                        ❖
                      </div>
                      <p class="ml-2 text-xl font-medium leading-6 text-black">
                        Round 2: Sand Path
                      </p>
                    </div>
                    <div class="mt-2 text-base text-gray-500">
                      Robots face a sandy path with additional obstacles,
                      demanding speed, agility, and problem-solving skills.
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <div class="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                        ❖
                      </div>
                      <p class="ml-2 text-xl font-medium leading-6 text-black">
                        Round 3: Mystery Path
                      </p>
                    </div>
                    <div class="mt-2 text-base text-gray-500">
                      Participants tackle a secretive path filled with
                      surprises, twists, and new obstacles, showcasing
                      versatility and quick thinking.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events