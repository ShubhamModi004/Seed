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

const list = [
    "https://seedmarketting.s3.ap-south-1.amazonaws.com/Descale.mov",
    "https://seedmarketting.s3.ap-south-1.amazonaws.com/Descale.mov",
]


function Caetgories(props) {
    return (
        <Container>
            <Header><GreenSpan>Categories</GreenSpan></Header>
            <CategRow className="row">
                <div style={{ marginTop: 22 }} className="col-md-4"><Categ onClick={() => navigate('/brands/brand', { list: list })}><Brand1 /></Categ></div>
                <div style={{ marginTop: 22 }} className="col-md-4"><Categ onClick={() => navigate('/brands/brand', { list: list })}><Brand2 /></Categ></div>
                <div style={{ marginTop: 22 }} className="col-md-4"><Categ onClick={() => navigate('/brands/brand', { list: list })}><Brand3 /></Categ></div>
            </CategRow>
            <CategRow className="row">
                <div style={{ marginTop: 22 }} className="col-md-4"><Categ onClick={() => navigate('/brands/brand', { list: list })}><Brand1 /></Categ></div>
                <div style={{ marginTop: 22 }} className="col-md-4"><Categ onClick={() => navigate('/brands/brand', { list: list })}><Brand2 /></Categ></div>
                <div style={{ marginTop: 22 }} className="col-md-4"><Categ onClick={() => navigate('/brands/brand', { list: list })}><Brand3 /></Categ></div>
            </CategRow>
        </Container>
    )
}

export default Caetgories

