import React from 'react'
import './Contact.css';
import Form from './Form/Form';


const Contact = () => {
    return (
        <React.Fragment>
        <div className="contact">
            <div class="mail-image">
            <div className="container">
                <div className="mailbox">
                    <h3>Get In Touch</h3>
                    <p>Ask Us about VIP account and more</p>
                </div> <Form />
                </div>
            </div>
           
        </div>
        
         </React.Fragment>
    )
}
export default Contact;