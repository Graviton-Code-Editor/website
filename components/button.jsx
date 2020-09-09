import styled from '@emotion/styled'

const Button = styled.button`
	padding: 11px 12px;
	background: rgb(0, 102, 255);
	border: 0;
	color: white;
	border-radius: 6px;
	letter-spacing: 1px;
	cursor: pointer;
	transition: 0.1s;
	:hover {
		box-shadow: 0px 2px 7px rgba(0,0,0,0.2);
		background: rgba(0, 102, 255,0.85);
		transition: 0.1s;
	}
`

export default Button