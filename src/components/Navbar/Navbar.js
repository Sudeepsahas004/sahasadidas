import { BiCart, BiSun, BiMoon } from "react-icons/bi";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const [isMobileShown, setIsMobileShown] = useState(false);
  const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];
  return (
    <>
      <nav className="flex flex-wrap items-center px-2 md:px-4 justify-between ">
        {/* {logo} */}
        <div>
        <a href="sd">
          <svg
            viewBox="100 100 50 32"
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 fill-current text-black dark:text-white"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M 150.07 131.439 L 131.925 100 L 122.206 105.606 L 137.112 131.439 L 150.07 131.439 Z 
         M 132.781 131.439 L 120.797 110.692 L 111.078 116.298 L 119.823 131.439 L 132.781 131.439 Z 
         M 109.718 121.401 L 115.509 131.439 L 102.551 131.439 L 100 127.007 L 109.718 121.401 Z"
            />
          </svg>
        </a>
</div>

{/* Mobile Hamburger and Dark/lightmode */}
        <div className="flex gap-1   md:hidden">
          <div className="h-8  p-1 relative top-3 rounded-xl dark:text-black dark:bg-gray-200 bg-dark   text-white ">
            <button
              className=" px-1 py-0  "
              onClick={() => setDarkMode(!darkMode)}
            >
              <BiSun className="hidden dark:block h-6 " />
              <BiMoon className="  dark:hidden " />
            </button>
          </div>

          {/* Burger */}
          <button
            onClick={() => setIsMobileShown(!isMobileShown)}
            className="md:hidden p-2   rounded-lg focus:ring-2 focus:ring-gray-200"
          >
            <RxHamburgerMenu className="h-10 dark:text-white w-10 " />
          </button>
        </div>

        {/* Menu List */}
        <div
          className={`${!isMobileShown && "hidden"} w-full md:w-auto md:block `}
        >
          <ul className="md:space-x-5 flex flex-col md:flex-row rounded-lg border md:bg-transparent md:border-none border-gray-100 bg-gray-100 text-lg">
            {ROUTES.map((route) => (
              <li
                key={route}
                className={`rounded cursor-pointer text-2xl px-7 py-2 hover:bg-blue-500 hover:text-white md:dark:text-white md:hover:bg-transparent md:hover:text-blue-400 md:hover:underline md:hover:underline-offset-6  md:hover:decoration-2 border-b-black `}
              >
                {route}
              </li>
            ))}
          </ul>
        </div>

        {/* Cart Button */}
        {/* <div 
          className={`
            ${isMobileShown ? "flex" : "hidden"} 
            md:flex
            flex items-center justify-center
            h-12 w-12 rounded-full bg-white shadow-md
          `}>
        <div className="flex-center h-12 w-12 cursor-pointer rounded-full bg-white shadow-md" onClick={openCart}>
          <BiCart />
        </div>
      </div> */}

        {/*Desktop Dark/Light and  Cart Button */}
        <div className="hidden md:flex  ">
          <div className=" relative top-1 mt-[10px] dark:text-black dark:bg-gray-200  m-2 bg-black text-white rounded-full w-10">
            <button classname="" onClick={() => setDarkMode(!darkMode)}>
              <BiSun className="hidden  dark:block h-5 w-8 mt-[5px] ml-1" />
              <BiMoon className="dark:hidden h-4  w-8 ml-1 mt-[6px]" />
            </button>
          </div>
          <div
            onClick={() => {
              navigate("/cart");
              setIsMobileShown(false);
            }}
            className={`
    ${isMobileShown ? "flex" : "hidden"} 
    md:flex
    h-12 w-12 rounded-full bg-white shadow-md
    flex items-center cursor-pointer justify-center dark:text-white dark:bg-dark
  `}
          >
            <BiCart className="text-2xl" />
          </div>
        </div>
      </nav>
      {/* Sidebar */}
    </>
  );
};

export default Navbar;
