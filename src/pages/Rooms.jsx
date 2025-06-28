import { Navbar } from "../components/Navbar";

export const Rooms = () => {
  const rooms = [
    {
      title: "Deluxe Suite",
      image: "/1_room.jpg",
      description: "Spacious suite with king-sized bed and city view.",
    },
    {
      title: "Luxury Room",
      image: "/2_room.jpg",
      description: "Elegant room with modern amenities and private balcony.",
    },
    {
      title: "Standard Room",
      image: "/3_room.jpg",
      description: "Comfortable room perfect for solo travelers or couples.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Navbar */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Page Title */}
      <div className="relative z-10 text-center pt-28">
        <h1 className="text-4xl font-bold">🛏️ Our Rooms</h1>
        <p className="text-gray-300 mt-2">Choose from a variety of room types to suit your stay.</p>
      </div>

      {/* Room Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-16 max-w-6xl mx-auto">
        {rooms.map((room, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden shadow-xl hover:scale-105 transition-transform"
          >
            <img src={room.image} alt={room.title} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{room.title}</h2>
              <p className="text-gray-300 mt-2">{room.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
