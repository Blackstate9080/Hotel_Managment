import { X } from "lucide-react"

export const Ham_Menu =({isOpen, onClose}) =>{
    return(
        <div 
        className={`fixed top-0 left-0 h-full w-4/6 md:w-1/3 xl:w-1/6 bg-white/20 backdrop-blur-md text-white z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
            <div className="relative px-4 py-4 border-b border-white/30">
            {/* Close Icon */}
            <X
                className="absolute top-4 right-4 w-6 h-6 cursor-pointer hover:text-gray-900"
                onClick={onClose}
            />
            <div className="flex flex-col items-center gap-2 mt-2">
                
            {/* Hi + Avatar + Name */}   
            {/* Circular Placeholder for Profile Image */}
                <img 
                src="/image.png"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/30"/>
                <span className="-mr-2 text-2xl md:text-3xl font-semibold">Hi,</span>
                <span className=" -mr-2 -mt-2 text-2xl md:text-3xl font-semibold">Iqbal Singh</span>
  </div>
</div>
        
        <div className="flex flex-col p-14 py-7 px-10 gap-4 md:gap-7 text-lg sm:text-2xl md:text-2xl font-extralight">
            <a href="#" className="hover:text-gray-900">Profile</a>
            <a href="#" className="hover:text-gray-900">Food orders</a>
            <a href="#" className="hover:text-gray-900">My Bookings</a>
            <a href="#" className="hover:text-gray-900">Payments</a>
            <a href="#" className="hover:text-gray-900">Booking History</a>
            <a href="#" className="hover:text-gray-900">Service Requests</a>
            <a href="#" className="hover:text-gray-900">Support</a>
            <a href="#" className="hover:text-gray-900">Change Password</a>
            <a href="#" className="hover:text-gray-900">Logout</a>
            </div>
        </div>
       
    )
}