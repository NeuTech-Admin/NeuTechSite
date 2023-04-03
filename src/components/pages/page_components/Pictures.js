import React, { Component } from 'react'
import './Pictures.css'

class Pictures extends Component {

    constructor(props) {
        super(props)

        this.state = {
            images: 'images',
        }
    }
    

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                images: 'images visible',
            })
        }, 100); 
        window.addEventListener('load', e => {
            console.log('load');
        });
        
    }

    data = [
        {
            src: "ERA Truck.jpg",
            alt: "ERA Truck"
        },
        {
            src: "Arduino.jpg",
            alt: "Arduino"
        },
        {
            src: "Whiteboard.jpg",
            alt: "Whiteboard"
        },
        {
            src: "Desktops.jpg",
            alt: "Desktops"
        },
        {
            src: "teaching.jpg",
            alt: "Teaching"
        },
        {
            src: "Laptop.jpg",
            alt: "Laptop"
        },
        {
            src: "electronics.jpg",
            alt: "Electronics"
        },
    ];

    render() {
        return (
            <div className="pictures-container">
                <p className="gallery-heading">Gallery</p>
                <div className="pictures">
                    {
                        this.data.map((item, index) => {
                            return (
                                <div className="pics" key={index}>
                                    <img src={item.src} alt={item.alt} style={{width: "100%"}} />
                                </div>
                            )
                        })
                    }
                    {/* <img className={`${this.state.images} eraTruck`} src="ERA Truck.jpg" alt="ERA Truck" />
                    <img className={`${this.state.images} arduino`} src="Arduino.jpg" alt="Arduino" />
                    <img className={`${this.state.images} desktops`} src="Desktops.jpg" alt="Desktops" />
                    <img className={`${this.state.images} whiteboard`} src="Whiteboard.jpg" alt="Whiteboard" />
                    <img className={`${this.state.images} teaching`} src="teaching.jpg" alt="Teaching" />
                    <img className={`${this.state.images} laptop`} src="Laptop.jpg" alt="Laptop" />
                    <img className={`${this.state.images} electronics`} src="electronics.jpg" alt="Electronics" /> */}
                </div>
            </div>

        )
    }
}

export default Pictures
