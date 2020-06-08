import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import {Navbar} from './navbar'
import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const blogPath = `${__PATH_PREFIX__}/blog/`
    const siteAuthor = " Marc Espín Sanz" 
    let header = (
        <div>
          <Navbar/>
          {location.pathname !== '/' && 
	    	<h1
			style={{
			  ...scale(1),
			  marginBottom: rhythm(1.5),
			  marginTop: 0,
			  textAlign:'center',
			  fontWeight:'800',
			  fontFamily: 'Inter, sans-serif'
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
	    }
        </div>
      )
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
	& * {
		font-family: 'Inter', sans-serif;
	}
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
  font-family: 'Inter', sans-serif;
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
