import React, { Fragment } from "react"
import { Link } from "gatsby"

import Landing from "../../Screens/Home/Landing/Landing"
import Category from "../../Screens/Category/Category"
import Footer from '../../components/Footer/Footer'

import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"

const IndexPage = (props) => {
    return (
        <Layout>
            <SEO title="Branding" />
            <Category list={props.location.state} />
            <Footer />
        </Layout>
    )
}
export default IndexPage
