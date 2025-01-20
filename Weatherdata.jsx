import React, { useState, useEffect } from "react";
import axios from "axios";

function Weatherdata() {
  let [capital, setCapital] = useState("");
  let [population, setpopulation] = useState("");
  let [area, setArea] = useState("");
  let [flag, setflag] = useState("");
  let [country, setCountry] = useState("india");

  let data = () => {
    let errorimg = "";
    axios
      .get(`https://restcountries.com/v3.1/name/${country}`)
      .then((response) => {
        // console.log("trigered button");
        // console.log(country);
        console.log(response.data[0]);
        setCapital(response.data[0].capital);
        setpopulation(response.data[0].population);
        setArea(response.data[0].area);
        setflag(response.data[0].flags.svg);
        console.log(response.data[0].flags.svg);
      })
      .catch(() => {
        setCapital("not found");
        setpopulation("not found");
        setArea("not found");
        setflag("");
      });
  };
  useEffect(() => {});
  return (
    <div>
      <h2>Data About world</h2>
      <h4>what is the capital of :</h4>
      <input
        className="p-2 my-2"
        type="Text"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        placeholder="Enter country"
      ></input>
      <p>{country}</p>
      <button onClick={data}>answer</button>
      <p>capital of the country : {capital}</p>
      <p>population : {population}</p>
      <p>area: {area}</p>

      {flag ? (
        <img className="w-25" src={flag} alt={flag} />
      ) : (
        <svg
          fill="#000000"
          version="1.1"
          baseProfile="tiny"
          id="Layer_1"
          xmlns:x="&ns_extend;"
          xmlns:i="&ns_ai;"
          xmlns:graph="&ns_graphs;"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
          width="80px"
          height="80px"
          viewBox="-0.5 0.5 42 42"
          xml:space="preserve"
        >
          <path
            d="M29.582,8.683l-0.129,0.12L8.3,29.954c-0.249,0.249-0.428,0.478-0.547,0.688c-2.04-2.639-3.233-6-3.233-9.701
           c0-8.797,6.626-15.482,15.421-15.482C23.632,5.459,26.955,6.644,29.582,8.683z M10.937,33.704c0.189-0.117,0.388-0.287,0.606-0.507
           l21.151-21.151l0.041-0.04c1.74,2.518,2.746,5.602,2.746,8.994c0,8.785-6.696,15.541-15.481,15.541
           C16.568,36.541,13.454,35.506,10.937,33.704z M0.5,21c0,10.775,8.735,19.5,19.5,19.5c10.767,0,19.501-8.725,19.501-19.5
           c0-10.775-8.734-19.5-19.5-19.5C9.235,1.5,0.5,10.225,0.5,21z"
          />
        </svg>
      )}
    </div>
  );
}

export default Weatherdata;
