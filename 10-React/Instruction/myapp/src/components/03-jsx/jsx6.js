import React from "react";
import countries from "./countries.json";

const Jsx6 = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Country Name</th>
          <th>Country Code</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((country, index) => (
          <tr key={index}>
            <td>{index+1}</td>
            <td>{country.name}</td>
            <td>{country.code}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Jsx6;
