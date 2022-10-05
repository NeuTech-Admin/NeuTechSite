import React from 'react'
import '../../App.css'
import Footer from '../toolbars/Footer'
import Navbar from '../toolbars/Navbar'
import Pictures from './page_components/Pictures'

function Gallery() {
    return (
        <div className="gallery">
            <Navbar gallery="gallery" />
            <Pictures />
            <Footer />
        </div>
    )
}

export default Gallery