import React from 'react'
import './Form.css';


const Form =()=>
{
    return(
        <div className="form">
            <form>
                <label for="email">Email</label>
                <input name="email" placeholder="Enter Your email" type="email" /><br/>
                <label for="box">Message</label>
                <input type="text"  placeholder="Type a Message..."  name="box"/>
                <button type="submit" >Send</button>
                </form>
            </div>
    )
}
export default Form;