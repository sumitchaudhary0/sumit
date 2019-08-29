import React from 'react';
import error from '../../../../HCBTC-Assets/icons/error.svg';
import './Failed.css';
const Failed =()=>
{
    return(
        <React.Fragment>
            <div className="complete" >  
                <img src={error} alt="" />
                   <h5>Sorry,we weren't able to complete your payment</h5>
                   <p>Please verify your billing information and try again</p>
                   <button class="margin-top">Try again</button>
                </div>
            >
            </React.Fragment>
    )
}
export default Failed;