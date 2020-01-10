import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'


const BackgroundSection = ({ className }) => (
    <StaticQuery
        query={graphql`
      query {
        desktop: file(relativePath: { eq: "ContactBG.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
        render={data => {
            // Set ImageData.
            const imageData = data.desktop.childImageSharp.fluid
            return (
                <BackgroundImage
                    Tag="section"
                    className={className}
                    fluid={imageData}
                    backgroundColor={`#040e18`}
                >
                </BackgroundImage>
            )
        }}
    />
)

const ContactBg = styled(BackgroundSection) `
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export default ContactBg