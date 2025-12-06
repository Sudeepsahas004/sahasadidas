import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../StoreContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  const { cart } = useContext(StoreContext);
  return (
    <div className="p-6 dark:text-white">
      <h1 className="text-3xl md:text-6xl font-extrabold">Your Bag 🛒</h1>

    {cart.length === 0 && (
        <p className="text-center  dark:text-gray-400 text-2xl text-gray-600 mt-8 mb-8">
          You haven't ordered anything yet 😔
        </p>
      )}

      {cart.map((item) => (
        <Link to={`/shoe/${item.id}`} key={item.id}>
        <div
          key={item.id}
          className="bg-white dark:bg-dark dark:text-white  shadow-lg rounded-2xl px-4 md:mt-8 my-4 md:p-5 flex p-2  md:flex-row items-center border border-gray-200 hover:shadow-2xl "
        >
          <div className="">
            <img
              src={item.src}
              alt="Shoe"
              className="w-[220px] h-34 pt-2  md:pt-1"
            />
          </div>
          <div className="flex flex-col md:mx-4 px-4 ">
            <span className="text-[20px] md:text-4xl font-bold">
              {item.title}
            </span>
            <span className="text-[10px] dark:text-gray-400 text-gray-600 md:text-2xl md:py-4 md:my-3">
              {item.description}
            </span>{" "}
            <span className=" my-[5px] text-[15px] md:text-2xl font-semibold">
              ₹{item.price}
            </span>{" "}
          </div>
        </div>
        </Link>
      ))}

      {/* Back Button */}
       <div className="flex space-x-4 justify-center p-2">
        <button
          onClick={() => navigate("/")}
          className="bg-black dark:bg-white dark:text-black md:w-40 md:p-[6px] p-2 md:h-[50px] w-40 h-10 md:text-xl text-white"
        >
        Back to Home
        </button>
        <button
          onClick={() => navigate("/orders")}
          className="bg-black w-40 md:w-38 dark:bg-white dark:text-black  md:p-1 h-10 md:h-[50px] md:text-xl text-white"
        >
          Go to my Orders
        </button>
        </div>

    </div>
  );
};

export default CartPage;
