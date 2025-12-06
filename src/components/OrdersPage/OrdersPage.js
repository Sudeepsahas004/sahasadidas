import { useContext } from "react";
import { StoreContext } from "../../StoreContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const OrdersPage = () => {
  const { orders } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="p-6 dark:bg-dark">

      {/* Title */}
      <h1 className="text-4xl dark:text-white md:text-6xl font-extrabold md:mb-8">
        My Orders 📦
      </h1>

      {/* If No Orders */}
      {orders.length === 0 && (
        <p className="text-center text-2xl dark:text-gray-400 text-gray-600 mt-6 mb-8">
          You haven't ordered anything yet 😔
        </p>
      )}

      {/* Orders List */}
      <div className="space-y-8 dark:bg-dark">
        {orders.map((item) => (
             <Link to={`/shoe/${item.id}`} key={item.id}>
          <div
            key={item.id}
                     className="dark:bg-dark bg-white shadow-lg rounded-2xl md:px-4 md:mt-8 my-4 md:p-5 flex p-2  md:flex-row items-center border border-gray-200 hover:shadow-2xl "
 >
            {/* Image */}
            <img
              src={item.src}
              alt={item.title}
              className="md:w-[220px] w-[120px] h-34 pt-2  md:pt-1"
            />

            {/* Text */}
            <div className="flex flex-col md:mx-4 px-4 ">
              <span className="text-[20px] dark:text-white md:text-4xl font-bold">
                {item.title}
              </span>

              <span className="text-[10px] dark:text-gray-400 text-gray-600 md:text-2xl md:py-3 md:my-2">
                {item.description}
              </span>

              <span className="my-[1px] dark:text-white text-[15px] md:text-2xl font-semibold">
                ₹{item.price}
              </span>

              <span className="text-[10px] text-green-700 font-semibold md:text-lg md:mt-3">
                ✓ Order Confirmed
              </span>
            </div>
          </div>
          </Link>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 justify-center p-2">
        <button
          onClick={() => navigate("/")}
          className="bg-black dark:bg-white dark:text-black md:w-40 md:p-[6px] p-2 md:h-[50px] w-40 h-10 md:text-xl text-white"
        >
        Back to Home
        </button>
        <button
          onClick={() => navigate("/cart")}
          className="bg-black dark:bg-white dark:text-black w-40 md:w-38 p-2 md:p-1 h-10 md:h-[50px] md:text-xl text-white"
        >
          Go to my Cart
        </button>
        </div>

    </div>
  );
};

export default OrdersPage;
