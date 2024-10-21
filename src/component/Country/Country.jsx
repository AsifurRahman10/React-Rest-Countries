import { useState } from "react";
import "./Country.css";
export default function Country({
  country,
  handleMarkAsVisited,
  handleAddFlag,
}) {
  const { name, flags, area, population } = country;
  // console.log(handleAddFlag);
  const [visited, setVisited] = useState(false);
  const visitedBtn = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited && "visited"}`}>
      <h3 style={{ color: visited ? "purple" : "white" }}>
        Name : {name?.common}
      </h3>
      <img className="country-img" src={flags?.png} alt="" />
      <p>Area : {area}</p>
      <p>Population : {population}</p>
      <button onClick={() => handleAddFlag(flags?.png)}>Add flag</button>
      <br />
      <button onClick={() => handleMarkAsVisited(country)}>
        Mark as Visited
      </button>
      <br />
      <button onClick={visitedBtn}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
}
