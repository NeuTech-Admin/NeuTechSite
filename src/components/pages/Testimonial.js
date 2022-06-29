import React from 'react'
import '../../App.css'
import Footer from '../toolbars/Footer'
import Navbar from '../toolbars/Navbar'
import IndTestimonial from './page_components/IndTestimonial'

function Testimonial() {
    return (
        <div>
            <Navbar/>
            <IndTestimonial/>
            <Footer />
        </div>
    )
}

export default Testimonial