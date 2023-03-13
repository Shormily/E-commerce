import React from 'react';
import useAuth from '../Hook/useAuth';
import {  useState } from "react"
import { createUserWithEmailAndPassword,getAuth,signInWithEmailAndPassword,sendEmailVerification,sendPasswordResetEmail} from 'firebase/auth';
import { Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useFirebase from '../Hook/useFirebase';
import "./Sign.css";
import Header from '../Headers/Header';

const Sign = () => {
  const {signInUsingGoogle,createNewUserByEmail} = useFirebase();
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')
  const [isLogin,setIsLogin] = useState(false)



  const navigate = useNavigate();
  const location = useLocation();

  const hanldeGoogleLogin = () => {
    signInUsingGoogle(location,navigate)
      
     
  };



  
const auth = getAuth()

  const handleRegister = e =>{
    e.preventDefault();
    if(password.length < 6){
      setError('password must be at least 6 characters long.')
      return;
    }
    if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
setError('Password Must contain 2 upper case');
return;
    }
    if(isLogin){
      processLogin(email,password);
    }
    else{
      registerNewUser(email,password);
    }
    
  }
  const processLogin = (email,password) =>{
    signInWithEmailAndPassword(auth,email,password)
    .then((result) => {
     
      const distination = location?.state?.from || '/about';
      console.log( distination);
      navigate(distination);

      Swal.fire(
        'Successfully Sign In!',
        'welcome to our Medical Clinic',
        'success'
      )
    })
    .catch((error) => {
      setError(error.message);
    });
  }

    const registerNewUser = (email,password)=>{
      createUserWithEmailAndPassword(auth, email, password)
      .then(result=>{
          const user =result.user;
          createNewUserByEmail()
          console.log(user)
          setError('Successfully Sign In!!Now Go To Another Page');
          verifyEmail();
      })
      .catch(error =>{
        setError("already use this email")
      })
     
    }
    const handleResetPassword = () =>{
      sendPasswordResetEmail(auth,email)
      .then(result =>{

      })
    }
    const verifyEmail = () =>{
      sendEmailVerification(auth.currentUser)
      .then(result =>{
        console.log(result);
      })
    }
    
    const toggleLogin = e =>{
      setIsLogin(e.target.checked)
    }
    
  const handleEmailChange = e => {
    setEmail(e.target.value);
  }
  const handlePasswordChange = e => {
    setPassword(e.target.value);
    
  } 
    return (
        <>
<Header/>
         <div className="container">
            <h1 className='text-center title mt-3'> {isLogin ? "Log In" : "Register Now"}</h1>
        <div className="row">
          <p className="pragraph-weight mb-5 mt-3">
            After creating an account, you'll be able to track your payment
            status, track the confirmation and you can also rate the tour after
            you finished the tour.
          </p>
          
          <div className="col-lg-6 col-md-6 col-sm-12 animate__animated animate__fadeInRight">
            <p className="pragraph-weight mb-2">Name*</p>
            <input
              required
              className=" mb-3 p-3 col-lg-6 col-md-6 col-12 w-75 cursor shadow"
              placeholder="Name"
              type="text"
            />
            <p className="pragraph-weight mt-3 mb-2">Email*</p>
            <input
              required
              className=" mb-3 p-3 col-lg-6 col-md-6 col-12 w-75 cursor shadow"
              placeholder="Email"
              type="text"
              onChange={handleEmailChange} 
            />
            <p className="pragraph-weight mt-3 mb-2 ">Password*</p>
            <input
              required
              className=" mb-3 p-3 col-lg-6 col-md-6 col-12 w-75 cursor shadow"
              placeholder="Password"
              type="text"
              onChange={handlePasswordChange}
            />
              <Form.Check onChange={toggleLogin} className='decoration'  type="checkbox" label="Already You have Account? Please Log In.!!" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 animate__animated animate__fadeInRight">
            <p className="pragraph-weight  mb-2">Email*</p>
            <input
              required
              className=" mb-3 p-3 col-lg-6 col-md-6 col-12 w-75 cursor shadow"
              placeholder="Email"
              type="text"
              onChange={handleEmailChange} 
            />
            <p className="pragraph-weight mt-3 mb-2 ">Confirm Password*</p>
            <input
              required
              className=" mb-3 p-3 col-lg-6 col-md-6 col-12 w-75 cursor shadow"
              placeholder="Confirm Password"
              type="text"
            />
            <p className="pragraph-weight mt-3 mb-2">Last Name*</p>
            <input
              required
              className=" mb-1 p-3 col-lg-6 col-md-6 col-12 w-75 cursor shadow"
              placeholder="Last Name"
              type="text"
            />
          </div>
          <div className="col-lg-6 col-md-6">
          <p className='text-danger pragraph-weight    '>
            {error}
            </p>
            <p 
            onClick={handleRegister}
             className="bg-colors rounded-2 shadow buton  text-center cursors pragraph-weight text-light w-75 p-2   mt-2 box-shadow">
             {isLogin ? "Log In" : "Register Now"}
            </p>
            
          </div>
          <div className="col-lg-6 col-md-6">
          <p className="bg-colors text-center rounded-2 cursors pragraph-weight text-light w-75 p-2 mt-3   shadow box-shadow"
           onClick={hanldeGoogleLogin}
           >
              Google Sign In
            </p>
         
          </div>
          <p  className='text-primary pragraph-weight  mb-5 cursors '
       onClick={handleResetPassword}
           >Forgot Password? </p>
             
       
        </div>
      </div>
        </>
    );
};

export default Sign;