export const Background = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-orange-300 overflow-hidden">
      {/* Animated Orange Gradient Blobs */}
      
      {/* Blob 1 – Soft & bright (upper left) */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] 
        bg-gradient-to-tr from-orange-100 via-orange-200 to-orange-400 
        rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob1">
      </div>

      {/* Blob 2 – Deep & warm (upper right) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] 
        bg-gradient-to-tr from-orange-500 via-orange-600 to-orange-700 
        rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob2">
      </div>

      {/* Blob 3 – Rich & moody (bottom center) */}
      <div className="absolute bottom-[-100px] left-1/4 w-[600px] h-[600px] 
        bg-gradient-to-tr from-orange-700 via-orange-800 to-orange-900 
        rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob3">
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
