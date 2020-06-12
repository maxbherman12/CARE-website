import React from 'react';
import emailjs from 'emailjs-com';

class ContactForm extends React.Component{

    sendEmail(e) {
        e.preventDefault();
        /* emailjs.sendForm('gmail', 'template_SYvZvBnN', e.target, 'user_U8u5G9v2HcZ6gyV8weBYB')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        }); */  
    }
    render(){
        return (
          <form className="contact-form" onSubmit={this.sendEmail}>
            <input type="hidden" name="contact_number" required/>
            <label >Name</label>
            <input type="text" name="from_name" required/>
            <label>Email</label>
            <input type="email" name="user_email" required/>
            <label>Message</label>
            <textarea name="message_html" />
            <input type="submit" value="Send" />
          </form>
        );
    }
}

export default ContactForm;