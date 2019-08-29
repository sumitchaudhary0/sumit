import React, { Component } from 'react'
import option from '../../HCBTC-Assets/icons/european-union.svg';

import './TestBox.css';
export default class TestBox extends Component {

    render() {
       
        return (<React.Fragment>
         
                    <span   className="flex1">
                        <img src={option} alt=""/><p  onClick={this.props.click}>{this.props.name}</p>
                    </span>
                       
              </React.Fragment>

        
        )
    }
}
