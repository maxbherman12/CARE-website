import React from 'react'
import './contact-form.styles.css'

import CustomButton from '../custom-button/custom-button.component' 

class ContactForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            subject: '',
            email: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event){
        const {name, subject, email, message} = this.state;
        console.log('hi')
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input name='name' onChange={this.handleChange} required/>
                </label>
                <label>
                    Email:
                    <input type='email' name='email' onChange={this.handleChange} required/>
                </label>
                <label>
                    Subject:
                    <input name='subject' onChange={this.handleChange} required/>
                </label>
                <label>
                    Message:
                    <textarea name='message' onChange={this.handleChange} required></textarea>
                </label>
                <CustomButton inverted type='submit'>Send</CustomButton>      
            </form>
        )
    }
}

export default ContactForm;