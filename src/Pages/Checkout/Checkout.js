import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useParams } from "react-router-dom";
import useFirebase from "../Hook/useFirebase";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Header from "../Headers/Header";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Footer from "../Footer/Footer";
import Swal from "sweetalert2";
const Checkout = ({ img }) => {
  const [info, setInfo] = useState({});
  const { id } = useParams();
  const { user } = useFirebase();
  // useFirebase
  useEffect(() => {
    fetch(`http://localhost:5000/singleServices/${id}`)
      .then((res) => res.json())
      .then((data) => setInfo(data));
  });

  const onSubmit = (data) => {
    data.status = "pending";
    data.photo =img ;
    console.log(data);
    data.userImg = user?.photoURL;
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire(
            'Successfully Order Complete!',
           
            'success'
          )
           reset();
        }
      });
  };

  const { register, handleSubmit, reset } = useForm();

  return (
    <>
    <Header/>
      <div className="container">
        <h1 className=" text-center mt-4 footer-weight text-primary ">
          Book Your Service
        </h1>
        <div className="row p-5 d-flex ">
          <div className="col-lg-6 col-md-6 col-12  ">
            <Card style={{ width: "19rem" }} className="mb-4 shadow ">
              <Card.Img variant="top"   src={info.img} />
              <Card.Body>
                <Card.Title>{info.name}</Card.Title>
                <Card.Text>{info.description}</Card.Text>
                <NavLink as={NavLink} to="/service" className="p-4  ">
                  <button className="btnsdesigns px-5  pragraph-weight text-light bg-primary rounded-1">
                    Cancel
                  </button>
                </NavLink>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-6 col-md-6 col-12 animate__animated animate__fadeInRight">
            <div className="add-service   ">
              <form className="" onSubmit={handleSubmit(onSubmit)}>
                {user && user.displayName && (
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
                )}
                {info && info.name && (
                  <input
                    type="name"
                    placeholder="Package "
                    {...register("package", { required: true })}
                    value={info.name}
                    className="mb-3 p-3  w-100 form-control shadow pragraph-weight"
                  />
                )}

               

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
                {info && info.img && (
                  <input
                    type="img"
                    placeholder="img "
                    {...register("img", { required: true })}
                    value={info.img}
                    className="mb-3 p-3 w-100 form-control shadow pragraph-weight"
                  />
                )}

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
      <Footer/>
    </>
  );
};

export default Checkout;
