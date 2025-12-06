import { createContext, useState } from "react";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const addToOrders = (item) => {
    setOrders((prev) => [...prev, item]);
  };

  return (
    <StoreContext.Provider value={{ cart, orders, addToCart, addToOrders }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
