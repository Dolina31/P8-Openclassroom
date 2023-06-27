import React from 'react';
import Navigation from "../components/Navigation.js";
import Footer from '../components/Footer.js';
import HomePageBanner from '../components/HomePageBanner.js';


const Home = () => {        

    return (
        <div>
            <Navigation />
            <HomePageBanner/>
            <Footer/>
        </div>
    );
};

export default Home;