import React from "react";
import Adidas_Hero from "../../assets/Adidas_Heroo.png";
import Select from "../Select/Select";
import {QTY,SIZES} from "../constant";


const ShoeDetail = () => {
  return (
    <div className="flex flex-col md:px-4 px-2 md:flex-row-reverse space-y-4  ">
      {/* Shoe Image */}
      <div className="flex-1 ">
        <div className="bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6] h-full md:mx-10 flex justify-center md:mt-3 ">
          <img src={Adidas_Hero} alt="Hero Banner"  className="animate-[var(--animate-float)]" />
        </div>
      </div>
      {/* Shoe Description */}
      <div className="flex-1 space-y-6">
        <div className="text-5xl font-black md:text-8xl dark:text-white">
          Adidas Casual Sneakers
        </div>
        <div className="font-medium md:text-xl dark:text-white">
          Adidas Men ALPHARESPONSE Casual Runner Sneakers (UK 6)
        </div>
        <div className="flex space-x-6">
        <div className="text-3xl font-extrabold md:text-6xl dark:text-white">₹ 5399</div>
        <Select title={"QTY"} options={QTY}/>
        <Select title={"SIZE"} options={SIZES}/>
        </div>
        {/* Shoe Buttons And Links */}
        <div className="space-x-10">
          {/* <button className="h-14 w-40 font-bold font-alata tracking-wide bg-black text-white hover:bg-gray-900 active:bg-gray-700">
            Add to bag
          </button> */}
          <a
            href="https://www.adidas.co.in/alpharesponse-shoes/IE8655.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold underline dark:text-white underline-offset-4"
          >
            View details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShoeDetail;
