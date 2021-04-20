import React from "react";

function EmployeeDetails(props) {
  return (
    <div className="text-center">
      <img alt="this is a persons face." className="img-fluid" src={props.image} style={{ margin: "0 auto" }} />
      <h3>Name: {props.firstName} {props.lastName}</h3>
      <h3>Age: {props.Age}</h3>
      <h3>Email: {props.Email}</h3>
    </div>
  );
}

export default EmployeeDetails;
