import React, { Component } from 'react'

import Complete from './Complete/Complete';
import Failed from './Failed/Failed';

export default class CompletePurchase extends Component {
    render() {
        return (
            <div>
                 <Complete />
                 {/* <Failed /> */}
            </div>
        )
    }
}
