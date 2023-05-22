import Aos from 'aos'
import React, { Component } from 'react'
import './Supporters.css'

class Supporters extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            text: 'supporter-mission-wrapper',
            risingYouth: 'rising-youth'
        }
    }
    

    componentDidMount() {
        Aos.init({duration: 1250})
        setTimeout(() => {
            this.setState({
                text: 'supporter-mission-wrapper visible',
                risingYouth: 'rising-youth visible'
            })
        }, 100);
    }

    render() {
        return (
            
            <div className="supporter-container">
                <div className="stacked-div-top">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                    </svg>
                </div>
                <div className="stacked-div-content">
                    <div className={this.state.text}>
                        <span className="supporter-heading">Our Sponsors</span>
                    </div>
                    <div className="supporter-wrapper">
                        <img className={this.state.risingYouth} src="rising-youth.png" alt="Rising Youth" />
                        <img className={this.state.risingYouth} src="gov-canada.png" alt="Government of Canada" />
                        <img className={this.state.risingYouth} src="canada-corps.png" alt="Canada Corps" />
                    </div>
                </div>
                <div className="stacked-div-bottom">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                    </svg>
                </div>
            </div>
        )
    }
}

export default Supporters
