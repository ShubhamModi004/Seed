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

const brandAmbassador = {
    title: 'Brand Ambassador',
    description: 'We created a Brand Ambassador, an American lady who was featured in over 15 commercials. We used her because IFB believed they still has a residual image from their International Bosch tie-up which they wanted to take advantage of. These international standard commercials viewed millions of times, were cleverly done and  high-lighted the features of the products. The strategic planning, brand design and creative was also done by SEED, including the film production, editing and music in a unorganized film production eco-system like Goa.',
    list: [
        {
            title: '',
            desc: '',
            videos: [
                { source: 'https://seedmarketting.s3.ap-south-1.amazonaws.com/Descale.mov' },
                { source: 'https://seedmarketting.s3.ap-south-1.amazonaws.com/Descale.mov' },
                { source: 'https://seedmarketting.s3.ap-south-1.amazonaws.com/Descale.mov' }
            ]
        },
        {
            title: 'Long format Interviews with customers',
            desc: 'When someone is officially interviewed they say a lot of things about products especially when they are not paid actors and we shoot them in their own home without make-up and hair, and that produces very rich and genuine content. We used this format especially with Dishwasher and Washing Machine customers and the resultant effect on sales brought a gleeful smile on the product managers face for quite a while.',
            videos: [
                { source: 'https://seedmarketting.s3.ap-south-1.amazonaws.com/Descale.mov' },
                { source: 'https://seedmarketting.s3.ap-south-1.amazonaws.com/Descale.mov' },
                { source: 'https://seedmarketting.s3.ap-south-1.amazonaws.com/Descale.mov' }
            ]
        }
    ]
}


function Caetgories(props) {
    return (
        <Container>
            <Header><GreenSpan>Categories</GreenSpan></Header>
            <CategRow className="row">
                <div style={{ marginTop: 22 }} className="col-md-6">
                    <Categ to={'/brands/brand'} state={{ list: brandAmbassador }}><Brand1 /></Categ>
                    <Header style={{ fontSize: 15, textAlign: 'center' }}>Brand ambassador</Header>
                </div>
                <div style={{ marginTop: 22 }} className="col-md-6">
                    <Categ to={'/brands/brand'} state={{ list: brandAmbassador }}><Brand2 /></Categ>
                    <Header style={{ fontSize: 15, textAlign: 'center' }}>Stock footage, computer graphics and animations</Header>
                </div>
            </CategRow>
            <CategRow className="row">
                <div style={{ marginTop: 22 }} className="col-md-6">
                    <Categ to={'/brands/brand'} state={{ list: brandAmbassador }}><Brand3 /></Categ>
                    <Header style={{ fontSize: 15, textAlign: 'center' }}>Testimonials</Header>
                </div>
                <div style={{ marginTop: 22 }} className="col-md-6">
                    <Categ to={'/brands/brand'} state={{ list: brandAmbassador }}><Brand4 /></Categ>
                    <Header style={{ fontSize: 15, textAlign: 'center' }}>Others</Header>
                </div>
            </CategRow>
        </Container>
    )
}

export default Caetgories

