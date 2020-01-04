import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components"

function Navbar(){
    return(
        <StyledNavBar>
           <Link to="/" activeClassName="active">
                    Home
            </Link>
            <Link to="/blog/" activeClassName="active">
                Blog
            </Link>
            <Link to="/about/" activeClassName="active">
                About
            </Link>
        </StyledNavBar>
    )
}

const StyledNavBar = styled.div`
    display:inline-block;
    border:0;
    padding:10px;
    margin-bottom:15px;
    > a {
        font-family:Montserrat, sans-serif;
        padding:10px 15px;
        border:0;
        border-radius:8px;
        text-decorations:none;
        background:transparent;
        color:black;
        box-shadow:none;
    }
    > a:not(.active):hover {
        box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.25);
        color:gray;
    }
    .active{
        background:#0066FF;
        color:white;
    }
`

export {Navbar}