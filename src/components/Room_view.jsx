import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const roomImages = [
  "/room1.jpg",
  "/room2.jpg",
  "/room3.jpg",
];

export const Room_view = ({ isVisible }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roomImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] relative overflow-hidden">
      <img
        src={roomImages[currentIndex]}
        alt={`Room ${currentIndex + 1}`}
        className="w-full h-full object-cover transition duration-500"
      />

      <ChevronLeft
        onClick={() =>
          setCurrentIndex((prev) => (prev === 0 ? roomImages.length - 1 : prev - 1))
        }
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white w-8 h-8 cursor-pointer hover:text-orange-500"
      />
      <ChevronRight
        onClick={() =>
          setCurrentIndex((prev) => (prev + 1) % roomImages.length)
        }
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white w-8 h-8 cursor-pointer hover:text-orange-500"
      />
    </div>
  );
};
