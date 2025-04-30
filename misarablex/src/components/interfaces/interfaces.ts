export interface IPlaces {
  id: number;
  name: string;
  lat: number;
  lon: number;
  exercises: string[];
  distance?: number;
  img: string;
}

export interface IPersonPosition {
  lat: number;
  lon: number;
}

export interface IPlacesListProps {
  places: IPlaces[];
  userPos: IPersonPosition;
}
