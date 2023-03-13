import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const inisilizeAuthentication = () =>{
    
    initializeApp(firebaseConfig);
}

export default inisilizeAuthentication;