import React, { Component } from 'react';
import emailjs from 'emailjs-com';

const emptyForm = {
    name: '',
    company: '',
    email: '',
    service: '',
    details: '',
    number: ''
}

class ContactBox extends Component {
    state = {
        name: '',
        company: '',
        email: '',
        service: '',
        details: '',
        number: ''
    }

    handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        this.setState({
            [name]: value
        });
    }

    sendEmail = e => {
        e.preventDefault();
        this.setState(emptyForm)
        emailjs.send('outlook','contact_email', this.state, process.env.GATSBY_USER_ID)
            .then((response) => { 
                console.log('SUCCESS!', response.status, response.text)
            },
                (err) => { console.log('FAILED...', err) });
    }

    render() {
        const { name, company, email, details, number } = this.state

        return (
            <div className="contactBox" id="contact">
                <div className="container">
                    <h1 className="title">Contact</h1>
                    <form onSubmit={this.sendEmail}>
                        <div className="contactBox__grid">
                            <div className="contactBox__grid__col1">
                                <input 
                                    className="bh-input"
                                    name={'name'}
                                    value={name}
                                    onChange={this.handleChange}
                                    placeholder={'Name'}
                                    title={'Name'}
                                    type={'text'} />
                                <input 
                                    className="bh-input" 
                                    placeholder="Company" 
                                    name={'company'}
                                    value={company}
                                    onChange={this.handleChange}
                                    title={'Company'}
                                    type={'text'} />
                            </div>
                            <div className="contactBox__grid__col2">
                                <input 
                                    className="bh-input" 
                                    placeholder="Email"
                                    type="email" 
                                    name={'email'}
                                    value={email}
                                    onChange={this.handleChange}
                                    title={'Email'} />
                                <select className="bh-input" name="service" onChange={this.handleChange}>
                                    <option value="SEO">SEO</option>
                                    <option value="PPC">PPC</option>
                                    <option value="Design">Design</option>
                                    <option value="Content">Content</option>
                                    <option value="Social">Social</option>
                                </select>
                            </div>
                            <textarea 
                                placeholder="Details" 
                                name="details" 
                                type="text"
                                name={'details'}
                                value={details}
                                onChange={this.handleChange}
                                title={'Details'} />
                            <div className="contactBox__grid__col3">
                                <input 
                                    className="bh-input" 
                                    placeholder="Contact Number" 
                                    type="text"
                                    name={'number'}
                                    value={number}
                                    onChange={this.handleChange}
                                    title={'Number'} />
                                <button className="btn btn--blue" type="submit">Send</button>
                            </div>
                        </div>
                    </form>
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