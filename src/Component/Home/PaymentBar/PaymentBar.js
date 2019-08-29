import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './PaymentBar.css'
import SelectAmount from '../SelectAmount/SelectAmount';
import EnterPayment from '../EnterPayment/EnterPayment';
import EditPaymentinfo from '../EditPaymentinfo/EditPaymentinfo';
import CompletePurchase from '../CompletePurchase/CompletePurchase';
export default class PaymentBar extends Component {
  state={styl:'margin-top:-400px;'}

  
    render() {
        return (
            
                <Tabs className="tab">
                    <TabList className="tab1">
                        <Tab  onClick={this.props.click1}>01.Select Amount</Tab>
                        <Tab  onClick={this.props.click}>02.Enter Payment info</Tab>
                        <Tab>03.Complete Purchase</Tab>
                    </TabList>
                    <div class="wrapper ">
                    <TabPanel>
                        <SelectAmount/>
                    </TabPanel>
                    <TabPanel  >
                       <EnterPayment />
                   {/* <EditPaymentinfo /> */}
                    </TabPanel>
                    <TabPanel>
                        <CompletePurchase />
                    </TabPanel>
                    </div>
                </Tabs>
            
        )
    }
}
