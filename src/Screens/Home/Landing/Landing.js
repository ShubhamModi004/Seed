import React from 'react'
import PropTypes from 'prop-types'
import { Video, Container } from './Landing.styles';
import video from "../../../assets/Video.mp4"

function Landing(props) {
    return (
        <Container>
            <Video src={video} type="video/mp4" loop muted={true} autoPlay playsinline="true" disablePictureInPicture="true" webkit-playsinline>
                <source src={video} type="video/mp4" />
            </Video>
        </Container>
    )
}

export default Landing

