import Aos from 'aos'
import React, { Component } from 'react'
import './Events.css'

class EventsHeader extends Component {

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
            <div className="events-container">
                <div className="events-wrapper">
                    <div className={this.state.text}>
                        <span className="mission-heading">Events and Workshops</span>
                        <p className="mission-statement">Alongside E-Waste collection and assisting low-income families, our goal is to educate students on the importance of engineering and technology in the world. Take a look at our past and upcoming Events and Workshops</p>
                    </div>
                    <img className={this.state.usingTech} src="Events.png" alt="Events" />
                </div>
            </div>

        )
    }
}

export default EventsHeader
