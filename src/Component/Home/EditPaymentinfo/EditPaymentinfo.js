import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import checked from '../../../HCBTC-Assets/icons/checkbox_on.svg';
import './EditPaymeninfo.css';

export default class EnterPaymentinfo extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="enterpayment payment-2 width flex direction">
                    <label className="label">CHOOSE PAYMENT METHOD</label>
                    <div className="pay-method-2">

                        <p>SEPA </p>
                        <p className="gray">Lorem Ipsum dolor</p>
                    </div>
                    <div className="wire-details">
                    <h5>WIRE DETAILS</h5>
                    <p ><span>*</span>Wires can be made by customers only EURO(SEPA).They settle as soon as they have
                      been received in our bank account. As a result, these funds are a available for tranding and
                      withdrawl immediately once they have been credited to your account.
                     </p>
                     </div>
                    <label className="gray">Upload proof slip </label>
                    <div>
                    <input className="upload" type="file" />
                    <label className="gray" >Choose a file</label>
                    </div>

                    <label className="gray">Beneficiary name</label>
                    <input type="text" placeholder="Techview OU" />
                    <label className="gray">Benificiary address</label>
                    <input type="text" placeholder="Peter Tee 53 Tallin,11415,Estonia" />
                    <label className="gray">Bank name</label>
                    <input type="text" />
                    <label className="gray">Bank address</label>
                    <input type="text" />
                    <label className="gray">IBAN</label>
                    <input type="text" />
                    <label className="gray">SWIFT(BIC)</label>
                    <input type="text" />
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
                <div className="confirmation">
                    <p>By tapping Proceed you agree to hcbtc.com <Link to="">Terms and conditions,privacy policy,refund policy.</Link></p>
                    <button type="submit">Proceed</button>

                </div >
            </React.Fragment>
        )
    }
}
