import React, { Fragment } from 'react'
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
            {props.state.list && props.state.list.map((item, index) => (
                <Fragment>
                    <Title>{item.title}</Title>
                    <VideoPlayer source={item.source} />
                </Fragment>
            ))}
        </Container>
    )
}

export default Caetgories

