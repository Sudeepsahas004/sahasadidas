
import CartPage from "./components/CartPage/CartPage";

import { Routes, Route } from "react-router-dom";
import ShoeDetailPage from "./components/ShoeDetailPage/ShoeDetailPage";
import Home from "./Home";
import OrdersPage from "./components/OrdersPage/OrdersPage";

function App() {
 

  return (
    <div className="App min-h-screen dark:bg-dark bg:text-white">
      {/* 👇 Hide navbar on cart & shoe detail if you want */}
      {/* {!isShoeDetailPage && screen === "home" && (
        // <Navbar openCart={() => setScreen("cart")} />
      )} */}


      {/* 👇 Route for shoe detail */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shoe/:id" element={<ShoeDetailPage />} />
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
    </div>
  );
}

export default App;
