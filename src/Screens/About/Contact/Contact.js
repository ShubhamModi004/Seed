import React from 'react'

import { Container, Overlay } from './Contact.styles';

import ContactBg from './ContactBg';
import ContactForm from './ContactForm';


const Contact = (props) => {
    return (
        <Container>
            <ContactBg />
            <Overlay />
            <ContactForm />
        </Container>
    )
}



export default Contact

