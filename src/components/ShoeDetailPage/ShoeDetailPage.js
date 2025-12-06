import React from "react";
import { SHOELIST } from "../constant";
import { useParams, useNavigate } from "react-router-dom";
import Select from "../Select/Select";
import { QTY, SIZES } from "../constant";
import CouponBanner from "../CouponBanner/CouponBanner";
import { StoreContext } from "../../StoreContext";
import { useContext } from "react";

const ShoeDetailPage = ({ goBack }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const shoe = SHOELIST.find((s) => s.id === Number(id));

  const { addToCart, addToOrders } = useContext(StoreContext);

  if (!shoe) return <h1>Product Not Found</h1>;

  const handleAddToCart = () => {
    addToCart(shoe);
    alert("Added to Bag");
  };

  const handleBuyNow = () => {
    addToOrders(shoe);
    navigate("/orders");
  };

  console.log("orders context:", addToOrders);

  return (
    <section className="m-0 p-2 ">
      <CouponBanner />
      <div className="md:mx-2 mx-1 p-0 flex flex-col md:flex-row  ">
        <div className="md:m-0 mx-[-6px] ">
          <img
            src={shoe.src}
            alt={shoe.title}
            className={` w-62 p-2 h-60 m-6 md:mx-[50px] dark:bg-white  md:w-[500px] md:h-full`}
          />
        </div>
        <div className="md:my-5 px-4 ">
          <h1 className="font-extrabold text-2xl md:text-6xl dark:text-white md:mt-4">
            {shoe.title}
          </h1>
          <p className="md:mt-6 dark:text-white font-semibold md:text-2xl">
            {shoe.description}
          </p>
          <p className="font-bold text-xl md:text-4xl dark:text-white md:mt-6">₹{shoe.price}</p>
          <div className="flex  ml-0 my-4 mx-2 space-x-4">
            <Select title={"QTY"} options={QTY} />
            <Select title={"SIZE"} options={SIZES} />
          </div>
          <div className="flex space-x-2 ">
            <button
              onClick={handleBuyNow}
              className="h-14 w-[100px] dark:bg-white dark:text-black md:w-40 md:text-2xl font-bold tracking-wide bg-black text-white hover:bg-gray-900 active:bg-gray-700"
            >
              Buy Now
            </button>
            <button
              onClick={handleAddToCart}
              className="h-14 w-40 font-bold tracking-wide md:text-2xl dark:bg-white dark:text-black hover:bg-black hover:text-white active:bg-gray-700"
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
      <div className="flex space-x-4 md:mt-7 justify-center p-2">
        <button
          onClick={() => navigate("/")}
          className="bg-black dark:bg-white dark:text-black md:w-28 md:p-1 p-2 h-10 md:text-xl text-white"
        >
          ← Back
        </button>
        <button
          onClick={() => navigate("/cart")}
          className="bg-black dark:bg-white dark:text-black md:w-[150px] md:p-1 p-2 h-10 md:text-xl text-white"
        >
          Go to Cart →
        </button>
      </div>
    </section>
  );
};

export default ShoeDetailPage;
