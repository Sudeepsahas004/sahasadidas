import fb from "../../assets/icon-facebook.svg";
import insta from "../../assets/icon-instagram.svg";
import twit from "../../assets/icon-twitter.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10 w-full">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Logo */}
          <div>
            <svg
              viewBox="100 100 50 32"
              xmlns="http://www.w3.org/2000/svg"
              className="h-14 w-14 fill-current text-white"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M 150.07 131.439 L 131.925 100 L 122.206 105.606 L 137.112 131.439 L 150.07 131.439 Z 
                M 132.781 131.439 L 120.797 110.692 L 111.078 116.298 L 119.823 131.439 L 132.781 131.439 Z 
                M 109.718 121.401 L 115.509 131.439 L 102.551 131.439 L 100 127.007 L 109.718 121.401 Z"
              />
            </svg>
          </div>

          {/* Copyright Text */}
          <div className="text-center text-sm md:text-base">
            © Sahas Adidas. All Rights Reserved
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/adidas/">
              <img src={fb} className="h-6" alt="Facebook" />
            </a>
            <a href="https://x.com/adidas">
              <img src={twit} className="h-6" alt="Twitter"/>
            </a>
            <a href="https://www.instagram.com/adidas/">
              <img src={insta} className="h-6" alt="Instagram" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
