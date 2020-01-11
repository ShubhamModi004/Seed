import React from "react"

import Layout from "../components/layout"
import Categories from "../Screens/Brand/Categories/Categories"
import Footer from '../components/Footer/Footer'
import SEO from "../components/seo"

const SecondPage = () => (
    <Layout>
        <SEO title="Brand" />
        <Categories />
        <Footer />
    </Layout>
)

export default SecondPage
