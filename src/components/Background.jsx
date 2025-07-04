export const Background = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0a] overflow-hidden">
      {/* Blob 1 – muted silver glow (top-left) */}
      <div className="absolute top-[-120px] left-[-120px] w-[600px] h-[600px] 
        bg-gradient-to-tr from-[#3a3a3a] via-[#4a4a4a] to-[#6a6a6a]
        rounded-full mix-blend-screen filter blur-[140px] opacity-50 animate-blob1">
      </div>

      {/* Blob 2 – deeper shadowed glow (top-right) */}
      <div className="absolute top-[-100px] right-[-100px] w-[700px] h-[700px] 
        bg-gradient-to-br from-[#2a2a2a] via-[#1f1f1f] to-black 
        rounded-full mix-blend-screen filter blur-[140px] opacity-50 animate-blob2">
      </div>

      {/* Blob 3 – cool moody highlight (bottom-center) */}
      <div className="absolute bottom-[-100px] left-[25%] w-[700px] h-[700px] 
        bg-gradient-to-tr from-[#4e4e4e] via-[#2a2a2a] to-[#0d0d0d]
        rounded-full mix-blend-screen filter blur-[130px] opacity-45 animate-blob3">
      </div>

      {/* Foreground content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
