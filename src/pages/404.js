import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FlexAlign from '../components/flex-align'

class NotFoundPage extends React.Component {
  render() {
    return (
	<Layout location={this.props.location} title={"404: Not Found"}>
		<SEO title="404: Not Found" />
		<FlexAlign>
			<p>You shouldn't be here...</p>
		</FlexAlign>
	</Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
