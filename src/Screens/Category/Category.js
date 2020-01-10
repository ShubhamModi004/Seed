import React from 'react'
import PropTypes from 'prop-types'
import VideoPlayer from '../../components/VideoPlayer';
import "../../../node_modules/video-react/dist/video-react.css";
import {
    Container,
    Header,
    GreenSpan,
    ViewButton,
    ViewAll,
    TextContainer,
    Categ,
    TextDesc,
    WatchButton,
    WatchText,
    CatImage,
    CatImageBg,
    Title
} from './Category.styles';





function Caetgories(props) {
    return (
        <Container>
            <Title>How me made the food company xyz succeed</Title>
            <VideoPlayer source={"https://seedmarketting.s3.ap-south-1.amazonaws.com/Descale.mov"} />
            <Title>College students benefiting the most from our abc technology</Title>
            <VideoPlayer source={"https://seedmarketting.s3.ap-south-1.amazonaws.com/Descale.mov"} />
        </Container>
    )
}

export default Caetgories

