import styled from "@emotion/styled";

const SecondaryButton = styled.button`
	padding: 11px 12px;
	background: transparent;
	border: 0;
	color: black;
	border-radius: 6px;
	cursor: pointer;
	transition: 0.1s;
	margin: 1px;
	& *{
		color: inherit;
		text-decoration: inherit;
	}
	:hover {
		color: rgb(65, 65, 65);
		transition: 0.1s;
	}
`;

export default SecondaryButton;
