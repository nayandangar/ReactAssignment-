import React, { useState } from "react";
import { Button } from "reactstrap";

export default function Incriment_decriment() {
  const [index, setindex] = useState(0);
  const color = [
    "blueviolet",
    "darkcyan", 
    "cadetblue",
    "crimson",
    "chocolate",
    "brown",
    "black",
    "green",
    "aqua",
    "blueviolet",
    "cadetblue",
    "crimson",
    "chocolate",
    "brown",
    "black",
    "green",
  ];
  const ColorHandler = () => {
    if (index + 1 >= color.length) {
      ``;
      setindex(0);
    } else {
      setindex(index + 1);
    }
  };
  const Decriment = () => {
    if (index - 1 < 0) {
      setindex(color.length - 1);  
    } else {
      setindex(index - 1);
    }
  };
 const Reset = () => {
    setindex(0);
  };

  return (
    <div>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          height: "100vh",
          width: "100wh",
          backgroundColor: color[index],
        }}
      >
        <h1>{index}</h1>
        <div className="d-flex gap-5">
          <Button onClick={() => ColorHandler()} color="dark">
            Incriment with color
          </Button>

          <Button onClick={() => Reset()} color="primary">
            Reset
          </Button>
          <Button onClick={() => Decriment()} color="success">
            Decriment with color
          </Button>
        </div>
      </div>
    </div>
  );
}
