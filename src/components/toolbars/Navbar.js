import React, { Fragment, useState, useEffect } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Button } from '../Button';
import './Navbar.css'

function Navbar(props) {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [initClass, setInitClass] = useState('initiatives-wrapper');
    const [linkClass, setLinkClass] = useState('nav-links');

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 1200) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    const mouseOver = () => {
        setInitClass('initiatives-wrapper visible');
        setLinkClass('nav-links init-id-nav-item');
    }

    const mouseOut = () => {
        setInitClass('initiatives-wrapper');
        setLinkClass('nav-links');
    }

    window.addEventListener('resize', showButton);

    return (
        <Fragment>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img src="SiteLogo.png" className="NeuTech-Logo" alt="NeuTech Foundation" />
                        <img src="SiteLogoTextless.png" className="NeuTech-Logo textless" alt="NeuTech Foundation" />
                    </Link>
                    <div className="spacer" />
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                        <span className="menu-text">Menu</span>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' id={props.home} className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about-us' id={props.aboutUs} className='nav-links' onClick={closeMobileMenu}>
                                About Us
                            </Link>
                        </li>
                        <li className='nav-item' onMouseOver={mouseOver} onMouseOut={mouseOut} onMouseDown={mouseOver}>
                            <Link to='/' id={props.initiatives} className={linkClass} onClick={closeMobileMenu}>
                                Initiatives
                            </Link>
                            <div className={initClass}>
                                <Link to="/yousen" id={props.initiatives1} className="initiative-links">
                                    YouSEN
                                </Link>
                                <Link to="/access-tech" id={props.initiatives2} className="initiative-links">
                                    Access Tech
                                </Link>
                                <Link to="/ewaste" id={props.initiatives3} className="initiative-links">
                                    E-Waste
                                </Link>
                            </div>
                        </li>
                        <li className='nav-item'>
                            <Link to='/support-us' id={props.supportUs} className='nav-links' onClick={closeMobileMenu}>
                                Support Us
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/gallery' id={props.gallery} className='nav-links' onClick={closeMobileMenu}>
                                Gallery
                            </Link>
                        </li>
                        {/* <li className='nav-item'>
                            <Link to='/volunteer' className='nav-links' onClick={closeMobileMenu}>
                                Volunteer
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar