import React from 'react'
import Footer from '../toolbars/Footer'
import Navbar from '../toolbars/Navbar'
import Challenge from './page_components/Challenge'
import OurImpact from './page_components/OurImpact'
import { Outlet, useParams } from 'react-router-dom'

function Initiatives() {

    return (
        <div>
            <Navbar initiatives="initiatives" />
            <Challenge />
            <OurImpact />
            <br />
            <Footer />
        </div>
    )
}

export default Initiatives
