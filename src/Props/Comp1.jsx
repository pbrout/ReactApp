import React from "react";
import Comp2 from "./Comp2";

function Comp1() {
  let a = 200;
  let b = 400;
  return (
    <div>
      <h1>Comp1</h1> <hr />
      <Comp2 n1={a} n2={b} />
    </div>
  );
}

export default Comp1;
