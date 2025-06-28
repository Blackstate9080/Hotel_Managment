// src/components/AnimatedBackground.jsx
import { useEffect, useState } from "react";

const images = [
  "/Home/Home_4.png",
  "/Home/Home_2.png",
  "/Home/Home_3.png",
  "/Home/Home_1.png", // Make sure these are in the `public/` folder
];

export const Home_Background = ({ children }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-screen overflow-hidden transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${images[index]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* content above background */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
