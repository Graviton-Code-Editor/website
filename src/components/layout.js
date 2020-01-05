import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import {Navbar} from './navbar'
import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    const aboutPath = `${__PATH_PREFIX__}/about/`
    const siteAuthor = " Marc Espín Sanz" 
    let header

    if (location.pathname === rootPath || location.pathname === blogPath || location.pathname === aboutPath) {
      header = (
        <div>
          <Navbar/>
          <h1
            style={{
              ...scale(1),
              marginBottom: rhythm(1.5),
              marginTop: 0,
              textAlign:'center',
              fontWeight:800
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={location.pathname === blogPath ? `/blog/` : `/`}
            >
              {title}
            </Link>
          </h1>
        </div>
      )
    } else {
      header = (    
        <div>
          <BackButton>
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/blog/`}
            >
              Go back
            </Link>
          </BackButton>
        </div>  
      )
    }
    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <Footer>
          © {new Date().getFullYear()}, Made by 
          {` `}
          <a href="https://github.com/marc2332">{siteAuthor}</a>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
  font-family:Montserrat, sans-serif;
`

const BackButton = styled.h2`
  font-family: Montserrat, sans-serif;
  margin-top: 0;
  text-align:left;
  font-weight:800;
  font-size:20px;
  text-decoration:none;
  -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 
  :hover{
    color:gray;
  }
`

export default Layout

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`
