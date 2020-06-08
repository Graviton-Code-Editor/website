import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = "Blog"
    const posts = data.allMdx.edges
    const postAuthor = data.site.siteMetadata.author

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Blog" />
        <div style={{ margin: "20px 0 40px" }}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug} style={{
                    border: '2px solid rgba(220,220,220)',
                    borderRadius: '7px',
                    padding: '20px',
                    margin: '5px 0px'
                  }}>
                <h3
                  style={{
                    marginTop: '5px',
                     marginBottom: '5px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: '700'
                  }}
                >
                  <Link
                    style={{ 
                       boxShadow: `none`,
                       fontFamily: 'Inter, sans-serif'
                    }}
                    to={`blog${node.fields.slug}`}
                  >
                    {title}
                  </Link>
                </h3>
                <small  style={{ 
                       boxShadow: `none`,
                       fontFamily: 'Inter, sans-serif'
                    }}>
                  {node.frontmatter.date} · {postAuthor}</small>
                <p 
                  style={{ 
                       boxShadow: `none`,
                       fontFamily: 'Inter, sans-serif',
                       marginBottom: '5px'
                    }}
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`


