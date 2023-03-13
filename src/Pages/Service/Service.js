import React, { useEffect, useState } from "react";
import Box from "../Box/Box";
import Header from "../Headers/Header";


const Service = () => {
  const [services, setServices] = useState([]);
  // fetch("http://localhost:5000/services")
  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  
  return (
    
    <>
    <Header/>
      <div className="banner2 p-5 ">
        <div className="container ">
          <div className="row ">
            <div className=" text-light">
              <h1 className=" display-3 mt-5">
                Top Electronic <span className="text-warning">Services</span>
              </h1>
              <h4 className=" w-50 mt-4 mb-4">
                Explore latest selection of Laptops, Tablets, Cameras & More
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row ">
          {services.map((service) => (
            <Box key={services.id} service={service} setServices={setServices}>
              card:{services.length}
            </Box>
          ))}
          
        </div>
      </div>
    </>
  );
};

export default Service;
