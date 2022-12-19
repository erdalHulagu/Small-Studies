import { countries } from "../data/countries.js";


document.querySelector("#ddlCountries").addEventListener("change", (e)=> {
  //console.log(e.target.options[e.target.selectedIndex].text);

  const selectedValue = e.target.value;
  const selectedCountry = getCountry(selectedValue);

  if(!selectedCountry) return;

  const tableEl = document.querySelector("#tblCountry");

  tableEl.querySelector("tr:nth-child(1) td").innerHTML = selectedCountry.capital;
  tableEl.querySelector("tr:nth-child(2) td").innerHTML = Object.values(selectedCountry.currencies).map( (item)=> item.name ).join("-");
  tableEl.querySelector("tr:nth-child(3) td").innerHTML = Object.values(selectedCountry.languages).join("-");

  tableEl.style.display = "block";

  console.log();

});

const loadData = () => {
  let options = '<option value="" selected disabled >Select a country</option>';
 
  countries.sort();

  for (let country of countries) {
    //console.log(country);
    options += `<option value="${country.ccn3}">${country.name.common}</option>`;
  }

  //console.log(options);
  document.querySelector("#ddlCountries").innerHTML = options;
  document.querySelector("#totalArea span").innerHTML = getTotalArea();
};

const getTotalArea = () => {
  return countries.reduce( (t, country)=> t + country.area, 0  );
}

const getCountry = (ccn3) =>{
  const arr = countries.filter( (country)=> country.ccn3 === ccn3 );
  return arr.length>0 ? arr[0] : null;
}


loadData();
