import styled from "@emotion/styled";

export const Header = styled.div`
	align-items: center;
	margin: 20px auto;
	margin-bottom: 35px;
	p {
		text-align: center;
		flex: 1;
		line-height: 25px;
	}
	@media only screen and (max-width: 600px) {
		margin: 0 auto;
		display: block;
	}
	& > span {
		filter: drop-shadow(0px 5px 15px rgba(0,0,0,0.35));
	}
`;

export const Content = styled.div`
	min-width: 100%;
	min-height: 100%;
	display: flex;
	justify-content: center;
	flex-direction: row;
`;
