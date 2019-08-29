
import React from 'react';
import Footerlogo from '../../HCBTC-Assets/logo/blue.svg';
import { Link } from 'react-router-dom';
import linkedin from '../../HCBTC-Assets/icons/linkedin.svg';
import twitter from '../../HCBTC-Assets/icons/twitter.svg';
import facebook from '../../HCBTC-Assets/icons/facebook.svg';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer">
            <img src={Footerlogo} alt=""/>
            <ul>
                <li><Link>Home</Link></li>
                <li><Link>Contact Us</Link></li>
                <li><Link>Terms of services</Link></li>
                <li><Link>privacy policy</Link></li>
                <li><Link>AML policy</Link></li>
                <li><Link>Affilate Program</Link></li>
                <li><Link>Risk</Link></li>
            </ul>
            <ul className="social-links">
                <li><Link><img src={linkedin} alt="" /></Link></li>
                <li><Link><img src={twitter} alt="" /></Link></li>
                <li><Link><img src={facebook} alt="" /></Link></li>
            </ul>
        </div>
    )
}
export default Footer;