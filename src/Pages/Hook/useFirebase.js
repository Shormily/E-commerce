import { useEffect, useState } from "react";
import inisilizeAuthentication from "../Firebase/Firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Swal from "sweetalert2";

inisilizeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const createNewUserByEmail = ( email, password) => {
    createUserWithEmailAndPassword( email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = (location,navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const distination = location?.state?.from || '/service';
        console.log( distination);
        navigate(distination);

        Swal.fire(
          'Successfully Sign In!',
          'Welcome to our E-commerce website',
          'success'
        )
        setUser(result.user);
      })
      .catch((error) => {
        
        setError(error.message);
      });
  };
  const loginWithEmail = (email, password,location,navigate) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const distination = location?.state?.from || "/service";
        console.log( distination);
        navigate(distination);

        Swal.fire(
          'Successfully Sign In!',
          'Welcome to our Chinese Resturent',
          'success'
        )
        setUser(result.user);
      })
      .catch((error) => {
       
        setError(error.message);
      });
  };

  const logout = () => {
    signOut(auth).then(() => {
      setUser({ user });
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("inside state change", user);
        setUser(user);
      }
    });
  });

  return {
    user,
    error,
    signInUsingGoogle,
    logout,
    isLoading,
    createNewUserByEmail,
    loginWithEmail,
  };
};

export default useFirebase;
