import React from "react";
import Card from "../Card/Card";

export const NewArrivalsSection = ({ items }) => {
  return (
    <div className=" mt-20 md:px-6 px-3">
      <div className="flex-center">
        <div className="text-4xl font-extrabold dark:text-white">NEW ARRIVALS</div>
      </div>
      <div className="mt-10 justify-between grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-[repeat(3,32%)]">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivalsSection;
