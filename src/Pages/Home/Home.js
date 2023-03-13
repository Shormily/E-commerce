import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Gallary from '../Gallary/Gallary';
import Header from '../Headers/Header';
// import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <>
        <Header/>
         <Banner/>
         <Gallary/>
         <About/>
         {/* <Testimonials/>    */}
        </>
    );
};

export default Home;