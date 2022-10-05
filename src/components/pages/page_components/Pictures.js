import Aos from 'aos'
import React, { Component } from 'react'
import './Pictures.css'

class Pictures extends Component {

    constructor(props) {
        super(props)

        this.state = {
            images: 'images'
        }
    }


    componentDidMount() {
        Aos.init({duration: 1250})
        setTimeout(() => {
            this.setState({
                images: 'images visible',
            })
        }, 100);
    }

    render() {
        return (
            <div className="pictures-container">
                <p className="gallery-heading">Gallery</p>
                <div className="pictures">
                    <img className={`${this.state.images} eraTruck`} src="ERA Truck.jpg" alt="ERA Truck" />
                    <img className={`${this.state.images} arduino`} src="Arduino.jpg" alt="Arduino" />
                    <img className={`${this.state.images} desktops`} src="Desktops.jpg" alt="Desktops" />
                    <img className={`${this.state.images} whiteboard`} src="Whiteboard.jpg" alt="Whiteboard" />
                    <img className={`${this.state.images} teaching`} src="teaching.jpg" alt="Teaching" />
                    <img className={`${this.state.images} laptop`} src="Laptop.jpg" alt="Laptop" />
                    <img className={`${this.state.images} electronics`} src="electronics.jpg" alt="Electronics" />
                </div>
            </div>

        )
    }
}

export default Pictures
