import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components"
import graviton from '../../static/assets/graviton-logo.png'

function Navbar(){
	return(
		<StyledNavBar>
			<img src={graviton}  alt="Graviton Screenshot" />
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
	display:flex;
	border:0;
	padding:15px;
	margin-bottom:25px;
	align-items: center;
	border-bottom: 1px solid rgb(180,180,180);
	img {
		width:150px;
		height:auto;
		max-height:50.3px;
		margin:0px;
		margin-right: 60px;
	}
	a {
		font-family: 'Inter', sans-serif;
		padding:15px 5px;
		margin: 0px 7px;
		border:0;
		text-decorations:none;
		background:transparent;
		color:rgb(75,75,75);
		box-shadow:none;
		outline:0;
		-webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 
		font-weight: 500;
	}
	a.active{
		color:black;
	}

	a:not(.active):hover {
		box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.25);
		color:gray;
	}
	a.active:hover {
		box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.25);
	}   
`

export {Navbar}