import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            {/* <p className="contact-us">Contact Us at info@ntfoundation.ca</p> */}
            <section>
                <div className="socials">
                    <p className="footer-description">
                        Check out our socials to stay up to date with our initiatives
                    </p>
                    <FaInstagram className="instagram-icon"/>
                    <FaTwitter className="twitter-icon"/>
                    <FaFacebook className="facebook-icon"/>
                </div>
            </section>
            <p className="footer-site-title">© 2021 NeuTech Foundation</p>
        </div>
    )
}

export default Footer
