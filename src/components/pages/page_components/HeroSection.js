import React, { Component } from 'react'
import { Button } from '../../Button'
import Card from '../../Card.js'
import './HeroSection.css'


class HeroSection extends Component {

    constructor(props) {
        super(props)

        this.state = {
            recogair: 'recogair',
            community: 'community',
            bubbles: "bubbles",
            text_initiatives: 'text_initiatives',
            ntlogo: 'ntlogo',
            learn: 'learn',
            text: 'text-wrapper',
            card: 'card-div'
        }
    }


    componentDidMount() {
        setTimeout(() => {
            this.setState({
                recogair: 'recogair visible',
                community: 'community visible',
                text_initiatives: 'text_initiatives visible',
                bubbles: 'bubbles visible',
                ntlogo: 'ntlogo visible',
                learn: 'learn visible',
                text: 'text-wrapper visible',
                card: 'card-div visible'
            })
        }, 100);
    }

    render() {
        return (
            <div className="hero-container">
                <div>
                    <div className="content-wrapper">
                        <div className={this.state.text}>
                            <p className="slogan">Reusing technology to support communities and reduce E-Waste</p>
                            <Button children="Support Us" buttonSize="btn--large" path='/support-us' />
                        </div>
                        <img className={this.state.recogair} src="Recogair.png" alt="Recogair" />

                    </div>
                    <div className={this.state.bubbles}>
                        <div className="left-bubbles">
                            <svg id="visual" viewBox="0 0 300 300" width="300" height="300"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
                                <g fill="#2585BB">
                                    <circle r="33" cx="60" cy="245"></circle>
                                    <circle r="15" cx="143" cy="78"></circle>
                                    <circle r="29" cx="255" cy="205"></circle>
                                    <circle r="31" cx="61" cy="52"></circle>
                                    <circle r="16" cx="278" cy="139"></circle>
                                    <circle r="30" cx="194" cy="270"></circle>
                                </g>
                            </svg>
                        </div>
                        <div className="right-bubbles">
                            <svg id="visual" viewBox="0 0 300 300" width="300" height="300"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
                                <g fill="#2585BB">
                                    <circle r="33" cx="140" cy="78"></circle>
                                    <circle r="25" cx="60" cy="245"></circle>
                                    <circle r="19" cx="255" cy="205"></circle>
                                    <circle r="35" cx="61" cy="52"></circle>
                                    <circle r="20" cx="278" cy="139"></circle>
                                    <circle r="24" cx="194" cy="270"></circle>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
                <div class="wave-content">
                    <img className={this.state.community} src="community.png" alt="Community" />
                    <div className={this.state.text_initiatives}>
                        <div className="init-text-wrapper">
                            <span className="init-title">Our Initiatives</span>
                            <p className="init-desc">See the progress that NTFoundation has made and what we have done in the community</p>
                        </div>
                        <Button children="Find Out More" buttonSize="btn--large" path='/initiatives' />
                    </div>
                </div>
                <div class="wave-bottom">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
                <div class="learn-about-us">
                    <div className={this.state.learn}>
                        <div className="learn-text-wrapper">
                            <span className="learn-title">Learn More About Us</span>
                            <p className="learn-desc">Learn about why we do what we do. Understand the true
                                purpose of the NTFoundation through our three core principles</p>
                        </div>
                        <Button children="Learn More" buttonSize="btn--large" path='/about-us' />
                    </div>
                    <img className={this.state.ntlogo} src="SiteLogoTextless.png" alt="Site Logo Textless" />
                </div>
            </div>
        )
    }
}

export default HeroSection
