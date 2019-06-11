import React, { Component } from 'react';

class ContactBox extends Component {
    render() {
        return (
            <div className="contactBox">
                <div className="container">
                    <h1 className="title">Contact</h1>
                    <div className="contactBox__grid">
                        <div className="contactBox__grid__col1">
                            <input className="bh-input" placeholder="Name" />
                            <input className="bh-input" placeholder="Company" />
                        </div>
                        <div className="contactBox__grid__col2">
                            <input className="bh-input" placeholder="Email" type="email" />
                            <select className="bh-input" name="Service">
                                <option value="SEO">SEO</option>
                                <option value="PPC">PPC</option>
                                <option value="Design">Design</option>
                                <option value="Content">Content</option>
                                <option value="Social">Social</option>
                            </select>
                        </div>
                        <div className="contactBox__grid__col3">
                            <input className="bh-input" placeholder="Contact Number" />
                            <button className="btn btn--blue">Send</button>
                        </div>
                    </div>
                </div>
                <svg className="" id="" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1416.99 174.01">
                        <defs></defs><title></title>
                        <path className="cls-1" d="M0,280.8S283.66,59,608.94,163.56s437.93,150.57,808,10.34V309.54H0V280.8Z"
                        transform="translate(0 -135.53)" fill="white"/>
                    </svg>
            </div>
        )
    }
}

export default ContactBox;