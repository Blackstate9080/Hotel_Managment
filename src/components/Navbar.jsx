import { Menu, CircleUserRound } from "lucide-react";
import { Ham_Menu } from "./Ham_Menu";
import { useState } from "react";
import { Link,useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <div>
      <Ham_Menu isOpen={isMenuOpen} onClose={() => setisMenuOpen(false)} />

      <div className="w-full bg-white/10 backdrop-blur-xl border-b border-white/20 py-2 relative z-10">
        {/* Login/Signup */}
        <div className="absolute top-4 right-2 sm:right-6 md:right-8 flex flex-col items-center cursor-pointer group">
          <CircleUserRound
            strokeWidth={1}
            className="text-white group-hover:text-gray-900 transition-colors duration-200 
            w-10 h-10 sm:w-20 sm:h-20 md:w-12 md:h-12"
          />
          <span className="text-white group-hover:text-gray-900 transition-colors duration-200">
            Login
          </span>
        </div>

        {/* Burger Menu */}
        <div className="absolute top-7 left-2 sm:left-6 md:left-8 flex flex-col items-center cursor-pointer group">
          <Menu
            strokeWidth={1}
            onClick={() => setisMenuOpen(true)}
            className="text-white group-hover:text-gray-900 transition-colors duration-200 
            w-10 h-10 sm:w-20 sm:h-20 md:w-12 md:h-12"
          />
        </div>

        {/* Logo */}
        <div className="-mt-4 max-w-7xl mx-auto flex justify-center">
          <img
            src="/Hotel_logo.svg"
            alt="Hotel Logo"
            className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] object-contain"
          />
        </div>

        <div className="w-full -mt-3">
          <hr className="border-t border-white/20 my-1" />
        </div>

        {/* Nav Links */}
        

        <nav className="mt-2 flex flex-wrap justify-center gap-0 sm:gap-6 md:gap-8 text-white text-sm sm:text-lg md:text-xl font-extralight">
  {["home", "rooms", "restaurant", "Gym", "events", "contact"].map((section) => {
    const isActive = location.pathname === (section === "home" ? "/" : `/${section}`);
    return (
      <Link
        key={section}
        to={section === "home" ? "/" : `/${section}`}
        className={`relative capitalize px-2 pb-1
          after:content-[''] after:absolute after:left-0 after:-bottom-[9.5px]
          after:h-[1.5px] after:w-full after:bg-white after:rounded-full
          ${isActive ? "after:opacity-100" : "after:opacity-0 hover:after:opacity-60"}
          after:transition-opacity after:duration-300
        `}
      >
        {section}
      </Link>
    );
  })}
</nav>

      </div>
    </div>
  );
};
