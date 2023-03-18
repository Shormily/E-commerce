import React from "react";
import useAuth from "../Hook/useAuth";
import { Navigate, useLocation } from 'react-router-dom';
// import { Spinner } from "react-bootstrap";
import useFirebase from "../Hook/useFirebase";

const PrivateRoute = ({ children }) => {
  const { user } = useFirebase();
  // console.log(isLoading);
  const location = useLocation();

  
  if(user.email){
             return children
         }
         return <Navigate to="/sign" state={{from : location}} />

};

export default PrivateRoute;

