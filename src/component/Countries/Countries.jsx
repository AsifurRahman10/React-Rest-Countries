import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [markAsVisited, setMarkAsVisited] = useState([]);
  const [addFlag, setAddFlag] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  const handleMarkAsVisited = (country) => {
    // console.log("Hello");
    const newVisitedCountries = [...markAsVisited, country];
    setMarkAsVisited(newVisitedCountries);
  };
  const handleAddFlag = (flag) => {
    const newAddFlag = [...addFlag, flag];
    setAddFlag(newAddFlag);
  };
  return (
    <div>
      <p>Countries: {countries.length}</p>
      <p>Visited Countries : {markAsVisited.length}</p>
      <div className="flag">
        {addFlag.map((flag, idx) => (
          <img key={idx} src={flag} alt="" />
        ))}
      </div>
      <ul>
        {markAsVisited.map((visitedList) => (
          <li key={visitedList.cca2}>{visitedList.name.common}</li>
        ))}
      </ul>
      <div className="countries-container">
        {countries.map((country) => (
          <Country
            handleMarkAsVisited={handleMarkAsVisited}
            handleAddFlag={handleAddFlag}
            key={country.cca2}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
}
