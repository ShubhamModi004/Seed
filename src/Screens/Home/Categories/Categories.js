import React from 'react'
import PropTypes from 'prop-types'
import VideoPlayer from '../../../components/VideoPlayer';
import "../../../../node_modules/video-react/dist/video-react.css";
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
    CatImageBg
} from './Categories.styles';

import { navigate } from "gatsby"



// importing image
import Research from '../../../components/Research';
import Training from '../../../components/Training';



function Caetgories(props) {
    return (
        <Container>
            <Header><GreenSpan>Brand</GreenSpan> Desgin</Header>
            <VideoPlayer source={"https://seedmarketting.s3.ap-south-1.amazonaws.com/Descale.mov"} />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ViewButton to="/brand"><ViewAll>View all</ViewAll></ViewButton>
            </div>
            <Header style={{ textAlign: 'center' }}><GreenSpan>Innovative</GreenSpan> Marketing Ideas</Header>
            <VideoPlayer source={"https://seedmarketting.s3.ap-south-1.amazonaws.com/Descale.mov"} />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ViewButton onClick={() => navigate('/brands/brand')}><ViewAll>View all</ViewAll></ViewButton>
            </div>
            <Categ mobile={false} reverse={true} className="row">
                <div className="col-md-6 ">
                    <TextContainer>
                        <Header><GreenSpan>Training </GreenSpan></Header>
                        <TextDesc>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </TextDesc>
                        <WatchButton onClick={() => navigate('/brands/brand')}>
                            <WatchText>watch</WatchText>
                        </WatchButton>
                    </TextContainer>

                </div>
                <div className="col-md-6" style={{ position: 'relative' }}>
                    <CatImage><Training /></CatImage>
                    <CatImageBg />
                </div>
            </Categ>
            <Categ mobile={true} desktopUnVisible={true} reverse={true} className="row">
                <div className="col-md-6" style={{ position: 'relative' }}>
                    <CatImage><Training /></CatImage>
                    <CatImageBg />
                </div>
                <div className="col-md-6 ">
                    <TextContainer>
                        <Header mobileHeader={true}><GreenSpan>Training </GreenSpan></Header>
                        <TextDesc>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </TextDesc>
                        <WatchButton onClick={() => navigate('/brands/brand')}>
                            <WatchText>watch</WatchText>
                        </WatchButton>
                    </TextContainer>
                </div>
            </Categ>
            <Categ mobile={true} className="row">
                <div className="col-md-6" style={{ position: 'relative' }}>
                    <CatImage ><Research /></CatImage>
                    <CatImageBg style={{ left: '-1.4rem', backgroundImage: 'linear-gradient(to bottom, #d600d6, #a455cb)' }} />
                </div>
                <div className="col-md-6">
                    <TextContainer>
                        <Header mobileHeader={true}><GreenSpan>Research</GreenSpan></Header>
                        <TextDesc>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </TextDesc>
                        <WatchButton purple={true} onClick={() => navigate('/brands/brand')}>
                            <WatchText>watch</WatchText>
                        </WatchButton>
                    </TextContainer>

                </div>
            </Categ>
        </Container>
    )
}

export default Caetgories

