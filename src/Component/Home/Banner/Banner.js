import React from 'react'
import img from '../../../HCBTC-Assets/illustrations/pngs/hero.png'
import './Banner.css';

 const Banner = (props) => {
    return (
        <div className="banner-data">
            <div>
                <h2>buy and sell bitcoin instantly</h2>
                <p>HCBTC is the easiest & faster place to buy & sell bitcoin with yoor credit/debit Card or sepo</p>
            </div>
            <img src={img} alt=""/>
        </div>
    )
}
export default Banner;