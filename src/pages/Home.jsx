import { Background } from "../components/Background";
import { Navbar } from "../components/Navbar";
import { Home_Background } from "../components/Home/Home_Background";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Background>
      <Home_Background>
        <Navbar />
        
        <h1 className=" mt-20 md:mt-48 text-5xl  text-white drop-shadow-md text-center leading-tight">
        <div className="font-light">Welcome</div>
        <div className="text-gray-300 font-light">to</div>
        <div className="text-white text-7xl font-cabin-sketch">The Hotel</div>
        </h1>
        <p className="text-base md:text-xl text-center font-extralight text-white max-w-2xl mx-auto mb-6  px-4 py-2 rounded-3xl">
          Welcome to our premium hotel booking platform — where comfort meets luxury.
          Whether you're planning a romantic getaway, a family vacation, or a business
          trip, we have the perfect stay waiting for you.
        </p>
        <div className="text-center mt-4">
        <Link
  to="/booking"
  className="mt-6 inline-block bg-white/10 border border-white text-white px-8 py-3 rounded-full text-lg tracking-wide
    font-light uppercase transition duration-300 ease-in-out hover:bg-white hover:text-black
    hover:shadow-[0_12px_35px_rgba(0,0,0,1)] backdrop-opacity-40-md"
>
  Book Now
</Link>

      </div>
                
      </Home_Background>
    </Background>
  );
};