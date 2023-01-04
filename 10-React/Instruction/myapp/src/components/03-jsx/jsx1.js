import React from "react";

const Jsx1 = () => {
  const message =
    "Class isimleri className içinde verilir ve attribute lar camelCase olarak yaızılır";

  return (
    <ul>
      <li>Tüm elementler tek bir root element içinde olmalı</li>
      <li className="title">{message}</li>
    </ul>
  );
};

export default Jsx1;
