import React from 'react'
import { FooterContainer, Section, FooterHeader, CallToActions, ActionText } from './Footer.styled';
import Mail from '../../assets/mail.png';
import Phone from '../../assets/phone.png';

const Footer = () => {
    return (
        <FooterContainer>
            <Section>
                <FooterHeader>Contact us</FooterHeader>
                <CallToActions href="mailto:someone@example.com">
                    <img className="Images" src={Mail} alt="Mail" />
                    <ActionText>example@gmail.com</ActionText>
                </CallToActions>
                <CallToActions href="tel:+91-99-9999-999">
                    <img className="Images" src={Phone} alt="Phone" />
                    <ActionText>+91-99-9999-999</ActionText>
                </CallToActions>
            </Section>
            <Section>
                <FooterHeader>
                    Address
                </FooterHeader>
                <ActionText style={{ marginLeft: 0 }}>89-6343. Address17206 Old National Pike SW, Frostburg, MD, 21532  NameChip C Smith. </ActionText>
            </Section>

        </FooterContainer>
    )
}

export default Footer
