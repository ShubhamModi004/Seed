import React, { Component } from 'react'
import { ContactHeader, ContactSection, InputField, TextField, SendButton } from './Contact.styles';


export default class ContactForm extends Component {
    render() {
        return (
            <ContactSection>
                <ContactHeader>Contact us</ContactHeader>
                <form action="https://formspree.io/example@gmail.com" method="POST" class="ContactUsForm">
                    <div class="form-groups">
                        <div className="row">
                            <div class="col-md-6">
                                <InputField type="text" class="form-control" name="name" placeholder="NAME" />
                            </div>
                            <div class="col-md-6">
                                <InputField type="text" class="form-control" name="email" placeholder="EMAIL" />
                            </div>
                        </div>

                        <div class="form-group">
                            <TextField class="form-control" name="body" placeholder="MESSAGE" cols="30" rows="1"></TextField>
                        </div>
                        <SendButton type="submit">Send</SendButton>
                    </div>
                </form>
            </ContactSection>
        )
    }
}




