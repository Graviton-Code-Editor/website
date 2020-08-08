import Link from 'next/link'
import styled from '@emotion/styled'
import { useRouter } from "next/router";

const NavBarContainer = styled.div`
	display: flex;
	justify-content: center;
	min-width: 90%;
	margin: 50px 30px;
	margin-bottom: 15px;
	@media only screen and (max-width: 600px) {
		& {
			margin: 15px;
		}
	}
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
						<img src="/logo.png"/>
					</Link>
				</div>
				<Link href="/">
					<a active={router.asPath.split('/')[1] === '' ? 'true' : ''}>Home</a>
				</Link>
				<Link href="/blog">
					<a active={router.asPath.split('/')[1] === 'blog' ? 'true' : ''}>Blog</a>
				</Link>
				<Link href="/docs" >
					<a active={router.asPath.split('/')[1] === 'docs' ? 'true' : ''}>Docs</a>
				</Link>
			</div>
		</NavBarContainer>
	)
}

export default Navbar
