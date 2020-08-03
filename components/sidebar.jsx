import Link from 'next/link'
import styled from '@emotion/styled'
import { useRouter } from "next/router";
import { list as sidebar } from '../docs/_sidebar.json'

const SidebarContainer = styled.div`
	display: block;
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
	return (
		<SidebarContainer>
			{sidebar.map(btn => getSideButton(btn))}
		</SidebarContainer>
	)
}

export default Sidebar
