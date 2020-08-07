import Link from 'next/link'
import styled from '@emotion/styled'
import { useRouter } from "next/router";
import { list as sidebar } from '../docs/_sidebar.json'
import { useState } from 'react'

const SidebarContainer = styled.div`
	display: block;
	overflow: auto;
	flex: 1;
	min-height: 300px;
	height: 100%;
	min-width: 25%;
	max-width: 100px;
	padding: 5px;
	overflow: auto;
	& > button {
		position: absolute;
		top: 205px;
		left: 25px;
		display: none;
		outline: 0;
		padding:  8px 7px;
		height: 45px;
		width: 45px;
		border-radius: 7px;
		background: rgb(247,247,247);
		border: none;
		box-shadow: 0px 1px 3px rgba(0,0,0,0.2);
		margin: 3px;
		flex-direction: column;
		& rect {
			background: rgb(75, 75, 75);
			height: 1.5px;
			border-radius: 5px;
			margin: 3.5px 0px;
			flex: 1;
			width: 100%;
		}
	}
	& > div {
		background: white;
		box-shadow: 0px 1px 3px rgba(0,0,0,0.2);
		padding: 20px;
		border-radius: 8px;
		overflow: auto;
		& div.sideButton{
			margin-left: 15px;
			height: auto;
			&  > button{
				white-space: nowrap;
				margin: 1px;
				border-radius: 6px;
				border: none;
				font-size: 12px;
				color: black;
				padding:  6px 8px;
				background: transparent;
				&:hover{
					background: rgba(255, 0, 72, 0.2);
					color: rgba(255, 0, 72, 0.9);
				}
				&[active="true"]{
					background: rgba(255, 0, 72, 0.2);
					color: rgba(255, 0, 72, 0.9);
				}
			}
		}
		& > div.sideButton{
			margin-left: 0px;
		}
	}
	@media only screen and (max-width: 600px) {
		& {
			box-shadow: none;
			flex: 1;
			min-width: 40px;
			margin: 0px;
			padding: 0;
			overflow: auto;
			& > button {
				display: flex;
			}
		}
		& > div{
			position: absolute;
			top: 225px;
			padding: 15px;
			pointer-events:none;
			max-height: 100%;
			overflow: auto;
			transition: 0.15s;
			opacity: 0;
			margin-top: -5px;
			margin-left: 0px;
			&[opened="true"]{
				margin-top: 0px;
				margin-left: 5px;
				opacity: 1;
				transition: 0.25s;
				pointer-events: auto;
			}
			& div.sideButton{
				& > button {
					padding: 9px 11px;
				}
			}
		}
	}
`



const getSideButton = (btn) => {
	const router = useRouter();
	const slug = btn.slug !== '' ? `/docs/${btn.slug}` : '/docs'
	return (
		<div key={btn.slug} className="sideButton" >
			<Link href={`/docs/${btn.slug}`}>
				<button active={router.asPath ===  slug ? "true" : ""}> {btn.label} </button>
			</Link>
			{btn.list && btn.list.map(btn => getSideButton(btn))}
		</div>
	)
}

function Sidebar() {
	
	const [opened, open]= useState(false)
	
	if(typeof window !== "undefined"){
		window.addEventListener('click',()=> {
			open(false)
		})
	}
	function click(e){
		e.stopPropagation()
		open(!opened)
	}
	
	return (
		<SidebarContainer>
			<button onClick={click}>
				<rect></rect>
				<rect></rect>
				<rect></rect>
			</button>
			<div opened={opened.toString()}>
				{sidebar.map(btn => getSideButton(btn))}
			</div>
		</SidebarContainer>
	)
}

export default Sidebar
