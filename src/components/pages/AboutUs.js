import React from 'react'
import '../../App.css'
import Footer from '../toolbars/Footer'
import Navbar from '../toolbars/Navbar'
import OurStory from './page_components/OurStory'
import ThreeArms from './page_components/ThreeArms'

function AboutUs() {
    return (
        <div className="about-us">
            <Navbar aboutUs="about-us" />
            <OurStory/>
            <ThreeArms />
            <Footer />
        </div>
    )
}

export default AboutUs