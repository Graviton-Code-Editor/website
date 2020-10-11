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
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: auto;
		min-width: 100px;
		width: 100%;
		max-width: 500px;
		padding: 25px;
		border-bottom: 1px solid rgb(180,180,180);
		@media only screen and (max-width: 600px) {
			display: block;
		}
		& > * {
			max-width: 100px;
			padding: 0px 15px;
			margin-bottom: 5px;
			text-decoration: none;
			color: rgb(75,75,75);
			font-size: 16px;
			font-weight: 500;
			outline: 0;
			font-family: 'Fira Sans', sans-serif;
			white-space: nowrap;
			&[active="true"]{
				color: black;
			}
			&[active=""]:hover {
				color: gray;
			}
			&.img{
				margin-bottom: 0px;
				margin-right: 75px;
				@media only screen and (max-width: 600px) {
					margin: 0;
				}
				& > img {
					cursor: pointer;
					max-width: 100px;
					@media only screen and (max-width: 600px) {
						max-width: 60px;
					}
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
				<a className="img">
					<Link href="/">
						<img alt="Graviton Logo" src={Logo}/>
					</Link>
				</a>
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
