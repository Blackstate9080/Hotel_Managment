import { Background } from "../components/Background";
import { Navbar } from "../components/Navbar";
import { Restaurant_Background } from "../components/Restaurant/Restaurant_Background";
import { Link } from "react-router-dom";

export const Restaurant = () => {
  return (
    <Background>
      <Restaurant_Background>
        <Navbar />
        
        <h1 className="mt-60 md:mt-96 text-5xl text-white drop-shadow-md text-center leading-tight">
          <div className="text-white text-3xl md:text-5xl font-extralight">
            Dine in Style at
          </div>
          <div className="text-white text-5xl md:text-6xl font-cabin-sketch">
            Our Signature Restaurant
          </div>
          <div className="text-white text-[1px] md:text-[1px] font-cabin-sketch">
            For AASHIYA
          </div>
        </h1>

        <p className="text-base md:text-xl text-center font-extralight text-white max-w-2xl mx-auto mb-6 px-4 py-2 rounded-3xl">
          Savor gourmet dishes crafted with passion, where modern flair meets timeless recipes.
          From handcrafted appetizers to decadent desserts, each meal is an experience — curated in
          an ambiance of elegance and warmth.
        </p>

        <div className="text-center mt-4">
          <Link
            to="/booking"
            className="mt-6 inline-block bg-white/10 border border-white text-white px-8 py-3 rounded-full text-lg tracking-wide
              font-light uppercase transition duration-300 ease-in-out hover:bg-white hover:text-black
              hover:shadow-[0_12px_35px_rgba(0,0,0,1)] backdrop-opacity-40-md"
          >
            Reserve a Table
          </Link>
        </div>
                
      </Restaurant_Background>
    </Background>
  );
};