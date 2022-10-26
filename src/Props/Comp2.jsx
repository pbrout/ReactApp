import React from "react";

function Comp2(props) {
  return (
    <div>
      <pre>{JSON.stringify(props)}</pre>
      <h5>Num1:{props.n1}</h5>
      <h5>Num1:{props.n2}</h5>
    </div>
  );
}

export default Comp2;
