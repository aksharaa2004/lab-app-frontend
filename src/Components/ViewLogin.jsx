import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";


const ViewLogin = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/viewall")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    
    <div className="container mt-4">
        <NavBar/>
  
      <div className="row g-4">
        {data.map((value, index) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3"
            key={index}
          >
            <div className="card shadow" style={{ width: "100%" }}>
              <div className="card-body">
                <h5 className="card-title">{value.name}</h5>

                <p className="card-text">
                  <strong>Department:</strong> {value.department}
                </p>

                <p className="card-text">
                  <strong>Semester:</strong> {value.sem}
                </p>

                <p className="card-text">
                  <strong>Course:</strong> {value.course}
                </p>

                <p className="card-text">
                  <strong>System Number:</strong> {value.systemnumber}
                </p>

                <p className="card-text">
                  <strong>Login Time:</strong> {value.logintime}
                </p>

                <p className="card-text">
                  <strong>Logout Time:</strong> {value.logouttime}
                </p>

                <p className="card-text">
                  <strong>Date:</strong> {value.date}
                </p>

                <button className="btn btn-primary">
                  More Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewLogin;