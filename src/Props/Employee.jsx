import React from "react";
import Edetails from "./Edetails";

function Employee() {
  let eName = "Preetibardhan";
  let eSalary = 40000;
  let eLoc = ["Bhubaneswar", " ", "Bengaluru"];
  return (
    <div>
      <h1>Emplyee Details</h1>
      <Edetails Prop1={eName} Prop2={eSalary} Prop3={eLoc} />
    </div>
  );
}

export default Employee;
