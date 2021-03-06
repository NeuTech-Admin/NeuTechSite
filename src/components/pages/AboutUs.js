import React from 'react'
import '../../App.css'
import Footer from '../toolbars/Footer'
import Navbar from '../toolbars/Navbar'
import OurStory from './page_components/OurStory'

function AboutUs() {
    return (
        <div className="about-us">
            <Navbar aboutUs="about-us" />
            <OurStory/>
            <Footer />
        </div>
    )
}

export default AboutUs