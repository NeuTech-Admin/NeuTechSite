import { render } from '@testing-library/react'
import Aos from 'aos'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import React, { Component } from 'react'
import Card from '../../Card.js'
import './IndTestimonial.css'

class Testimonial extends Component {

    constructor(props) {
        super(props)

        this.state = {
            text: 'stories-wrapper',
            // usingTech: 'using-tech'
        }
    }


    componentDidMount() {
        Aos.init({duration: 1250})
        setTimeout(() => {
            this.setState({
                text: 'stories-wrapper visible',
                // usingTech: 'using-tech visible'
            })
        }, 100);
    }

    render() {
        return (
            <div>
                <div className="stories-container" id="three-arms">
                    <div className="story-desc">
                        <span className="stories-title"><strong>Read what community members have to say about us</strong></span>
                        <div className="stories-content">
                        <div className="divider"/>
                        <div data-aos="fade-left" data-aos-once="true" className="story-text-container">
                            <p className="story-headers" >To NeuTech Foundation, </p>
                            <br/>
                            <FaQuoteLeft className="quote-left"/>
                            <p className="story-paragraphs">This past year our family has had to adjust to a new normal. Our youngest child, who is 2.5 years old, requires therapy and specialized services to assist with his special needs.</p>
                            <br/> 
                            <p className="story-paragraphs">Especially during the COVID-19 pandemic, many of his doctor and specialist appointments have been conducted over zoom, or at the very least arranged via email.</p>
                            <br/> 
                            <p className="story-paragraphs">In our position, we have been left with a substantial amount of financial hardships, but needed to continue pursuing medical treatments in hopes of our son receiving the medical treatment(s) he desperately requires - to improve his quality of life. With a family of five with a single income, this very goal has become both taxing and extremely challenging for everyone.</p>
                            <br/> 
                            <p className="story-paragraphs">The gift of this computer has already made a huge difference. We are now able to work alongside our medical team to book appointments and arrange for care. We also have been given the platform to utilize this computer to directly assist our son, so that he too, can learn to speak through online educational tools.</p>
                            <br/> 
                            <p className="story-paragraphs">This computer really has changed so much for our family.</p><p className="story-paragraphs">We are so incredibly grateful for this gift.</p>
                            <br/> 
                            <p className="story-paragraphs">Thank you for making a difference.<FaQuoteRight className="quote-right"/></p>
                            
                            <br/><br/>
                            <p className="story-headers"> <strong>- The Bradley's</strong></p>
                            <br/> 
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
                

        )
    }
}

export default Testimonial
