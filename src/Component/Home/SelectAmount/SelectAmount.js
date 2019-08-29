import React, { Component } from 'react';
import './SelectAmount.css';
import down from '../../../HCBTC-Assets/icons/arrow_down.svg';
import option from '../../../HCBTC-Assets/icons/european-union.svg';
import bitcoin from '../../../HCBTC-Assets/icons/bitcoin.svg';
import TestBox from '../../Test/TestBox';

export default class SelectAmount extends Component {

    state = { select: '',
        countries:[
    {id:1,name:'EUR'},
    {id:2,name:'US'},
    {id:3,name:'IND'},
    {id:4,name:'AUS'},
    {id:5,name:'PAK'},
    {id:6,name:'UK'}
]
,country:'EUR'}
    optionSelectHandler = () => {
    this.setState({ select:this.state.countries.map((coun,id)=>{ return <TestBox click={this.clickHadler} key={id} name={coun.name} ></TestBox >}) })
       
    }

    clickHadler =(event)=>
    {

     this.setState({country:event.target.innerHTML,select:false})
    }
    render()
     {
      
        return (
            <React.Fragment>
                <div className="six">
                    <div class="bitcoin">
                        <label for="amount">Enter BTC amount</label>
                        <div className="flex">
                            <input type="text" placeholder="o.184789" name="amount" />
                            <span className="flex1">
                                <img src={bitcoin} alt="" />
                                <p>BTC</p>
                            </span>
                        </div>


                        <label for="money">How much you pay</label>
                        <div className="flex">
                            <input type="text" placeholder="500" name="money" />
                            <span onClick={this.optionSelectHandler} className="flex1">
                                <img src={option} alt=""/><p>{this.state.country}</p><img src={down} alt="" />
                            </span>
                        </div>
                        <div className="options">
                            
                            {this.state.select}
                        </div>
                        <div class="flex bitadd">
                            <label for="amount">Enter Bitcoin Address</label>

                            <input type="text" name="amount" />
                            <p><span>*</span>BTC must be yours and under full control</p>
                        </div>



                    </div>
                    <div className="amount-box">
                        <p>current price:</p>
                        <p>1 BTC = 8,978.77 EUR<img src={down} alt=""/></p>
                    </div>

                </div>
                <div class="pay-btn">
                    <button  >Continue</button>
                </div>

                
            </React.Fragment>



        )
    }
}
