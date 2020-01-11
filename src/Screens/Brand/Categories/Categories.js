import React from 'react'
import PropTypes from 'prop-types'
import {
    Container,
    Header,
    GreenSpan,
    CategRow,
    Categ
} from './Categories.styles';

import { navigate } from "gatsby"



// importing image
import Brand1 from '../../../components/Images/Brand1';
import Brand2 from '../../../components/Images/Brand2';
import Brand3 from '../../../components/Images/Brand3';
import Brand4 from '../../../components/Images/Brand4';

const list = [
    { title: 'How we made xyz company succeed', source: 'https://seedmarketting.s3.ap-south-1.amazonaws.com/Descale.mov' },
    { title: 'Students who benefitted from our survey', source: 'https://seedmarketting.s3.ap-south-1.amazonaws.com/Descale.mov' },
    { title: 'Students who benefitted from our survey', source: 'https://seedmarketting.s3.ap-south-1.amazonaws.com/Descale.mov' },
]


function Caetgories(props) {
    return (
        <Container>
            <Header><GreenSpan>Categories</GreenSpan></Header>
            <CategRow className="row">
                <div style={{ marginTop: 22 }} className="col-md-6">
                    <Categ to={'/brands/brand'} state={{ list: list }}><Brand1 /></Categ>
                    <Header style={{ fontSize: 15, textAlign: 'center' }}>Brand ambassador</Header>
                </div>
                <div style={{ marginTop: 22 }} className="col-md-6">
                    <Categ to={'/brands/brand'} state={{ list: list }}><Brand2 /></Categ>
                    <Header style={{ fontSize: 15, textAlign: 'center' }}>Stock footage, computer graphics and animations</Header>
                </div>
            </CategRow>
            <CategRow className="row">
                <div style={{ marginTop: 22 }} className="col-md-6">
                    <Categ to={'/brands/brand'} state={{ list: list }}><Brand3 /></Categ>
                    <Header style={{ fontSize: 15, textAlign: 'center' }}>Testimonials</Header>
                </div>
                <div style={{ marginTop: 22 }} className="col-md-6">
                    <Categ to={'/brands/brand'} state={{ list: list }}><Brand4 /></Categ>
                    <Header style={{ fontSize: 15, textAlign: 'center' }}>Others</Header>
                </div>
            </CategRow>
        </Container>
    )
}

export default Caetgories

