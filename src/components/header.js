import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// importing styled components
import {
  Header,
  Logo,
  NavLinks,
  Links
} from './header.styles';

const Component = ({ siteTitle }) => (
  <Header>
    <Logo><h2 style={{ color: '#fff' }}>Logo</h2></Logo>
    <NavLinks>
      <Link to="/"><Links>Home</Links></Link>
      <Link to="/about"><Links style={{ marginLeft: 40 }}>About</Links></Link>
    </NavLinks>
  </Header>
)

Component.propTypes = {
  siteTitle: PropTypes.string,
}

Component.defaultProps = {
  siteTitle: `Seed`,
}

export default Component
