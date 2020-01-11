import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import VideoPlayer from '../../components/VideoPlayer';
import "../../../node_modules/video-react/dist/video-react.css";
import {
    Container,
    Header,
    Description,
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
    Title,
    Desc
} from './Category.styles';





function Caetgories(props) {
    console.log('category', props.list.list)
    return (
        <Container>
            <Header><GreenSpan>{props.list.list.title}</GreenSpan></Header>
            <Description>{props.list.list.description}</Description>
            {props.list && props.list.list.list.map((item, index) => (
                <Fragment>
                    <Title><GreenSpan>{item.title}</GreenSpan></Title>
                    <Desc>{item.desc}</Desc>
                    {item.videos.map((video, index) => (
                        <VideoPlayer key={index} source={video.source} />
                    ))}
                </Fragment>
            ))}
        </Container>
    )
}

export default Caetgories

