import React from 'react'
import '../../App.css'
import Footer from '../toolbars/Footer'
import Navbar from '../toolbars/Navbar'
import './MeetUs.css'

function MeetUs() {
    return (
        <div className="meet-us">
            <Navbar />
            <div className="founders-container">
                <div className="ripdaman">
                    <div className="name-role">
                        <img className="ripdaman-pic" src='ripdaman.jpg' alt="Ripdaman Malhans" />
                        <p className='name'>Ripdaman Malhans</p>
                        <p className='role'>Co-Founder</p>
                    </div>
                    <p className="ripdaman-text"> I am a software engineer currently working at HP and have experience in many technical and leadership roles.
                        My focus on computers and software development has made me appreciate the necessity of being connected through devices in our society.
                        This is part of the reason why I am passionate about tackling the disproportionate access to technology that exists today. I am also excited
                        to work on reducing electronics waste in our communities while advocating for the right to repair movement. </p>

                </div>
                <div className="amit">
                    <div className="name-role">
                        <img className="amit-pic" src='amit.jpg' alt="Amit Sharma" />
                        <p className='name'>Amit Sharma</p>
                        <p className='role'>Co-Founder</p>
                    </div>
                    <p className="amit-text">I am a sustainability ambassador and student researcher at the University of British Columbia.
                        I have extensive leadership experience and have been involved in robotics, technology, and sustainability for over a decade.
                        I aspire to educate youth on the importance of viewing future STEM innovation through a sustainability lens. I am passionate
                        about community initiatives and education because I believe issues such as climate change and pollution can be countered starting
                        at a grassroots level. </p>

                </div>
            </div>
            <div style={{ position: 'absolute', bottom: 0, width: "100%"}}>
                <Footer />
            </div>
        </div>
    )
}

export default MeetUs