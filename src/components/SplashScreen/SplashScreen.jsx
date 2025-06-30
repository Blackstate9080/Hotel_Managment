import { useEffect, useState } from "react";
import "./SplashScreen.css";

export const SplashScreen = ({ onFinish }) => {
  const [startSplit, setStartSplit] = useState(false);
  const [fadeOutLogo, setFadeOutLogo] = useState(false);
  const [hideLogo, setHideLogo] = useState(false);

  useEffect(() => {
    const start = setTimeout(() => {
      setFadeOutLogo(true);   // Start fading logo
      setStartSplit(true);    // Start background split
    }, 1500);

    const hide = setTimeout(() => {
      setHideLogo(true); // Hide logo element from DOM
    }, 2500);

    const finish = setTimeout(() => {
      onFinish(); // Done with splash
    }, 3500);

    return () => {
      clearTimeout(start);
      clearTimeout(hide);
      clearTimeout(finish);
    };
  }, [onFinish]);

  return (
    <div className={`splash-container`}>
      <div className={`splash-half top ${startSplit ? "animate-up" : ""}`}></div>
      <div className={`splash-half bottom ${startSplit ? "animate-down" : ""}`}></div>

      {!hideLogo && (
        <img
          src="/Hotel_logo.svg"
          alt="Logo"
          className={`splash-logo ${fadeOutLogo ? "fade-out" : ""}`}
        />
      )}
    </div>
  );
};
