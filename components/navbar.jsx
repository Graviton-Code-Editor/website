import Link from 'next/link'
import styled from '@emotion/styled'
import { useRouter } from "next/router";
import Logo from '../public/logo.png'

const NavBarContainer = styled.div`
	display: flex;
	justify-content: center;
	min-width: 90%;
	padding: 20px 15px;
	padding-bottom: 10px;
	& > div {
		min-width: 100px;
		width: 100%;
		max-width: 500px;
		padding: 25px 40px;
		border-bottom: 1px solid rgb(180,180,180);
		display: flex;
		justify-content: center;
	}
	& > div {
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: auto;
		& > a {
			margin-bottom: 10px;
			padding: 0px 15px;
			text-decoration: none;
			color: rgb(75,75,75);
			font-size: 16px;
			font-weight: 500;
			outline: 0;
			font-family: 'Fira Sans', sans-serif;
			&[active="true"]{
				color: black;
			}
			&[active=""]:hover {
				color: gray;
			}
		}
		& > div {
			flex: 1;
			min-width: 40%;
			& > img {
				width: 50%;
				max-width: 140px;
				cursor: pointer;
			}
			@media only screen and (max-width: 600px) {
				margin-left: 50px;
				min-width: 60px;
				margin-bottom: 7px;
				padding-left: 10px;
				& > img { 
					width: 50px;
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
				<div>
					<Link href="/">
						<img alt="Graviton Logo" src={Logo}/>
					</Link>
				</div>
				<Link href="/">
					<a active={router.asPath.split('/')[1] === '' ? 'true' : ''}>Home</a>
				</Link>
				<Link href="/blog">
					<a active={router.asPath.split('/')[1] === 'blog' ? 'true' : ''}>Blog</a>
				</Link>
				<Link href="/store">
					<a active={router.asPath.split('/')[1] === 'store' ? 'true' : ''}>Store</a>
				</Link>
				<Link href="/docs" >
					<a active={router.asPath.split('/')[1] === 'docs' ? 'true' : ''}>Docs</a>
				</Link>
				<Link href="/about" >
					<a active={router.asPath.split('/')[1] === 'about' ? 'true' : ''}>About</a>
				</Link>
			</div>
		</NavBarContainer>
	)
}

export default Navbar
