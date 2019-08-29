import React,
{Component} from 'react';
import Card from './Card/Card';
import card1 from '../../../HCBTC-Assets/illustrations/pngs/bank.png';
import card2 from '../../../HCBTC-Assets/illustrations/pngs/credit_card.png';
import './Services.css';

export default class Services extends Component {
  
    
    render(){
    return (
        <React.Fragment>
            <div class="container">
            <div class="services">
            <h3 className="text-center">Buy and sell crypto</h3>
            <p className="text-center">we offer two option to buy cryptocurrencies</p>
            <div className="services-card">
               <Card heading='Bank' 
               para='Buy currency by manually 
               transferring funds to 
               the provided bank account
                where the rate of currency
                 will be locked upon confirmation 
                 of the payment.'/>
             <img src={card1} alt="" />
            </div>
            <div className="services-card">
            <img src={card2} alt="" />
            <Card heading='Credit Card'
             para='Buy currency by manually 
               transferring funds to 
               the provided bank account
                where the rate of currency
                 will be locked upon confirmation 
                 of the payment.'/>
            </div>
            </div>
            </div>
            </React.Fragment>
    )
}
}
