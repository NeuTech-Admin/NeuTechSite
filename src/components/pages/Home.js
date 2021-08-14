import React, {  } from 'react'
import CountUp from 'react-countup';
import '../../App.css'
import Footer from '../toolbars/Footer';
import Navbar from '../toolbars/Navbar';
import HeroSection from './page_components/HeroSection'
import Stats from './page_components/Stats';

function Home() {
    return (
        <div className="home">
            <Navbar home="home" />
            <HeroSection />
            <Stats />
            <Footer />
        </div>
    )
}

export default Home;