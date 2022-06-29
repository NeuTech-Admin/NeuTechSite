import React from 'react'
import '../../App.css'
import Footer from '../toolbars/Footer'
import Navbar from '../toolbars/Navbar'
import ThreeArms from './page_components/ThreeArms'

function AboutUs() {
    return (
        <div className="three-arms">
            <Navbar aboutUs="about-us" />
            <ThreeArms />
            <Footer />
        </div>
    )
}

export default AboutUs