import React from "react";

const Jsx7 = ({ rate = 3 }) => {
  /* 
  const arr = [];

  for(let i=1; i<=5; i++){
    if(i<=rate){
      arr.push("O");
    }
    else{
      arr.push("X")
    }
  }
 */

  return (
    <div>
      {/* arr.join("") */}

      {[...new Array(5)].map((item, index) => (index < rate ? "O" : "X"))}
    </div>
  );
};

export default Jsx7;
