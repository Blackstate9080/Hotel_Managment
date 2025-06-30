import { useEffect, useState } from "react";
import "./SplashScreen.css";

export const SplashScreen = ({ onFinish }) => {
  const [fadeOutLogo, setFadeOutLogo] = useState(false);
  const [startSplit, setStartSplit] = useState(false);

  useEffect(() => {
    const logoTimer = setTimeout(() => setFadeOutLogo(true), 2000); // 2s logo visible
    const splitTimer = setTimeout(() => setStartSplit(true), 3000); // 3s start split
    const finishTimer = setTimeout(() => onFinish(), 4500); // total 4.5s

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(splitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div className={`splash-container ${startSplit ? "split" : ""}`}>
      <div className={`splash-half top ${startSplit ? "animate-up" : ""}`}></div>
      <div className={`splash-half bottom ${startSplit ? "animate-down" : ""}`}></div>
      <img
        src="/Hotel_logo.svg"
        alt="Logo"
        className={`splash-logo ${fadeOutLogo ? "fade-out" : ""}`}
      />
    </div>
  );
};
