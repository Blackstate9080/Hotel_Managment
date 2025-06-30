// src/components/AnimatedBackground.jsx
import { useEffect, useState } from "react";

const images = [
  "/Restaurant/Restaurant_2.webp",
  "/Restaurant/Restaurant_3.webp",
  "/Restaurant/Restaurant_4.webp",
  "/Restaurant/Restaurant_5.webp",
  "/Restaurant/Restaurant_6.webp",
];

export const Restaurant_Background = ({ children }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* background image with dark filters */}
      <div
        className="absolute inset-0 bg-center bg-cover transition-opacity duration-1000 ease-in-out filter brightness-[0.7] contrast-[1.1] saturate-100"
        style={{
          backgroundImage: `url(${images[index]})`,
        }}
      ></div>

      {/* dark overlay (optional, for additional depth) */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* content above background */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
