import React from "react";

function Footer() {
  return (
    <div>
      <footer class="w-full bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" class="sr-only">
          Footer
        </h2>
        <div class="px-4 py-10 mx-auto max-w-7xl sm:px-6 lg:px-4">
          <div class="flex flex-wrap items-center lg:justify-between space-y-6 md:justify-evenly justify-center">
            <span>
              Website by{" "}
              <a
                href="https://www.linkedin.com/in/saipranay47/"
                class=" text-blue-500 hover:text-gray-500 underline decoration-wavy"
                target="blank"
              >
                sai pranay
              </a>
            </span>
            <div class="">
              <span class="mx-auto mt-2 text-sm text-gray-500">
                Copyright © 2023
                <a
                  href="/"
                  class="mx-2 text-blue-500 hover:text-gray-500"
                  rel="noopener noreferrer"
                >
                  RoboFest
                </a>
                All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
