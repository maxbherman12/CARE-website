import React from 'react'
import './contact-form.styles.css'

import emailjs from 'emailjs-com';

import EmailLogo from './imgs/mail.png'
import InstagramLogo from './imgs/instagram.png'
import FacebookLogo from './imgs/facebook.png'
import TwitterLogo from './imgs/twitter.png'

import CustomButton from '../../components/custom-button/custom-button.component'

class ContactForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            from_name: '',
            user_email: '',
            message_html: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.sendEmail = this.sendEmail.bind(this)
    }

    sendEmail = e =>  {
        e.preventDefault();

        try{
            emailjs.sendForm('gmail', 'template_SYvZvBnN', e.target, 'user_U8u5G9v2HcZ6gyV8weBYB');
            this.setState({
                from_name: '',
                user_email: '',
                message_html: ''
            })
        }catch(error){
            alert('There was an unknown error. Please try again later.')
        }
    }

    handleChange = event => {
        const  {value, name} = event.target;
        this.setState({[name]:value})
    }

    render(){
    return(
        <div className="contact-form-container">
            <div className="contactInfo">
                <h2>Contact Info</h2>
                <ul className='social-media-links'>
                    <li><a href="mailto:carewestport@gmail.com">
                        <img src={EmailLogo} alt="insert"/>
                        <span>carewestport@gmail.com</span>
                    </a></li>
                    <li><a href="https://www.facebook.com/CARE-Foundation-114006050368382/?view_public_for=114006050368382" target='_blank' rel="noopener noreferrer">
                        <img src={FacebookLogo} alt="social"/>
                        <span>@CAREfoundation</span>
                    </a></li>
                    <li><a href="https://www.instagram.com/ctcarefoundation/" target='_blank' rel="noopener noreferrer">
                        <img src={InstagramLogo} alt="media"/>
                        <span>@ctcarefoundation</span>
                    </a></li>
                    <li><a href="https://twitter.com/CAREfoundatn" target='_blank' rel="noopener noreferrer">
                        <img src={TwitterLogo} alt="links"/>
                        <span>@CAREfoundatn</span>
                    </a></li>
                </ul>
            </div>
            <form className="contactForm" onSubmit={this.sendEmail}>
                <h2>Send a Message</h2>
                <input type="hidden" name="contact_number" required/>
                <div className="formBox">
                    <div className="inputBox w100">
                        <input 
                            type="text"
                            name="from_name"
                            value={this.state.from_name}
                            onChange={this.handleChange}
                            required
                        />
                        <span>Name</span>
                    </div>
                    <div className="inputBox w100">
                        <input
                            type="email"
                            name="user_email"
                            value={this.state.user_email}
                            onChange={this.handleChange}
                            required
                        />
                        <span>Email Address</span>
                    </div>
                    <div className="inputBox w100">
                        <textarea
                            name="message_html"
                            value={this.state.message_html}
                            onChange={this.handleChange}
                            required
                        ></textarea>
                        <span>Write your message here...</span>
                    </div>
                    <CustomButton type='submit' border>Send</CustomButton>
                </div>
          </form>
        </div>
    )
}
}

export default ContactForm;