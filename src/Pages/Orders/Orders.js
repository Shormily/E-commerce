import React, { useEffect, useState } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "./Orders.css"

const Orders = () => {
  const [users, setUsers] = useState([]);

  // console.log(users);

  useEffect(() => {
    fetch(`http://localhost:5000/orders`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  });
  // Delete an user
  const handleDeleteUsers = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/orders`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("deleted successfully");

            const remainingUsers = users.filter((user) => user._id !== id);
            setUsers(remainingUsers);
          }
        });
    }
  };

  return (
    <>
    <div className="Orders ">
  
      <div >
      <Container className="px-5  ">
      <h1>Clients Order</h1>
        {users.map((user) => (
          <Row
            className="align-items-center bg-light my-4  rounded-1 shadow"
            key={user._id}
          >
            <Col xs={4} md={2}>
              <img
                src={user.userImg}
                className="rounded-circle img-fluid w-50"
                alt=""
              />
            </Col>
            <Col xs={12} md={4} className="p-3">
              <p className="gulapi-text p">
                {user.name}
                </p>
              <p className="blue-text">
                {user.userEmail}
                </p>
            </Col>
            <Col xs={12} md={2}>
              <img src={user.img} className="img-fluid w-75" alt="" />
            </Col>
            <Col xs={6} md={2} className="p-3">
              <p className="text-danger">
                
                {user.status}
                </p>
              <p className="text-black">
                {user.package}
                </p>
              <p className="text-black-50">
                {user.date}
                </p>
            </Col>
            <Col xs={6} md={2}>
              {/* <Link to={`/manage_all_order/${user._id}`}>
          <Button className="px-4 rounded-0 py-2 btn-order-color button animate__animated animate__backInUp animate__delay-1s blue-text fw-bold mb-2 w-100">Update</Button> <br/>
          </Link> */}
              <Button
                onClick={() => handleDeleteUsers(user._id)}
                className="px-2 rounded-0 button animate__animated animate__backInUp animate__delay-1s pink-text fw-bold w-100 btn-order-color"
              >
                Delete
              </Button>
            </Col>
          </Row>
       ))} 
      </Container>
      </div>
    </div>
     
     
    </>
  );
};

export default Orders;
