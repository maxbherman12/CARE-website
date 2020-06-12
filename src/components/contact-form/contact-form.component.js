import React from 'react';
import emailjs from 'emailjs-com';

import CustomButton from '../custom-button/custom-button.component'


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
            alert('rob is megagay')
        }catch(error){
            alert('There was an unknown error. Please try again later.')
        }
    }

    handleChange = event => {
        const  {value, name} = event.target;
        this.setState({[name]:value})
    }

    render(){
        return (
          <form className="contact-form" onSubmit={this.sendEmail}>
            <input type="hidden" name="contact_number" required/>
            <label >Name</label>
            <input 
                type="text"
                name="from_name"
                value={this.state.from_name}
                onChange={this.handleChange}
                required
            />
            <label>Email</label>
            <input
                type="email"
                name="user_email"
                value={this.state.user_email}
                onChange={this.handleChange}
                required
            />
            <label>Message</label>
            <textarea
                name="message_html"
                value={this.state.message_html}
                onChange={this.handleChange}
                required
            />
            <CustomButton inverted type='submit'>SUBMIT</CustomButton>
          </form>
        );
    }
}

export default ContactForm;