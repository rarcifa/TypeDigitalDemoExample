import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import SectionTypeI from "../components/SectionTypeI"

/*  Main Skeleton */
const IndexPage = props => {
  return (
    <Layout>
      {/*!-- Sections */}
      <SectionTypeI sections={props}/>

    </Layout>
  )
}

export default IndexPage

/* Query */
export const pageQuery = graphql`
query MyQuery {
  contentfulLandingPage {
    name
    sections {
      ... on ContentfulSectionTypeI {
        id
        name
        backgroundImage {
          file {
            url
          }
        }
        styling {
          style {
            css {
              color
              background
              textAlign
            }
          }
        }
        tagline
        cta {
          link
          name
        }
      }
      ... on ContentfulSectionTypeIi {
        id
        name
        tagline
        styling {
          style {
            css {
              color
              background
              textAlign
            }
          }
        }
        logos {
          file {
            url
          }
        }
      }
    }
  }
}
`