import React from 'react'
import PropTypes from 'prop-types'
import { Video, Container } from './Landing.styles';
import video from "../../../assets/Video.mp4"

function Landing(props) {
    return (
        <Container>
            <Video src={"https://seedmarketting.s3.ap-south-1.amazonaws.com/Descale.mov"} loop muted={true} autoPlay playsinline="true" disablePictureInPicture="true" webkit-playsinline>
                <source src={"https://seedmarketting.s3.ap-south-1.amazonaws.com/Descale.mov"} />
            </Video>
        </Container>
    )
}

export default Landing

