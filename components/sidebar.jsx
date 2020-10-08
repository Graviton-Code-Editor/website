import Link from 'next/link'
import styled from '@emotion/styled'
import { useRouter } from "next/router";
import { list as sidebar } from '../docs/_sidebar.json'
import { useState, useEffect } from 'react'

const SidebarContainer = styled.div`
	display: block;
	overflow: auto;
	flex: 1;
	min-height: 300px;
	height: 100%;
	min-width: 215px;
	max-width: 50px;
	margin-top: 5px;
	padding: 20px 5px;
	overflow: auto;
	& > button {
		position: absolute;
		top: 123px;
		left: 20px;
		display: none;
		outline: 0;
		padding:  6px 7px;
		height: 40px;
		width: 40px;
		border-radius: 7px;
		background: rgb(247,247,247);
		border: none;
		margin: 3px;
		flex-direction: column;
		& span {
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
		& input {
			max-width: 115px;
			padding: 5px;
			border: 2px solid rgb(200, 200, 200);
			border-radius: 5px;
			margin: 1px;
			margin-bottom: 4px;
			font-size: 12px;
		}
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
				outline: 0;
				display: flex;
				justify-content: center;
				align-items: center;
				& img {
					height: 7px;
					margin-left: 10px;
					transition: transform ease-out 0.07s;
					&.displayed{
						transform: rotate(0deg);
					}
					&.hidden{
						transform: rotate(-90deg);
					}
				}
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
			min-width: 0px;
			margin: 0px;
			padding: 0;
			overflow: auto;
			& > button {
				display: flex;
			}
		}
		& > div{
			position: absolute;
			top: 162px;
			left: 55px;
			padding: 15px;
			pointer-events:none;
			max-height: 100%;
			overflow: auto;
			transition: 0.15s;
			opacity: 0;
			margin-top: -5px;
			margin-left: 0px;
			padding: 7px;
			&[opened="true"]{
				margin-top: 0px;
				margin-left: 5px;
				opacity: 1;
				transition: 0.25s;
				pointer-events: auto;
			}
			& div.sideButton{
				& > button {
					padding: 8px 10px;
				}
			}
		}
	}
`


const getSideButton = (btn, filter, inRoot) => {
	const router = useRouter();
	const slug = btn.slug !== '' ? `/docs/${btn.slug}` : '/docs'
	const [displayed, display] = useState(router.asPath.includes(slug) || inRoot)
	const [active, setActive] = useState(router.asPath ===  slug ? "true" : "")
	filter.results.push({
		slug,
		name: btn.label,
		action(p){
			if(p.match(slug)) {
				display(true)
				if(p === slug) setActive('true')
			}else{
				display(false)
				if(router.asPath !==  slug) setActive('false')
			}
		}
	})
	
	return (
		<div key={btn.slug} className="sideButton" >
			{btn.list ? (
				<button className="sidebtn" onClick={ () => display(!displayed)} active={active}> 
					{btn.label} 
					<img src="/arrow.svg" className={displayed?'sidebtn displayed':'sidebtn hidden'}/>
				</button>
			): (
				<Link href={`/docs/${btn.slug}`} >
					<button onClick={ () => display(!displayed)} active={active}>
						{btn.label} 
					</button>
				</Link> 
			)}
			<div style={displayed ? {display: 'block'}:{display: 'none'}}>
			{btn.list && btn.list.map(btn => getSideButton(btn, filter, false))}
			</div>
			
		</div>
	)
}

function Sidebar() {
	
	const [opened, open]= useState(false)
	
	useEffect(()=>{
		window.addEventListener('click',(e)=> {
			e.stopPropagation()
			if(e.target.classList.contains('sidebtn')) return
			open(false)
		})
	},[])
	
	function click(e){
		e.stopPropagation()
		open(!opened)
	}
	
	const filter = {
		results: []
	}
	
	function onChange(e){
		const slugFilter = e.target.value
		const res = filter.results.find(({ name }) => {
			return name.toLowerCase().includes(slugFilter.toLowerCase())
		})
		if(res){
			filter.results.forEach(({ action }) => {
				action(res.slug)
			})
		}
	}
	
	return (
		<SidebarContainer>
			<button onClick={click}>
				<span></span>
				<span></span>
				<span></span>
			</button>
			<div opened={opened.toString()}>
				<input placeholder="Search" className="sidebtn" onChange={onChange}></input>
				{sidebar.map(btn => getSideButton(btn, filter, true))}
			</div>
		</SidebarContainer>
	)
}



export default Sidebar
