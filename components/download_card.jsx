import styled from '@emotion/styled'
import Link from 'next/link'


const DownloadCardStyle = styled.div`
	padding: 20px 25px;
	border-radius: 11px;
	box-shadow: 0px 1px 5px rgba(0,0,0, 0.1);
	margin: 7px;
	min-width: 65px;
	max-width: 65px;
	display:flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	transition: 0.15s;
	text-align: center;
	& svg {
		margin-bottom: 5px;
	}
	& span {
		margin-right: 8px;
	}
	& * {
		text-decoration: none;
		color: rgb(40,40,40);
	}
	:hover{
		transition: 0.15s;
		background: rgb(230,230,230);
		box-shadow: 0px 1px 7px rgba(0,0,0, 0.17);
	}
`

export default function DownloadCard({ children, href }){
	return (
		<Link href={href}>
			<DownloadCardStyle>
				{children}
			</DownloadCardStyle>
		</Link>
	)
}
