import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import {Navbar} from './navbar'
import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    const aboutPath = `${__PATH_PREFIX__}/about/`

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
          <h1
            style={{
              ...scale(0.8),
              fontFamily: `Montserrat, sans-serif`,
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
              to={`/blog/`}
            >
              {title}
            </Link>
          </h1>
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
          <a href="https://github.com/marc2332">Marc Espín</a>
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

export default Layout
