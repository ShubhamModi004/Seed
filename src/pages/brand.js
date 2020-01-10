import React from "react"

import Layout from "../components/layout"
import Landing from "../Screens/Brand/Landing/Landing"
import Categories from "../Screens/Brand/Categories/Categories"
import Footer from '../components/Footer/Footer'
import SEO from "../components/seo"

const SecondPage = () => (
    <Layout>
        <SEO title="Page two" />
        <Landing />
        <Categories />
        <Footer />
    </Layout>
)

export default SecondPage
