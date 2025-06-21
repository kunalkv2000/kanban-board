import React from 'react';
import { MdDownload } from 'react-icons/md';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer class="w-full">
      <div class="mx-auto max-w-6xl">
        <div class="grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-8 py-10 ">
          <div class="col-span-full mb-10 2xl:col-span-2 lg:mb-0 flex items-center flex-col 2xl:items-start">
            <a href="" class="flex justify-center lg:justify-start">
              <img src="/logo.png" className="w-40 h-auto" />
            </a>
            <div class="flex items-center justify-between w-full max-w-xl mx-auto flex-col  2xl:flex-col 2xl:items-start">
              <p class="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
                Trusted in more than 100 countries & 5 million
                customers. Have any query ?
              </p>
            </div>
          </div>

          <div class="lg:mx-auto text-left">
            <h4 class="text-lg text-gray-900 dark:text-white font-medium mb-7">
              Pagedone
            </h4>
            <ul class="text-sm  transition-all duration-500 ">
              <li class="mb-6">
                <a
                  href="javascript:;"
                  class="text-gray-600 hover:text-gray-900 dark:hover:text-white"
                >
                  Home
                </a>
              </li>
              <li class="mb-6">
                <a
                  href="javascript:;"
                  class=" text-gray-600 hover:text-gray-900 dark:hover:text-white"
                >
                  About
                </a>
              </li>
              <li class="mb-6">
                <a
                  href="javascript:;"
                  class=" text-gray-600 hover:text-gray-900 dark:hover:text-white"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  class=" text-gray-600 hover:text-gray-900 dark:hover:text-white"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>

          <div class="lg:mx-auto text-left">
            <h4 class="text-lg dark:text-white text-gray-900 font-medium mb-7">
              Projects
            </h4>
            <ul class="text-sm  transition-all duration-500">
              <li class="mb-6">
                <a
                  href="javascript:;"
                  class="text-gray-600 hover:text-gray-900 dark:hover:text-white"
                >
                  Figma UI System
                </a>
              </li>
              <li class="mb-6">
                <a
                  href="javascript:;"
                  class=" text-gray-600 hover:text-gray-900 dark:hover:text-white"
                >
                  Icons Assets
                </a>
              </li>
              <li class="mb-6">
                <a
                  href="javascript:;"
                  class=" text-gray-600 hover:text-gray-900 dark:hover:text-white"
                >
                  Responsive Blocks
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  class=" text-gray-600 hover:text-gray-900 dark:hover:text-white"
                >
                  Components Library
                </a>
              </li>
            </ul>
          </div>

          <div class="lg:mx-auto text-left">
            <h4 class="text-lg dark:text-white text-gray-900 font-medium mb-7">
              Projects
            </h4>
            <ul class="text-sm  transition-all duration-500">
              <li class="mb-6">
                <a
                  href="javascript:;"
                  class="text-gray-600 hover:text-gray-900 dark:hover:text-white"
                >
                  FAQs
                </a>
              </li>
              <li class="mb-6">
                <a
                  href="javascript:;"
                  class=" text-gray-600 hover:text-gray-900 dark:hover:text-white"
                >
                  Quick Start
                </a>
              </li>
              <li class="mb-6">
                <a
                  href="javascript:;"
                  class=" text-gray-600 hover:text-gray-900 dark:hover:text-white"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  class=" text-gray-600 hover:text-gray-900 dark:hover:text-white"
                >
                  User Guide
                </a>
              </li>
            </ul>
          </div>

          <div class="lg:mx-auto text-left">
            <h4 class="text-lg dark:text-white text-gray-900 font-medium mb-7">
              Resources
            </h4>
            <ul class="text-sm  transition-all duration-500">
              <li class="mb-6">
                <a
                  href="javascript:;"
                  class="text-gray-600 hover:text-gray-900 dark:hover:text-white"
                >
                  FAQs
                </a>
              </li>
              <li class="mb-6">
                <a
                  href="javascript:;"
                  class=" text-gray-600 hover:text-gray-900 dark:hover:text-white"
                >
                  Quick Start
                </a>
              </li>
              <li class="mb-6">
                <a
                  href="javascript:;"
                  class=" text-gray-600 hover:text-gray-900 dark:hover:text-white"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  class=" text-gray-600 hover:text-gray-900 dark:hover:text-white"
                >
                  User Guide
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="py-7 border-t border-gray-200">
          <div class="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span class="text-sm text-gray-500 ">
              ©<a href="https://pagedone.io/">Kanban Board</a> 2025,
              All rights reserved.
            </span>
            <div class="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
              <a
                href="mailto:kunalvijayakumar.021200@gmail.com"
                class="w-9 h-9 rounded-full bg-gray-700 text-white flex justify-center items-center hover:bg-gradient-to-r from-purple-500 to-pink-500"
              >
                <MdMail />
              </a>
              <a
                href="https://github.com/kunalkv2000"
                class="w-9 h-9 rounded-full bg-gray-700 text-white flex justify-center items-center hover:bg-gradient-to-r from-purple-500 to-pink-500"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/kunal-vijayakumar/"
                class="w-9 h-9 rounded-full bg-gray-700 text-white flex justify-center items-center hover:bg-gradient-to-r from-purple-500 to-pink-500"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://drive.google.com/file/d/1usy3pkWNiI_4qK-C_aY8ZZjpXXGiBMsF/view?pli=1"
                class="w-9 h-9 rounded-full bg-gray-700 text-white flex justify-center items-center hover:bg-gradient-to-r from-purple-500 to-pink-500"
              >
                <MdDownload />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
