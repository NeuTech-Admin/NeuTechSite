import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { GiHealthNormal } from 'react-icons/gi'
import { FaArchway, FaQuoteLeft, FaArrowRight } from 'react-icons/fa'
import { BsPeopleFill } from 'react-icons/bs'
import { Button } from '../../Button';
import Card from '../../Card';
import './OurStory.css'
import Aos from 'aos';

class OurStory extends Component {

    constructor(props) {
        super(props)

        this.state = {
            logoImg: 'logo-img',
            reuse: 'reuse',
            reduce: 'reduce',
            renew: 'renew',
            recycle: 'recycle',
            bubbles: 'about-bubbles',
            text_initiatives: 'text-initiatives',
            testimony_preview: 'testimony-prev-card',
            card1: 'nav-card-container-one',
            card2: 'nav-card-container-two',
            card3: 'nav-card-container-three',
            divider: 'div-divider'
        }
    }

    componentDidMount() {
        Aos.init({ duration: 1250 })
        setTimeout(() => {
            this.setState({
                logoImg: 'logo-img visible',
                reuse: 'reuse visible',
                recycle: 'recycle visible',
                bubbles: 'about-bubbles visible',
                text_initiatives: 'text-initiatives visible',
                testimony_preview: 'testimony-prev-card visible',
                card1: 'nav-card-container-one visible',
                card2: 'nav-card-container-two visible',
                card3: 'nav-card-container-three visible',
                divider: 'div-divider visible'
            })
        }, 100);
        setTimeout(() => {
            this.setState({
                reduce: 'reduce visible'
            })
        }, 500);
        setTimeout(() => {
            this.setState({
                renew: 'renew visible'
            })
        }, 1000);
    }

    render() {
        return (
            <div>
                <div className="story-container">
                    <img className={this.state.logoImg} src="SiteLogoTextless.png" alt="Site Logo Textless" />
                    <div className="motto">
                        <p className={this.state.reuse}>Reduce</p>
                        <p className={this.state.reduce}>Renew</p>
                        <p className={this.state.renew}>Reinforce</p>
                    </div>
                </div>
                <div class="stacked-div-top">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                    </svg>
                </div>
                <div className="stacked-div-content">
                    <div className="nav-card">
                        <div className={this.state.card1}>
                            <FaArchway className="icon" />
                            <span className="card-title">Our Principles</span>
                            <p className="card-description">Learn more about the NT Foundation's three pillars.</p>
                            <Link to="three-arms" smooth="true" className="nav-card-link" ><Button children="The Three Arms" buttonSize="btn--large-invert" path='/three-arms' /></Link>
                        </div>
                        <div className={this.state.card2}>
                            <BsPeopleFill className="icon" />
                            <span className="card-title">Who we are</span>
                            <p className="card-description">Meet the people behind the NT Foundation.</p>
                            <Link className="nav-card-link" ><Button children="Meet Us" buttonSize="btn--large-invert" path='/meet-us' /></Link>
                        </div>
                        <div className={this.state.card3}>
                            <GiHealthNormal className="icon" />
                            <span className="card-title">Support Our Cause</span>
                            <p className="card-description">Discover ways to support our cause.</p>
                            <Link className="nav-card-link" ><Button children="Support Us" buttonSize="btn--large-invert" path='/support-us' /></Link>
                        </div>
                        <div className={`${this.state.divider} three`} />
                    </div>
                </div>
                <div class="stacked-div-bottom">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                    </svg>
                </div>
                <div className={this.state.testimony_preview}>
                    <p className="testimony-desc">Read what community members have to say about us</p>
                    <FaQuoteLeft className="testimony-quote" />
                    <p className="testimony-prev">... the gift of this computer has already made a huge difference. We are now able to work alongside our medical team to book appointments and arrange for care ...</p>
                    <Link to="/testimony" className='testimony-page-btn-link'>
                        <button className="testimony-page-btn"><FaArrowRight className="testimony-btn-arrow" type="button" onClick=""/></button>
                    </Link>
                </div>
                <div className={this.state.bubbles}>
                    <div className="about-left-bubbles">
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
                    <div className="about-right-bubbles">
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
        )
    }
}

export default OurStory
