import React from "react";

const Jsx2 = () => {
  const user = {
    name: "Ali Gel",
    email: "ali@gel.com",
    occupation: "Developer",
  };

  

  return (
    <div>
      <div>Name: {user.name}</div>
      <div>Email: {user.email}</div>
      <div>Occupation: {user.occupation}</div>
    </div>
  );
};

export default Jsx2;
