import React from 'react'
import PropTypes from 'prop-types'
import {
    Container,
    Section,
    GreenSpan,
    Content,
    AboutContainer,
    AboutHeader,
    AboutContent
} from './AboutMe.styles';


function AboutMe(props) {
    return (
        <Container>
            <Section className="row">
                <div className="col-md-4">
                    <GreenSpan>Expertise</GreenSpan>
                    <Content>2 years plus</Content>
                </div>
                <div className="col-md-4">
                    <GreenSpan>Clients</GreenSpan>
                    <Content>9 plus</Content>
                </div>
                <div className="col-md-4">
                    <GreenSpan>Projects</GreenSpan>
                    <Content>240 Plus</Content>
                </div>
            </Section>
            <AboutContainer>
                <AboutHeader>
                    About us
                </AboutHeader>
                <AboutContent>
                    SEED has done over 240 videos for IFB Industries in 9 product categories and also for internal training and research among other videos over two years. All the videos are strategized, scripted, produced, directed and edited in house by the SEED teams in Goa, for IFB Industries. There is no out sourcing of any kind except for equipment. Thus cutting costs drastically in the making of the video content for IFB Industries.
                    The SEED teams have expertise in all the computer software and film production experience required to make any kind of video content.The creative capital of each SEED member is equal to mulple creative industries that are conventionally put together to create the kind of video content you will see on this site. Which translates into prolific savings for any company using our services.
                </AboutContent>
            </AboutContainer>
        </Container>
    )
}

export default AboutMe

