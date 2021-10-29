import React from 'react';
import { Link } from 'react-router-dom';
import './_footer.scss';
import { ArrowDropDown } from '@material-ui/icons';

const Footer = () => {
    return (
        <div className="footer">
            <div className="foot__container">
                <div className="foot__top">
                    <div className="foot__column">
                        <div className="foot__row">
                            <h3>Sell your home</h3>
                            <ul>
                                <li><Link to='/'>Request an offer</Link></li>
                                <li><Link to='/'>How it works</Link></li>
                                <li><Link to='/'>Pricing</Link></li>
                                <li><Link to='/'>Reviews</Link></li>
                                <li><Link to='/'>Stories</Link></li>
                            </ul>
                        </div>
                        <div className="foot__row">
                            <h3>Buy a home</h3>
                            <ul>
                                <li><Link to='/'>Buy</Link></li>
                                <li><Link to='/'>Tour Homes</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="foot__column">
                        <div className="foot__row">
                            <h3>Save a rent</h3>
                            <ul>
                                <li><Link to='/'>Our saving plans</Link></li>
                                <li><Link to='/'>Build a saving culture</Link></li>
                            </ul>
                        </div>
                        <div className="foot__row">
                            <h3>Resources</h3>
                            <ul>
                                <li><Link to='/'>Blog</Link></li>
                                <li><Link to='/'>Guides</Link></li>
                                <li><Link to='/'>FAQ</Link></li>
                                <li><Link to='/'>Help Center</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="foot__column">
                        <div className="foot__row">
                            <h3>About</h3>
                            <ul>
                                <li><Link to='/'>Company</Link></li>
                                <li><Link to='/'>Career</Link></li>
                                <li><Link to='/'>About</Link></li>
                                <li><Link to='/'>Contact</Link></li>
                            </ul>
                        </div>
                        <div className="foot__row">
                            <h3>Agents</h3>
                            <ul>
                                <li><Link to='/'>Make an offer</Link></li>
                                <li><Link to='/'>Request an offer</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="foot__column">
                        <div className="foot__row">
                            <h3>Download app</h3>
                            <ul className="store">
                                <li>
                                    <Link to='/'>
                                        <img src="/ui-ux/assets/footer/applestore.png" alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        <img src="/ui-ux/assets/footer/playstore.png" alt="" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="foot__row">
                            <h3>Social media</h3>
                            <ul className="foot__socials">
                                <li>
                                    <Link to='/'>
                                        <img src="/ui-ux/assets/footer/twitter-logo.svg" alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        <img src="/ui-ux/assets/footer/facebook-logo.svg" alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        <img src="/ui-ux/assets/footer/linkedin-logo.svg" alt="" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="foot__bottom">
                    <ul>
                        <li>&copy; 2021 Real-explorer</li>
                        <li><Link to='/'>Terms of Service</Link></li>
                        <li><Link to='/'>Privacy Policy</Link></li>
                        <li><Link to='/'>Trust & Safety</Link></li>
                        <li><Link to='/'>Law Enforcement</Link></li>
                    </ul>
                    <div className="foot__lang">
                        <p>Language:</p>
                        <div className="lang__wrap">
                            <select >
                                <option selected>EN</option>
                                <option>RU</option>
                            </select>
                            <ArrowDropDown />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
