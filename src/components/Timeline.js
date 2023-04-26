import React from "react";

const Timeline = () => {
  return (
    <section id="Timeline">
      <div className="bg-white text-black py-8">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <p className="ml-1 text-indigo-500 uppercase font-bold text-md  ">TIMELINE</p>
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
              Timeline of the Event
            </p>
            <p className="text-sm md:text-base text-gray-600 mb-4">
              Here’s your guide to the tech fest 2022 process. Go through all
              the steps to know the exact process of the Hackathon.
            </p>
            <a
              href="https://forms.gle/TbTKX8EYqxRYiRCS8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent mr-auto hover:bg-indigo-500 text-indigo-500 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-indigo-500 hover:border-transparent"
            >
              Explore Now
            </a>
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div
                  className="border-2-2 border-indigo-500 absolute h-full border"
                  style={{
                    right: "50%",
                    border: "2px solid #6366f1",
                    borderRadius: "1%",
                  }}
                ></div>
                <div
                  className="border-2-2 border-indigo-500 absolute h-full border"
                  style={{
                    left: "50%",
                    border: "2px solid #6366f1",
                    borderRadius: "1%",
                  }}
                >
                  {" "}
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-indigo-500 font-medium">
                      1st Dec, 2022
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Registration
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-600 text-opacity-100">
                      Register for the Hackathon by filling the form
                      corresponding to that event. Its that easy :)
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1  w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-indigo-500 font-medium">
                      10th Dec, 2022, 11AM
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Participants Assemble
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-600 text-opacity-100">
                      Welcoming statements, stating rules of the hackathon and
                      announcing the sponsors and kick off of the hackathon by
                      giving problem statements.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-indigo-500 font-medium">
                      {" "}
                      10th Dec, 2022, 12PM
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Hackathon Starts
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-600 text-opacity-100">
                      The event begins and the teams are either given a problem
                      statement or can choose one for themselves. Teams need to
                      carefully analyse and think about the problem.
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>

                  <div className="order-1  w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-indigo-500 font-medium">
                      10th Dec, 2022, 3:30PM
                    </p>
                    <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                      Check Point : 1
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-600 text-opacity-100">
                      Teams need to think of a solution to the problem statement
                      given/chosen. The solution/idea shall now be written as a
                      document or PPT. Teams who still couldn’t come up with an
                      idea, get 2 more hours to think of a solution.
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-indigo-500 font-medium">
                      {" "}
                      10th Dec, 2022, 8PM
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Check Point : 2
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-600 text-opacity-100">
                      Teams shall be prepared with their idea proposals and must
                      submit the proposal to the organizing team. Teams who did
                      not prepare a proposal yet, get until 11PM time to finally
                      submit a proposal.
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>

                  <div className="order-1  w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-indigo-500 font-medium">
                      11th Dec, 2022, 8AM
                    </p>
                    <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                      Check Point : 3
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-600 text-opacity-100">
                      Teams are asked to show their prototype updates to the
                      organizing team. If any team fails to do so, they get
                      until 10AM to do so.
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-indigo-500 font-medium">
                      {" "}
                      11th Dec, 2022, 11AM-12PM
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Final Submission
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-600 text-opacity-100">
                      Final Submission of the prototype and its document.
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>

                  <div className="order-1  w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-indigo-500 font-medium">
                      11th Dec, 2022, 6-7PM
                    </p>
                    <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                      Result Announcement
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-600 text-opacity-100">
                      The Moment of Truth finally arrives but don't you worry
                      for even if a team has successfully completed the idea
                      checkpoint, they are eligible for win.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
