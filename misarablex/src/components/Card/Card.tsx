import { IPlaces } from "../interfaces/interfaces";

type Props = { place: IPlaces; distance: number };

const Card = ({ place, distance }: Props) => {
  const { name, exercises } = place;

  return (
    <div className="place" key={name}>
      <h2 className="place__name">{name}</h2>
      <div className="image__container">
        <img src={`${place.img}`}></img>
      </div>

      <p className="place__distance">Distance: {distance.toFixed(2)} km</p>
      <p className="place__sports">Type of sports that you can practice:</p>
      <div className="sports__container">
        {exercises.map((exercise, index) => (
          <p className="sports" key={index}>
            {exercise}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Card;
