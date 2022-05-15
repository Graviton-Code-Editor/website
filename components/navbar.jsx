import Link from 'next/link'
import styled from '@emotion/styled'
import { useRouter } from "next/router";
import Image from 'next/image'

const NavBarContainer = styled.div`
	display: flex;
	justify-content: center;
	min-width: 90%;
	padding: 20px 15px;
	padding-bottom: 10px;
	& > div {
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: auto;
		min-width: 100px;
		width: 100%;
		max-width: 600px;
		padding: 25px;
		border-radius: 10px;
		& > * {
			transition: background 0.2s color 0.2s;
			display: inline-block;
			max-width: 100px;
			padding: 13px 17px;
			text-decoration: none;
			color: rgb(125,125,125);
			font-size: 16px;
			font-weight: 500;
			outline: 0;
			font-family: 'Fira Sans', sans-serif;
			white-space: nowrap;
			margin: 0px 5px;
			border-radius: 10px;
			&[active="true"]{
				color: black;
				background: rgba(235, 235, 235);
			}
			&[active=""]:hover {
				color: rgb(50, 50, 50);
				background: rgba(235, 235, 235);
			}
			&.img{
				margin-bottom: 0px;
				margin-right: 75px;
				@media only screen and (max-width: 600px) {
					margin-right: 0px;
					min-width: 75px;
				}
			}
		}
	}
	& > div:nth-child(2) {
		flex-direction: flex-end;
	}
`

function Navbar() {
	const router = useRouter();
	return (
		<NavBarContainer>
			<div>
				<Link href="/">
					<a className="img">
						<Image alt="Graviton Logo" src="/logo.png" width={512} height={129}/>
					</a>
				</Link>
				<Link href="/">
					<a active={router.asPath.split('/')[1] === '' ? 'true' : ''}>Home</a>
				</Link>
				<Link href="/docs">
					<a active="">Docs</a>
				</Link>
				<Link  href="/blog">
					<a active={router.asPath.split('/')[1] === 'blog' ? 'true' : ''}>Blog</a>
				</Link>
				<Link href="/about" >
					<a active={router.asPath.split('/')[1] === 'about' ? 'true' : ''}>About</a>
				</Link>
			</div>
		</NavBarContainer>
	)
}

export default Navbar
