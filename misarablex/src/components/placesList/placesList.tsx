import { useState } from "react";
import { calculateDistance } from "../../utils/calculateDistance";
import { IPlacesListProps } from "../interfaces/interfaces";
import RadioGroup from "../radioGroup/RadioGroup";
import Card from "../Card/Card";

const PlacesList = ({ places, userPos }: IPlacesListProps) => {
  const [selectedSports, setSelectedSports] = useState<string[]>([]);

  function hasCommonElement(array1: string[], array2: string[]) {
    return array1.some((element) => array2.includes(element));
  }

  return (
    <>
      <RadioGroup setSelectedSports={setSelectedSports}></RadioGroup>
      <ul className="container__places">
        {places
          .sort((a, b) => {
            const distanceA = calculateDistance(
              userPos.lat,
              userPos.lon,
              a.lat,
              a.lon
            );
            const distanceB = calculateDistance(
              userPos.lat,
              userPos.lon,
              b.lat,
              b.lon
            );
            return distanceA - distanceB;
          })
          .filter((place) => {
            if (selectedSports.length == 0) return place;
            else {
              return hasCommonElement(place.exercises, selectedSports);
            }
          })
          .map((place) => {
            const distance = calculateDistance(
              userPos.lat,
              userPos.lon,
              place.lat,
              place.lon
            );
            return <Card place={place} distance={distance} />;
          })}
      </ul>
    </>
  );
};

export default PlacesList;
