import React from 'react';
import Footer from '../components/Footer';
import HomeNav from '../components/HomeNav';
import RunModel from '../components/run';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white dark:bg-black">
      <HomeNav />
      <section class=" pt-0 dark:bg-black lg:pl-8 h-full">
        <div class="rounded-2xl py-10 overflow-hidden m-5 lg:m-0 2xl:py-16 xl:py-8  lg:rounded-tl-2xl lg:rounded-bl-2xl ">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-14 items-center lg:grid-cols-12 lg:gap32">
              <div class="w-full xl:col-span-5 lg:col-span-6 2xl:-mx-5 xl:-mx-0">
                <div class="flex items-center text-sm font-medium text-gray-500 justify-center lg:justify-start">
                  <span class="bg-indigo-600 py-1 px-3 rounded-2xl text-xs font-medium text-white mr-3 ">
                    #1
                  </span>
                  Kanban Board app
                </div>
                <h1 class="py-8 text-center text-gray-900 dark:text-white font-bold font-manrope text-5xl lg:text-left leading-[70px]">
                  The new standard for your{' '}
                  <span class="bg-gradient-to-r from-purple-500 to-pink-500 sm:text-5xl text-transparent bg-clip-text">
                    Creative Teams<i>⚡</i>
                  </span>
                </h1>
                <p class=" text-gray-500 text-lg text-center lg:text-left">
                  When you’re ready to invest, quickly execute your
                  orders with Complex and outdated.
                </p>
                <div class="relative p-1.5 my-5 flex items-center gap-4 h-auto md:h-16 flex-col md:flex-row justify-between rounded-full">
                  <Link to="/projects">
                    <button class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 text-center me-2 mb-2 rounded-full py-3 lg:px-32 px-10  text-xl font-semibold cursor-pointer transition-all duration-500 md:w-fit w-full">
                      Get Started
                    </button>
                  </Link>
                </div>
                <div class="flex items-center flex-col lg:flex-row">
                  <div class="flex items-center">
                    <img
                      src="https://pagedone.io/asset/uploads/1694846673.png"
                      alt="Rounded image "
                      class="border-2 border-solid border-indigo-50 rounded-full relative z-50 object-cover"
                    />
                    <img
                      src="https://pagedone.io/asset/uploads/1694846691.png"
                      alt="Rounded image"
                      class="border-2 border-solid border-indigo-50 rounded-full relative z-30 -ml-3 object-cover"
                    />
                    <img
                      src="https://pagedone.io/asset/uploads/1694846704.png"
                      alt="Rounded image"
                      class="border-2 border-solid border-indigo-50 rounded-full relative z-20 -ml-3 object-cover"
                    />
                  </div>
                  <span class="mt-3 text-base text-gray-600 font-medium lg:ml-3">
                    People have joined
                  </span>
                </div>
              </div>
              <div class="w-full xl:col-span-7  lg:col-span-6 block">
                <div class="w-full sm:w-auto lg:w-[60.8125rem] xl:ml-16">
                  <img
                    src="/bento/product.png"
                    alt="Dashboard image"
                    className="w-full lg:h-auto rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="bg-gray-50 py-24 sm:py-32 dark:bg-black">
        <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 class="text-center text-base/7 font-semibold text-indigo-600">
            Deploy faster
          </h2>
          <center>
            <p class="mx-auto mt-1 p-2 max-w-lg text-center text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 sm:text-5xl inline-block text-transparent bg-clip-text">
              Everything you need for your project
            </p>
          </center>
          <img src="/bento/feature.png" />
          <img src="/bento/toggle.png" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
