import React from 'react';
import { MdDarkMode } from 'react-icons/md';
import { Link } from 'react-router-dom';

const RunModel = () => {
  var toggle = false;
  function chngimg() {
    if (toggle === true) {
      document.getElementById('imgplus').src = '/bento/feature.png';
    } else {
      document.getElementById('imgplus').src = '/bento/product.png';
      alert(img);
    }
    toggle = !toggle;
  }

  return (
    <nav class="py-3 w-full bg-white transition-all duration-500 dark:bg-black">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="w-full flex flex-col lg:flex-row">
          <div class=" flex justify-between  lg:flex-row">
            <label class="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                onclick="chngimg()"
                class="sr-only peer"
              />
            </label>
            <img id="imgplus" src="/bento/product.png" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default RunModel;
