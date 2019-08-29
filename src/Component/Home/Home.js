import React, { Component } from 'react';
import PaymentBar from './PaymentBar/PaymentBar';

import Footer from '../Footer/Footer';
import './Home.css';
import Banner from './Banner/Banner';
import Navbar from '../Navbar/Navbar';
import Services from './Services/Services';
import Contact from './Contact/Contact';



export default class Home extends Component {
   state={Banner:<Banner />,
           Services:<Services />,
               Contact:<Contact /> }
     
      
   clickHandler =()=>
   {
this.setState({Banner:false,Services:false,Contact:false})
   }
   clickHandler1 =()=>
   {
       this.setState({Banner:<Banner />,
        Services:<Services />,
            Contact:<Contact />})
   }
    render() { 
        return (
            <React.Fragment>
                <div className="Banner">
                    <div className="container">
                        <Navbar />
                    {this.state.Banner}
                    </div>
                </div>
                <div class="container paymentbar">
                    <PaymentBar click1={this.clickHandler1} click={this.clickHandler} />
                </div>
               {this.state.Services}
               {this.state.Contact}
                <div class="container">
                    <Footer />
                </div>
            </React.Fragment>
        )
    }
}



