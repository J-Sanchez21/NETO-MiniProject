import { useState, useRef, useEffect } from "react";
import "./MainPage.css";
import NearbyPlaces from "../nearbyPlaces/NearbyPlaces";
import RandomQuote from "../randomQuote/RandomQuote";
import Header from "../header/Header";

function MainPage() {
  const [showPlaces, setShowPlaces] = useState(false);
  const placesRef = useRef<HTMLDivElement | null>(null);
  const mainContainerRef = useRef<HTMLDivElement | null>(null);

  const handleButtonClick = (): void => {
    setShowPlaces((prevShowPlaces) => !prevShowPlaces);
  };

  useEffect(() => {
    if (showPlaces && placesRef.current) {
      placesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showPlaces]);

  useEffect(() => {
    if (mainContainerRef.current) {
      mainContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div ref={mainContainerRef} className="main-container flex flex-col">
        <header className="header">
          <Header />
          <RandomQuote />
        </header>
        <h2 className="instructions">
          Press the Button to Find Nearby Places to Workout
        </h2>
        <button className="find-places-button" onClick={handleButtonClick}>
          Discover Places
        </button>
      </div>
      {showPlaces && (
        <div ref={placesRef} className="places" id="places-section">
          <NearbyPlaces />
        </div>
      )}
    </>
  );
}

export default MainPage;
