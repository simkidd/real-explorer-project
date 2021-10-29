import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Hero from '../../components/home_sections/Hero';
import Services from '../../components/home_sections/Services';
import Advantages from '../../components/home_sections/Advantages';
import HowItWorks from '../../components/home_sections/HowItWorks';
import Neighborhood from '../../components/home_sections/Neighborhood';
import Footer from '../../components/footer/Footer';

const Home = () => {
    return (
        <div className='container'>
            <div className="container__inner">
                <Navbar />
                <Hero />
            </div>
            <Services />
            <Advantages />
            <HowItWorks />
            <Neighborhood />
            <Footer />
        </div>
    )
}

export default Home

