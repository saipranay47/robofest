import React from 'react'
import inovatex from "../images/inovatex.webp";
import PixelCraft from "../images/PixelCraft.webp";
import robogame from "../images/robogame.webp";

function Events() {
  return (
    <div id='events'>
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
                      InnovateX – Hardware & <br /> Software Project Expo
                    </p>
                    <p class="max-w-34xl mt-4 text-lg tracking-tight text-gray-600">
                      The event aims to provide a unique platform for
                      participants to exhibit either hardware or software-based
                      innovative projects related to Robotics. The objective of
                      InnovateX is to foster creativity, innovation, and
                      technological advancement among participants by giving
                      them an opportunity to present their projects and ideas in
                      the field of Robotics. InnovateX is a one-round event,
                      where participants will demonstrate their developed
                      product in front of a distinguished panel of judges. The
                      projects will be evaluated based on the level of
                      innovation, technical feasibility, and practicality by the
                      panel of judges. Participants will have the chance to
                      interact with professionals, gain insights into the
                      industry and create potential career opportunities.
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
                  src={inovatex}
                  alt=""
                  className="max-w-lg lg:rounded-lg w-full lg:p-0 p-2 rounded-2xl"
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
                      Pixel Craft
                    </p>
                    <br />
                    <img
                      src={PixelCraft}
                      alt=""
                      className="max-w-lg lg:rounded-lg w-full lg:p-0 p-2 rounded-2xl"
                    />
                    <br />
                    <p class="max-w-xl mt-4 text-lg tracking-tight text-gray-600">
                      Pixel Craft is a one-of-a-kind event that brings together
                      participants from different backgrounds to showcase their
                      coding skills and artistic abilities. At Pixel Craft,
                      participants will put their coding skills to the test by
                      creating visually stunning Robot artwork using only code.
                      With a wide range of tools and techniques at their
                      disposal, participants are encouraged to push their coding
                      creativity and create a unique and impressive Robot
                      artwork. With three different rounds, this competition is
                      designed to push your skills to the limit and help you
                      discover the full potential of your Robot art creativity.
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
            <div class="flex-shrink-0">
              <div>
                <ul
                  class="grid grid-cols-1 gap-12 mt-6 list-none lg:mt-0 lg:gap-24"
                  role="list"
                >
                  <li>
                    <div className="flex items-center">
                      <div class="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                        ❖
                      </div>
                      <p class="ml-2 text-xl font-medium leading-6 text-black">
                        Round 1
                      </p>
                    </div>
                    <div class="mt-2 text-base text-gray-500">
                      In the first round, participants will demonstrate their
                      fundamental coding abilities by creating simple, yet
                      eye-catching Robot artwork. This initial stage allows
                      competitors to showcase their essential skills while
                      establishing a solid foundation for the upcoming
                      challenges.
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <div class="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                        ❖
                      </div>
                      <p class="ml-2 text-xl font-medium leading-6 text-black">
                        Round 2
                      </p>
                    </div>
                    <div class="mt-2 text-base text-gray-500">
                      As the competition intensifies, Round 2 demands
                      participants to produce more intricate Robot artwork,
                      highlighting their advanced coding expertise. In this
                      stage, competitors will face a higher level of difficulty,
                      emphasizing the importance of innovation and
                      problem-solving abilities.
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <div class="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                        ❖
                      </div>
                      <p class="ml-2 text-xl font-medium leading-6 text-black">
                        Round 3
                      </p>
                    </div>
                    <div class="mt-2 text-base text-gray-500">
                      The grand finale of the competition, Round 3, challenges
                      participants to create an extraordinary digital
                      masterpiece, embodying the pinnacle of their coding and
                      artistic prowess. This ultimate test of skill offers an
                      exceptional opportunity for participants to exhibit their
                      creativity, broaden their expertise, and compete for
                      amazing prizes in a celebration of talent and innovation.
                    </div>
                  </li>
                </ul>
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
                      Code Combat Event
                    </p>
                    <br />
                    <img
                      src={robogame}
                      alt=""
                      className="max-w-lg lg:rounded-lg w-full lg:p-0 p-2 rounded-2xl"
                    />
                    <br />
                    <p class="max-w-xl mt-4 text-lg tracking-tight text-gray-600">
                      Code Combat is a programming competition where teams
                      create AI-driven bots to compete in a 2D grid game. The
                      goal is to destroy the opposing team's headquarters while
                      managing resources like building structures, producing
                      units, and attacking enemies. Participants analyze the
                      given AI agent's basic code and strategize the best
                      actions to dominate the game.
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
            <div class="flex-shrink-0">
              <div>
                <ul
                  class="grid grid-cols-1 gap-12 mt-6 list-none lg:mt-0 lg:gap-24"
                  role="list"
                >
                  <li>
                    <div className="flex items-center">
                      <div class="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                        ❖
                      </div>
                      <p class="ml-2 text-xl font-medium leading-6 text-black">
                        Round 1
                      </p>
                    </div>
                    <div class="mt-2 text-base text-gray-500">
                      The first level of the Code Combat competition is designed
                      to introduce participants to the basics of programming in
                      a fun and engaging way. Participants are required to
                      create a strategy and get familiarize with the
                      environment.
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <div class="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                        ❖
                      </div>
                      <p class="ml-2 text-xl font-medium leading-6 text-black">
                        Round 2
                      </p>
                    </div>
                    <div class="mt-2 text-base text-gray-500">
                      The second level of the competition is more challenging
                      and requires participants to use advanced programming
                      techniques to develop effective strategies for their
                      virtual robots. The robots are required to navigate a more
                      complex battlefield, avoid obstacles, and engage in combat
                      with other robots.
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <div class="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                        ❖
                      </div>
                      <p class="ml-2 text-xl font-medium leading-6 text-black">
                        Round 3
                      </p>
                    </div>
                    <div class="mt-2 text-base text-gray-500">
                      The third level of the competition is the most advanced
                      and requires participants to use machine learning and
                      other cutting-edge techniques to develop advanced
                      algorithms that can adapt to changing conditions on the
                      battlefield.
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