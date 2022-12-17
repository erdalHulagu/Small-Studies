import { countries } from "../data/countries.js";

const loadData = () => {
  let options = "";
 
  console.log(countries.length);
  for (let country of countries) {
    //console.log(country);
    options += `<option value="${country.ccn3}">${country.name.common}</option>`;
  }

  console.log(options);
  document.querySelector("#ddlCountries").innerHTML = options;
};

loadData();
