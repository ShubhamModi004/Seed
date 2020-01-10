import React from 'react'
import PropTypes from 'prop-types'
import { Video, Container, ViewButton, ViewAll } from './Landing.styles';
import video from "../../../assets/Video.mp4"

function Landing(props) {
    return (
        <Container>
            <Video src={video} type="video/mp4" loop muted={true} autoPlay playsinline="true" disablePictureInPicture="true" webkit-playsinline>
                <source src={video} type="video/mp4" />
            </Video>
            <div style={{ position: 'absolute', top: '70%', left: '45%' }}>
                <ViewButton><ViewAll>contact</ViewAll></ViewButton>
            </div>
        </Container>
    )
}

export default Landing

