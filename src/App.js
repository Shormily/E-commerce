import { Routes, Route, createBrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
// import Footer from "./Pages/Footer/Footer";
import Headers from "./Pages/Headers/Header";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home";
import Service from "./Pages/Service/Service";
import Sign from "./Pages/Sign/Sign";
import Testimonials from "./Pages/Testimonials/Testimonials";
import MessengerCustomerChat from "react-messenger-customer-chat";
import ScrollToTop from "react-scroll-to-top";
import Dashboard from "./Pages/Dashoard/Dashboard";
import Checkout from "./Pages/Checkout/Checkout";
import userDashboardRoutes from "./Pages/Router/Router";
import Order from "./Pages/Order/Order";
import Orders from "./Pages/Orders/Orders";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<Testimonials />} />
        {/* <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} /> */}
        <Route path="/contact" element={  <Contact /> }/>
        {/* <Route path="/service" element={<PrivateRoute><Service /></PrivateRoute>  } /> */}
        <Route path="/service" element={<Service />  } />
        <Route path="/order" element={<Order />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/orders" element={<Orders />} />
        <Route
          element={<Checkout />}
          path="/checkout/:id"
          // loader={({ params }) =>
          //   fetch(`http://localhost:5000/singleServices/${params.id}`)
          // }
        />

        <Route path="/dashboard" element={<Dashboard />} />
       
      </Routes>
      <MessengerCustomerChat
        pageId="<PAGE_ID>"
        appId="<APP_ID>"
        htmlRef="<REF_STRING>"
      />
      <ScrollToTop smooth />
      {/* <Footer /> */}
      {/* <Tspartcls/> */}
      {/* <Revise/> */}
    </>
  );
}

export default App;
