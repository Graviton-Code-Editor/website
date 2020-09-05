import styled from '@emotion/styled'
import Link from 'next/link'

const LinkCard = styled.div`
	padding: 20px 25px;
	border-radius: 11px;
	box-shadow: 0px 1px 5px rgba(0,0,0, 0.1);
	margin: 7px;
	max-width: auto;
	display: inline-block;
	cursor: pointer;
	transition: 0.12s;
	text-align: center;
	& span {
		margin-right: 8px;
	}
	& * {
		text-decoration: none;
		color: rgb(40,40,40);
	}
	:hover{
		transition: 0.12s;
		background: rgb(247,247,247);
		box-shadow: 0px 1px 7px rgba(0,0,0, 0.17);
	}
`

const a = ({ children, is = 'internal', href }) =>  {
	if(is == 'external'){
		return (
			<a style={{
					color: 'black'
				}} target="_blank" href={href}>
				<LinkCard>
					<span>-></span>{children}
				</LinkCard>
			</a>
		)
	}else{
		return (
			<Link href={href}>
				<LinkCard>
					<span>-></span>{children}
				</LinkCard>
			</Link>
		)
	}
	
}

export default a