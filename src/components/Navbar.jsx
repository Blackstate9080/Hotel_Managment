import { Menu,CircleUserRound } from "lucide-react";
import { Ham_Menu } from "./Ham_Menu";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <div>
      <Ham_Menu 
       isOpen={isMenuOpen} onClose={()=>setisMenuOpen(false)}/>
    <div className="w-full bg-white/10 backdrop-blur-xl border- border-white/20 py-4 ">
      {/* Top-right Login/Signup */}
      <div className="absolute top-8 right-2 sm:right-6 md:right-8 flex flex-col items-center cursor-pointer group">
        <CircleUserRound 
          
          className="text-white group-hover:text-orange-950 transition-colors duration-200 
          w-10 h-10 sm:w-20 sm:h-20 md:w-16 md:h-16" 
        />
        <span className="text-white group-hover:text-orange-950 transition-colors duration-200
        ">
          Login
        </span>
      </div>
      {/* Burger Menu */}
       <div className="absolute top-8 left-2 sm:left-6 md:left-8 flex flex-col items-center cursor-pointer group">
          <Menu
            onClick={()=>setisMenuOpen(true)}
            className="text-white group-hover:text-orange-950 transition-colors duration-200 
               w-10 h-10 sm:w-20 sm:h-20 md:w-16 md:h-16"
  />
       </div>
      
      
      {/* Logo Centered inside container */}
      <div className="max-w-7xl mx-auto flex justify-center">
        <img 
          src="/Hotel_logo.svg" 
          alt="Hotel Logo" 
          className="w-[120px] h-[120px] object-contain" 
        />
      </div>

      {/* Full-width Divider under logo */}
      <div className="w-full">
        <hr className="border-t border-white/20 my-1" />
      </div>

      {/* Nav Links Centered */}
      <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-white text-base sm:text-lg md:text-2xl font-extralight">
        <a href="#" className="hover:text-orange-950">Home</a>
        <a href="#" className="hover:text-orange-950">Rooms</a>
        <a href="#" className="hover:text-orange-950">Pools</a>
        <a href="#" className="hover:text-orange-950">Booking</a>
        <a href="#" className="hover:text-orange-950">Events</a>
        <a href="#" className="hover:text-orange-950">Contact</a>
      </nav>

      
    </div>
    </div>
  );
};
