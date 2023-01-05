import React from "react";

const Style2 = () => {

    const styleTitle = {
        fontSize: "2rem",
        color: "red",
        fontWeight: "bold",
        textAlign:"center",
    }


  return (
    <div>
      <h2 style={styleTitle}>JSX Loops</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, neque
        repellat molestiae assumenda aut laborum iure, porro voluptatum commodi
        rerum suscipit illum aliquid possimus? Itaque nam quam eaque placeat
        non!
      </p>

      <h2 style={{...styleTitle, color:"blue"}}>Component Props</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, neque
        repellat molestiae assumenda aut laborum iure, porro voluptatum commodi
        rerum suscipit illum aliquid possimus? Itaque nam quam eaque placeat
        non!
      </p>
    </div>
  );
};

export default Style2;
