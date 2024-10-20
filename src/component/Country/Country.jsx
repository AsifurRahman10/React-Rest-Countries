import "./Country.css";
export default function Country({ country }) {
  const { name, flags, area, population } = country;
  console.log(country);
  return (
    <div className="country">
      <h3>Name : {name?.common}</h3>
      <img src={flags?.png} alt="" />
      <p>Area : {area}</p>
      <p>Population : {population}</p>
    </div>
  );
}
