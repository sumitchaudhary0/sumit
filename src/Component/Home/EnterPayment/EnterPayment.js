import React, { Component } from 'react'
import checked from '../../../HCBTC-Assets/icons/checkbox_on.svg';
import { Link } from 'react-router-dom';
import './EnterPayment.css';
export default class EnterPayment extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="flex justify-between">
                    <div className="enterpayment width flex direction">
                        <label className="label">CHOOSE PAYMENT METHOD</label>
                        <div className="pay-method">

                            <p>Credit card </p>
                            <p className="gray">Transaction fees:3,9%</p>
                        </div>

                        {/********************************************************/}
                        <label className="label">Card Details</label>
                        <label className="gray" >Card number</label>
                        <div className="flex ">
                            <input type="text" className="mastercard width" placeholder="0000-0000-0000-0000" />

                        </div>

                        <div className="flex justify-between  Width">
                            <div className="flex pay-details direction">
                                <label className="gray">Expires</label>
                                <input type="text" placeholder="09/29" />
                            </div>
                            <div className="flex pay-details direction">
                                <label className="gray">CVV</label>
                                <input type="text" placeholder="111" />
                            </div>
                        </div>
                        <label for="">Name on card</label>
                        <input type="text" placeholder="Tom Jenkins" />
                        {/********************************************************/}
                        <label className="label">BILLING ADDRESS</label>
                        <label className="gray">Address</label>
                        <input type="text" placeholder="78 fahey Throughway Apt.674" />
                        <label className="gray">Address 2(Optional)</label>
                        <input type="text" placeholder="78 fahey Throughway Apt.674" />
                        {/********************************************************/}
                        <div className="flex justify-between">
                            <div class="flex city-selction direction">
                                <label className="gray">City</label>
                                <select>
                                    <option value="">East hanover</option>
                                    <option value="">East hanover</option>
                                    <option value="">East hanover</option>
                                    <option value="">East hanover</option>
                                    <option value="">East hanover</option>
                                    <option value="">East hanover</option>
                                </select>
                            </div>
                            <div class="flex city-selction direction">
                                <label className="gray">Zip Code </label>
                                <select>
                                    <option value="">07936</option>
                                    <option value="">07936</option>
                                    <option value="">07936</option>
                                    <option value="">07936</option>
                                    <option value="">07936</option>
                                </select>
                            </div>
                        </div>
                        {/********************************************************/}
                        <label className="gray">Country</label>
                        <select className="select-countries">
                            <option value="United states">United States</option>
                            <option value="United states">United States</option>
                            <option value="United states">United States</option>
                            <option value="United states">United States</option>
                            <option value="United states">United States</option>
                        </select>
                        {/********************************************************/}
                        <label className="label">PERSONAL DETAILS</label>
                        <label className="gray">Email</label>
                        <input type="email" />
                        <label className="gray">Phone number</label>
                        <input type="number" />

                        <label className="gray">Date of birth</label>
                        <select className="date">
                            <option>01 Nov 1976</option>
                        </select>

                        <div className="checkbox flex justify-between">
                            <img src={checked} alt="" />
                            <label>Create an acoount and make your next checkout easy</label>
                        </div>
                        <div class="flex justify-between">
                            <div class=" flex pass direction">
                                <label className="gray">Password</label>
                                <input type="password" placeholder="........" />
                            </div>
                            <div class="flex pass direction">

                                <label className="gray" >Confirm Password</label>
                                <input type="password" placeholder="........" />

                            </div>
                        </div>
                    </div>
                    <div  className="float-right">
                    <div className="box ">
                        <p>you are buying</p>
                        <p className="" >0.0561458 BTC</p>
                        <p>1 BTC =8,978.77 EUR</p>
                    </div>
                    <div className="total-amount">
                       <div className="amount-list">
                       <ul>
                           <li className="gray">Subtotal:</li>
                           <li>EUR 500,00</li>
                           </ul>
                        <ul >
                          <li className="gray"> Fees:</li>
                          <li> EUR: 19,50</li>
                           </ul>
                           <div className="border-bottom"></div>
                           <ul>

                           <li className="gray">Total: </li>
                           <li className="color-main">EUR 519,50</li>
                           </ul>
                           </div>
                        </div>
                    </div>

                </div>
                {/********************************************************/}
                <div className="confirmation">
                    <p>By tapping Proceed you agree to hcbtc.com <Link to="">Terms and conditions,privacy policy,refund policy.</Link></p>
                    <button type="submit">Proceed</button>

                </div>


            </React.Fragment>
        )
    }
}


























