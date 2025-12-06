import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div
      className={`${item.className} max-w-xl transform transition hover:scale-105 cursor-pointer relative`}
    >
      <Link to={`/shoe/${item.id}`} key={item.id}>
      <div className="md:p-8 p-4">
        <div className="text-xl md:text-4xl font-bold">{item.title}</div>
        <div className="underline underline-offset-4 font-semibold mt-20">
          SHOP NOW +
        </div>
      </div>
      <img
        src={item.src}
        className="absolute  top-0 right-0 md:top-5 md:left-[55%] w-45 h-40"
        alt=""
      ></img>
       </Link>
    </div>
   
  );
};

export default Card;
