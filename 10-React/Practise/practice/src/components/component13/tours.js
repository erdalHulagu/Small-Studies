import React, { useState, useEffect } from "react";
import { Alert, Button } from "react-bootstrap";
import data from "./data.json";
import Tour from "./tour";
const Tours = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setTours(data);
    }, 2000);
  }, []);

  const removeTour = (id) => {
    const arr = tours.filter((tour) => tour.id !== id);
    setTours(arr);
  };
  return (
    <div>
      <h2 className="text-center">Our Tours</h2>
      <div style={{ width: "75%", marginRight: "auto", marginLeft: "auto" }}>
        {tours.length == 0 ? (
          <>
            <Alert variant={"danger"} className="text-center">
              There is no tour to show
            </Alert>
            <Button variant="primary" onClick={()=>setTours(data)}>Bring Back</Button>
          </>
        ) : (
          tours.map((tour) => (
            <Tour key={tour.id} {...tour} removeTour={removeTour} />
          ))
        )}
      </div>
    </div>
  );
};

export default Tours;
