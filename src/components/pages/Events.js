import React from 'react'
import '../../App.css'
import Footer from '../toolbars/Footer';
import Navbar from '../toolbars/Navbar';
import EventsHeader from './page_components/EventsHeader'
import Workshops from './page_components/Workshops'

function Events() {
    return (
        <div className="events">
            <Navbar />
            <EventsHeader />
            <Workshops />
            <Footer />
        </div>
    )
}

export default Events
