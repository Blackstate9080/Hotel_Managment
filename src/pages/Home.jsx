import { Background } from "../components/Background";
import { Navbar } from "../components/Navbar";
import { Home_Background } from "../components/Home/Home_Background";

export const Home = () => {
  return (
    <Background>
      <Home_Background>
        <Navbar />
        
        <h1 className="mt-48 text-5xl  text-white drop-shadow-md text-center leading-tight">
        <div className="font-light">Welcome</div>
        <div className="text-gray-300 font-light">to</div>
        <div className="text-white text-7xl font-cabin-sketch">The Hotel</div>
        </h1>
        
      </Home_Background>
    </Background>
  );
};