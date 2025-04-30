import { useState, useEffect } from "react";
import { IPersonPosition, IPlaces } from "../interfaces/interfaces";
import PlacesList from "../placesList/placesList";

const NearbyPlaces = () => {
  const [places, setPlaces] = useState<IPlaces[]>([]);
  const [userPosition, setUserPosition] = useState<IPersonPosition>({
    lat: 0,
    lon: 0,
  });

  const getPosition = (): void => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserPosition({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  };

  useEffect(() => {
    if (navigator.geolocation) getPosition();
    else alert("You didn't grant access to location");
  }, []);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await fetch("/data/places.json");
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        const data = await response.json();
        setPlaces(data);
      } catch (error) {
        console.error("Fetching data error ", error);
      }
    };
    fetchPlaces();
  }, []);

  return (
    <div className="container p-200">
      <h1 className="text-3xl font-bold flex mt-400 ">
        Nearby Places to Workout:{" "}
      </h1>
      <PlacesList places={places} userPos={userPosition} />
    </div>
  );
};

export default NearbyPlaces;
