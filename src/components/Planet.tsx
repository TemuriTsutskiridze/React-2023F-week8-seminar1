import data from "../data.json";
import { useParams } from "react-router";

export default function Planet() {
  const params = useParams();
  console.log(params);
  const planetName = params.planet;
  console.log(planetName);

  const planet = data.find((planetObj) => planetObj.name === planetName);

  return <div>{planet?.name}</div>;
}
