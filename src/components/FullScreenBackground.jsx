import { useEffect, useState } from "react";

// Example image lists for each section
const sectionImages = {
  home: ["/home1.jpg", "/images/home2.jpg"],
  rooms: ["/1_room.jpg", "/2_room.jpg", "/3_room.jpg"],
  pools: ["/pool1.jpg", "/images/pool2.jpg"],
  booking: ["/booking1.jpg"],
  events: ["/event1.jpg", "/images/event2.jpg"],
  contact: ["/contact1.jpg"],
};

export const FullScreenBackground = ({ section }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = sectionImages[section] || sectionImages["home"];

  // Auto-cycle images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [images]);

  // Reset to first image when section changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [section]);

  const currentImage = images[currentIndex];
  const label = section.charAt(0).toUpperCase() + section.slice(1);

  return (
    <div
      className="fixed inset-0 z-0 bg-center bg-cover transition-all duration-700 ease-in-out"
      style={{
        backgroundImage: `url(${currentImage})`,
      }}
    >
      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Section Title */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-white text-5xl font-bold drop-shadow-lg">
        {label}
      </div>
    </div>
  );
};
