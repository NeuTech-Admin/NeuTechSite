import Aos from 'aos'
import React, { Component } from 'react'
import './Workshops.css'
import Card from '../../Card.js'
import { Button } from '../../Button'
import { Redirect } from 'react-router'

class Workshops extends Component {

    constructor(props) {
        super(props)

        this.state = {
            text: 'mission-wrapper',
            usingTech: 'events-tech'
        }
    }


    componentDidMount() {
        Aos.init({duration: 1250})
        setTimeout(() => {
            this.setState({
                text: 'mission-wrapper visible',
                usingTech: 'events-tech visible'
            })
        }, 100);
    }

    render() {
        return (
            <div className="upcoming-events">
                <span className="event-header">Engineering Workshop</span>
                <p className="event-desc">During the collection event, Seaquam students are invited to participate in an engineering workshop. 
                UBC Engineering students will guide attendees through various activities such as building basic circuits, using arduino boards and recognizing computer hardware. 
                Students will also have an opportunity to ask questions and learn about engineering at UBC.<br/><br/>We strongly encourage students bring an old computer, phone, laptop etc. 
                that is no longer being used to the event. The student or family who bring the most devices will win an arduino nano board!</p>
                <div className="event-card">
                    <span className="workshop-desc">To register for the event click the link below and fill out the form.</span>
                    <Button children="Register" buttonSize="btn--large" onClick={() => window.location.href = 'https://forms.gle/kNXKzrGUWgLsh48LA'}/>
                </div>
            </div>

        )
    }
}

export default Workshops


