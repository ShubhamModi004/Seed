import React, { Fragment } from "react"
import { Link } from "gatsby"

import Landing from "../Screens/Home/Landing/Landing"
import Categories from "../Screens/Home/Categories/Categories"
import Footer from '../components/Footer/Footer'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <Categories />
    <Footer />

  </Layout>
)

export default IndexPage
