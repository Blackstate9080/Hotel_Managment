import { Background } from "../components/Background";
import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Room_Background } from "../components/Rooms/Room_Background";
import { Link } from "react-router-dom";

export const Rooms = () => {
   const [animateText, setAnimateText] = useState(false);
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setAnimateText(true); // Trigger animation after 1 second
      }, 500); // adjust timing here (in milliseconds)
  
      return () => clearTimeout(timeout);
    }, []);
  
    return (

    <Background>
      <Room_Background>
        <Navbar />
        
        <h1 className="mt-60 md:mt-80 text-5xl text-white drop-shadow-md text-center leading-tight">
          <div
            className={`font-light transition-opacity-transform duration-700 ${
              animateText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            Discover Our Elegant
          </div>
          
          <div
            className={`text-white text-7xl font-cabin-sketch transition-opacity-transform duration-700 delay-500 ${
              animateText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            Rooms
          </div>
        </h1>

        <p
          className={`text-base md:text-xl text-center font-extralight text-white max-w-2xl mx-auto mb-6 px-4 py-2 rounded-3xl transition-opacity-transform duration-700 delay-700 ${
            animateText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          Each room is crafted with comfort and sophistication in mind — from luxurious suites with panoramic views to cozy chambers that blend modern style with timeless elegance. 
    Whether you're here for leisure or business, our rooms offer an unmatched stay.
        </p>

        <div className="text-center mt-4">
          <Link
            to="/booking"
            className={`mt-6 inline-block bg-white/10 border border-white text-white px-8 py-3 rounded-full text-lg tracking-wide
              font-light uppercase transition-opacity-transform duration-700 delay-1000 ease-in-out hover:bg-white hover:text-black
              hover:shadow-[0_12px_35px_rgba(0,0,0,1)] backdrop-opacity-40-md ${
                animateText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
          >
            Book Your now
          </Link>
        </div>
                
      </Room_Background>
    </Background>
  );
};