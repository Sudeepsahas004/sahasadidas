import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import NewArrivalsSection from "./components/NewArrivalsSection/NewArrivalsSection";
import ShoeDetail from "./components/ShoeDetail.js/ShoeDetail";
import { SHOELIST } from "./components/constant";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <ShoeDetail />
      <NewArrivalsSection items={SHOELIST} />
      <div
        
        className="dark:text-white mt-[50px] px-3 md:px-4 "
      >
        <h2 className="text-2xl *:md:text-4xl font-semibold my-2 ">Men’s shoes</h2>

        <p className="text-xl md:text-2xl my-2">
          A pair of adidas shoes, for casual or sporting activities, is a
          must-have for men of all ages. A great way to finish off your outfit
          with style and look the part, no matter the occasion, is to choose
          your shoes wisely, and adidas is here to help with our range of shoes
          for men. Find the right sporting ally for you, with a wide range of
          men’s shoes to choose from. No matter where your passions lie, you can
          find the right kicks to keep you performing at the ultimate level. The
          adidas range of men’s shoes throws a nod to retro styles that created
          the brand’s legacy and also looks at futuristic designs known for
          their tech backing and athlete-identical edge. Celebrity and sports
          star collaborations add that extra touch of class and swag when you
          step off the field or outside the gym and into your daily life. Worn
          by pro athletes, iconic public figures and celebrities alike, the
          3-Stripes life leads you directly to success.
        </p> 
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
