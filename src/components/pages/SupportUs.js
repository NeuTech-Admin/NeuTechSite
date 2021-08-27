import React from 'react'
import '../../App.css'
import Footer from '../toolbars/Footer';
import Navbar from '../toolbars/Navbar';
import Mission from './page_components/Mission'

function SupportUs() {
    return (
        <div className="support-us">
            <Navbar supportUs="support-us" />
            <Mission />
            <Footer />
        </div>
    )
}

export default SupportUs
