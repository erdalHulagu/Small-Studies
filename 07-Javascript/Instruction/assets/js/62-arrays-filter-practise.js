import { countries } from "../data/countries.js";


document.querySelector("#ddlCountries").addEventListener("change", (e)=> {
  const selectedValue = e.target.value;
});

const loadData = () => {
  let options = '<option value="" selected disabled >Select a country</option>';
 
  for (let country of countries) {
    //console.log(country);
    options += `<option value="${country.ccn3}">${country.name.common}</option>`;
  }

  //console.log(options);
  document.querySelector("#ddlCountries").innerHTML = options;
};


const getCountry = (ccn3) =>{
  const arr = countries.filter( (country)=> country.ccn3 === ccn3 );
  return arr.length>0 ? arr[0] : null;
}


loadData();
