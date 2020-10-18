import styled from '@emotion/styled'

const Button = styled.button`
	padding: 11px 12px;
	background: rgb(0, 102, 255);
	border: 0;
	color: white;
	border-radius: 6px;
	cursor: pointer;
	transition: 0.1s;
	letter-spacing: ${props => props.noSpacing ? '0px':'1px'};
	& *{
		color: inherit;
		text-decoration: inherit;
	}
	:hover {
		box-shadow: 0px 2px 7px rgba(0,0,0,0.2);
		background: rgba(0, 102, 255,0.85);
		transition: 0.1s;
	}
	:focus{
		box-shadow: 0px 0px 0px 3px rgb(215,215,215);
	}
	&[noSpacing="true"]{
		letter-spacing: 0px;
	}
`

export default Button