import React from 'react';
import { MdDarkMode } from 'react-icons/md';
import { Link } from 'react-router-dom';

const HomeNav = () => {
  const dark = () => {
    if (localStorage.theme === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  return (
    <nav class="py-3 w-full bg-white transition-all duration-500 dark:bg-black">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="w-full flex flex-col lg:flex-row">
          <div class=" flex justify-between  lg:flex-row">
            <Link to="/">
              <img src="/logo.png" className="w-40 h-auto" />
            </Link>

            <button
              onClick={dark}
              data-collapse-toggle="navbar"
              type="button"
              aria-controls="navbar-default"
              aria-expanded="false"
              class="text-black dark:text-white cursor-pointer text-xl text-center transition-all duration-500 px-3 lg:hidden"
            >
              <MdDarkMode />
            </button>
          </div>
          <div
            class="hidden w-full lg:flex lg:pl-11 max-lg:py-4"
            id="navbar"
          >
            <div class="flex lg:items-center justify-start flex-col lg:flex-row max-lg:gap-4 lg:flex-1 lg:justify-end">
              <Link to="/projects">
                <button class=" bg-indigo-50 text-indigo-600 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-indigo-100">
                  Get Started
                </button>
              </Link>
              <button
                onClick={dark}
                class="bg-black text-white dark:text-black dark:bg-white rounded-full cursor-pointer text-xl text-center transition-all duration-500 py-3 px-6 lg:ml-5"
              >
                <MdDarkMode />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNav;
