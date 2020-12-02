import styled from '@emotion/styled'

const PluginCard = styled.div`
	padding: 15px;
	width: 200px;
	cursor: pointer;
	max-width: auto;
	margin: 10px;
	border-radius: 10px;
	transition: 0.25s;
	display: inline-block;
	color: black;
	font-size: 13px;
	text-decoration: none;
	& * {
		font-size: 12px;
		color: black;
		text-decoration: none;
	}
	& h2 {
		font-weight: bold;
		font-size: 15px;
	}
	& :hover {
		background: rgb(252, 252, 252);
		box-shadow: 0px 1px 7px rgba(0,0,0, 0.17);
		transition: 0.12s;
	}
	.author{
		color: rgb(70, 70, 70);
		font-size: 12px;
	}
	& a {
		font-size: 13px;
	}
	& p {
		overflow: hidden;
		text-overflow: ellipsis;
		max-height: 30px;
		white-space: nowrap; 
	}
	@media only screen and (max-width: 600px) {
		min-width: 100%;
		max-width: auto;
		margin: 0 auto;
	}
`

export default PluginCard