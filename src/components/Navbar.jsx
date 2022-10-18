import React from "react";
import logo from '../imgs/acmctc-logo.png';
export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav class="flex items-center justify-between flex-wrap bg-white p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <img className = "max-h-24 px-4"src={logo} alt = "logo"></img>
          <span class="font-semibold text-xl tracking-tight">ACM FSC</span>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-3xl lg:flex-grow">
          </div>
          <div>
            <div class="text-3xl lg:flex-grow">
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-green-500 hover:text-white mr-4 font-bold px-2"
            >
              News
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-green-500 hover:text-white mr-4 font-bold px-2"
            >
              Events
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-green-500 hover:text-white font-bold px-2"
            >
              Executives
            </a>
          </div>
          </div>
        </div>
      </nav>
    </>
  );
}
