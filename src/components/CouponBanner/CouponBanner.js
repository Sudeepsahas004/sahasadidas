import React from "react";

const CouponBanner = () => {
  return (
    <div className="bg-gradient-to-r px-4 dark:bg-dark from-[#6ff56f] to-[#FFE4CC] rounded-xl py-4 md:p-6 flex items-center justify-between shadow-md mx-3 md:mx-10 ">
      
      {/* Left Text */}
      <div>
        <h2 className="text-2xl md:text-4xl font-extrabold text-[#FF3D3D]">
          Get 25% Off
        </h2>
        <p className="text-lg md:text-2xl font-semibold mt-1">
          Up To ₹200 Off*
        </p>
      </div>

      {/* Coupon Box */}
      <div className="bg-white px-4 py-2 md:px-6 md:py-3 rounded-lg shadow">
        <p className="text-sm md:text-lg font-semibold text-gray-500">
          COUPON CODE
        </p>
        <p className="text-xl md:text-3xl font-extrabold">SAHASSAVE</p>
      </div>

      {/* Percentage Icon */}
      <div className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
        %
      </div>
    </div>
  );
};

export default CouponBanner;
