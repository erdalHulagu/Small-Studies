import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Country from "./country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const resp = await axios.get("https://restcountries.com/v3.1/all");

      

      console.log(Object.keys(resp.data[0].currencies));



      const arr = resp.data.map((item) => ({
        flag: item.flags.png,
        name: item.name.common,
        population: item.population,
        capital: item.capital?.join("-")      }));

      setCountries(arr);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Flag</th>
          <th>Country Name</th>
          <th>Population</th>
          <th>Capital</th>
          <th>Curency</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((item) => (
          <Country {...item} key={item.name} />
        ))}
      </tbody>
    </Table>
  );
};

export default Countries;
