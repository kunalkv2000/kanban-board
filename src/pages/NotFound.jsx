import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div class="w-full flex-col justify-start items-center lg:gap-16 gap-10 inline-flex lg:pt-[180px] pt-12 lg:pb-28 pb-12">
      <div class="relative h-[calc(550px-85px)] flex justify-center items-center flex-col">
        <img src="/404.png" width="400" />
        <div class="block text-center mt-5">
          <h5 class="md:text-xl text-lg leading-8 text-gray-900 font-medium mb-1.5">
            <span class="text-indigo-600 font-semibold ">Oops!</span>{' '}
            It seems like you've taken a wrong turn
          </h5>
          <p class="text-sm text-gray-500">
            We're working to bring it back.
          </p>
          <br />
          <Link to="/">
            <button className=" bg-black text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-indigo-700">
              Return to home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
