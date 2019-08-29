import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../HCBTC-Assets/logo/white.svg';
import './Navbar.css';


class Navbar extends Component {
    render() {

        return (
            <div class="navbar">

                <img src={logo} alt="logo" />
               
                    <ul>
                        <li>
                            <Link to="">Home</Link>
                        </li>
                        <li>
                            <Link to="/Login">Login</Link>
                        </li>
                        <li>
                            <Link to="/Signup">Sign Up</Link>
                        </li>
                    </ul>


            
            </div>
        )
    }
}
export default Navbar;