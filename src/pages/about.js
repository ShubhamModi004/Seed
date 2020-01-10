import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Landing from "../Screens/About/Landing/Landing"
import AboutMe from "../Screens/About/AboutMe/AboutMe"
import Contact from "../Screens/About/Contact/Contact"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Landing />
    <AboutMe />
    <Contact />
  </Layout>
)

export default SecondPage
