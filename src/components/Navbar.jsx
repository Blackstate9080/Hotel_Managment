export const Navbar = () => {
  return (
    <div className="w-full bg-white/10 backdrop-blur-xl border- border-white/20 py-4 ">

      {/* Logo Centered inside container */}
      <div className="max-w-7xl mx-auto flex justify-center">
        <img 
          src="/Hotel_logo.svg" 
          alt="Hotel Logo" 
          className="w-[120px] h-[120px] object-contain" 
        />
      </div>

      {/* Full-width Divider under logo */}
      <div className="w-full">
        <hr className="border-t border-white/20 my-1" />
      </div>

      {/* Nav Links Centered */}
      <nav className="flex justify-center gap-8 text-white text-lg font-extralight">
        <a href="#" className="hover:text-orange-950">Home</a>
        <a href="#" className="hover:text-orange-950">Rooms</a>
        <a href="#" className="hover:text-orange-950">Pools</a>
        <a href="#" className="hover:text-orange-950">Booking</a>
        <a href="#" className="hover:text-orange-950">Events</a>
        <a href="#" className="hover:text-orange-950">Contact</a>
      </nav>

      
    </div>
  );
};
