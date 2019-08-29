import React, { Component } from 'react'
import option from '../../HCBTC-Assets/icons/european-union.svg';
import down from '../../HCBTC-Assets/icons/arrow.svg';
import TestBox from './TestBox';
export default class Test extends Component {
    state={options:false}
    
    clickHandle=()=>
    {
        this.setState({options:<TestBox />})
    }
    render() {
        
        return (
            <React.Fragment>
            <div>
                 <label for="money">How much you pay</label>
                <div onClick={this.clickHandle} className="flex">
                    <input type="text" placeholder="500" name="money" />
                    <span className="flex1">
                        <img src={option} /><p>EUR</p><img src={down}/>
                    </span>
                </div>
                {this.state.options}
            </div>
           
            </React.Fragment>
        )
    }
}
