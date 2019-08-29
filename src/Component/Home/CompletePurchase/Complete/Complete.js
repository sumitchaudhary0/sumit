import React from 'react';
import tick from '../../../../HCBTC-Assets/icons/success.svg';
import './Complete.css';

const Complete = () => {
    return (
        <React.Fragment>
            <div className=" complete ">
                <img src={tick} alt="" />
                <h5>Your Purchase was successful</h5>
                <p>We've sent confirmation message to ypur email</p>
                <p class="margin-top">you've bought</p>
                <span className="color-b">0.0561458 BTC</span>
                <button >Go to My Account</button>
            </div>
        </React.Fragment>
    )
}
export default Complete;