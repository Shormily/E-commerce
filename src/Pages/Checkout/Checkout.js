import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useParams } from "react-router-dom";
import useFirebase from "../Hook/useFirebase";

const Checkout = ({ img }) => {
  const [info, setInfo] = useState({});
  const { id } = useParams();
  const { user } = useFirebase();
  // useFirebase
  useEffect(() => {
    fetch(`http://localhost:3000/checkout/${id}`)
      .then((res) => res.json())
      .then((data) => setInfo(data));
  });

  const onSubmit = (data) => {
     console.log(data)
  };

  // data.status = "pending";
  //   data.photo =img ;
  //   console.log(data)
  //   data.userImg = user?.photoURL; 
  //   fetch("http://localhost:5000/orders", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //   .then(res => res.json())
  //   .then(result =>{
  //       if (result.insertedId) {
  //           alert("Order successfully");
  //           reset();
  //         }
  //   })

  const { register, handleSubmit ,reset} = useForm();

  return (
    <>
       <div className="container">
      <h1 className=" text-center mt-4 footer-weight text-primary ">Book Your Service</h1>
        <div className="row p-5 ">
          
          <div className="col-lg-6 col-md-12 col-12 ">
            <div className="card-containeres mb-4 rounded-2">
              <div className="">
                <div className="card-containeres  ">
                  <img src={info.img} alt="" />
                </div>
              </div>
              <div className="mb-3">
                <h3 className="text-center pragraph-weight mt-3 text-primary">
                  {info.names}
                </h3>
                <p className="text-center pragraph-weight p-3">
                  {info.description}
                </p>
                <NavLink as={NavLink} to="/service" className="p-4  ">
                  <button className="btnsdesigns px-4 mx-auto pragraph-weight text-light bg-primary rounded-1">
                    Cancel
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12 animate__animated animate__fadeInRight">
            <div className="add-service   ">
              <form className="" onSubmit={handleSubmit(onSubmit)}>
              {
                user && user.displayName && 
                <>
                  <input
                  {...register("name")}
                  value={user?.displayName}
                  placeholder="Name"
                  type="text"
                  className="mb-3 p-3  w-100 shadow pragraph-weight"
                />
                <input
                  {...register("userEmail")}
                  value={user?.email}
                  placeholder="Email"
                  type="email"
                  className="mb-3 p-3 form-control  w-100 shadow pragraph-weight"
                />
                
                </>
              }
               {
                info && info.name &&
                <input 
                    type="name"
                    placeholder="Package " 
                    {...register("package",{required: true})}
                    value={info.name}
                 
                    className="mb-3 p-3  w-100 form-control shadow pragraph-weight"
                     />
                }
                 
                   <input 
                    type="Price" 
                    {...register("price")}
                    value={info.price}
                    style={{ fontSize: "18px" }}
                    className="mb-3 p-3 form-control w-100 shadow pragraph-weight"
                     />
                   
               
                <input
                  {...register("address")}
                  type="text"
                  placeholder="Address"
                  className="mb-3 p-3  w-100 shadow "
                />
                <input
                  {...register("city")}
                  type="text"
                  placeholder="price"
                  className="mb-3 p-3  w-100 shadow pragraph-weight"
                />
                 {
                info && info.img &&

                <input 
                    type="img"
                    placeholder="img " 
                    {...register("img",{required: true})}
                    value={info.img}
                 
                    className="mb-3 p-3  w-100 form-control shadow pragraph-weight"
                     />
                }
                 
             
                <button
                  type="submit"
                  className="mb-3 p-3 btnsdesigns  btnsdesigns2  w-100 shadow  rounded-2 text-light pragraph-weight"
                >
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
