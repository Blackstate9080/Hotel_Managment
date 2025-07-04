import { Background } from "../components/Background";
import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Gym_Background } from "../components/Gym/Gym_Background";
import { Link } from "react-router-dom";

export const Gym = () => {
   const [animateText, setAnimateText] = useState(false);
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setAnimateText(true); // Trigger animation after 1 second
      }, 500); // adjust timing here (in milliseconds)
  
      return () => clearTimeout(timeout);
    }, []);
  
    return (

    <Background>
      <Gym_Background>
        <Navbar />
        
        <h1 className="mt-60 md:mt-80 text-5xl text-white drop-shadow-md text-center leading-tight">
          <div
            className={`lora-sans text-4xl transition-all duration-700 ${
              animateText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            Rejuvenate at Our
          </div>

          <div
            className={`text-6xl md:text-7xl cinzel-decorative-regular transition-all duration-700 delay-500 ${
              animateText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <span className="bg-gradient-to-r from-[#ffffff] via-[#a7a7a7] to-[#ffffff] 
                   bg-clip-text text-transparent 
                   bg-[length:200%_200%] animate-text-gradient">
              Fitness Center
            </span>
          </div>
        </h1>

        <p
          className={`text-base md:text-xl text-center font-extralight text-white max-w-2xl mx-auto mb-6 px-4 py-2 rounded-3xl transition-all duration-700 delay-700 ${
            animateText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          Our state-of-the-art gym is fully equipped to help you maintain your fitness routine while traveling. 
          From modern cardio machines to free weights and personal training options, we ensure a balanced and energizing experience in a clean and spacious environment.
        </p>

        <div className="text-center mt-4">
          <Link
            to="/booking"
            className={`mt-6 inline-block bg-white/10 border border-white text-white px-8 py-3 rounded-full text-lg tracking-wide
              font-light uppercase transition-all duration-700 delay-1000 ease-in-out hover:bg-white hover:text-black
              hover:shadow-[0_12px_35px_rgba(0,0,0,1)] backdrop-opacity-40-md ${
                animateText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
          >
            Get Access
          </Link>
        </div>
                
      </Gym_Background>
    </Background>
  );
};