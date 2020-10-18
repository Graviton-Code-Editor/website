import styled from '@emotion/styled'

const StoreLayout = styled.div`
	padding: 15px 5px;
	display: flex;
	justify-content: center;
	min-width: 50%;
	margin: 0 15px;
	@media only screen and (max-width: 600px) {
		&{
			display: block;
		}
		.sidebar > div{
			display: none;
		}
	}
	.info {
		padding: 12px 0px;
		& > h1 {
			font-weight: bold;
		}
	}
	& .container {
		width: 50%;
		@media only screen and (max-width: 600px) {
			width: 90%;
		}
	}
	& .sidebar {
		width: 200px;
		padding-top: 30px;
		@media only screen and (max-width: 600px) {
			width: 90%;
		}
		& button {
			height: 30px;
			white-space: nowrap;
			margin: 1px;
			border-radius: 6px;
			border: none;
			font-size: 14px;
			color: rgb(65, 65, 65);
			padding:  6px 8px;
			background: transparent;
			outline: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			text-decoration: none;
			& *{
				color: inherit;
				text-decoration: inherit;
			}
			&:hover{
				background: rgba(150, 150, 150, 0.4);
				color: #000000;
			}
		}
	}
	& h2 {
		font-weight: bold;
		font-size: 26px;
	}
	& .author{
		color: gray;
		font-size: 15px;
	}
	& .link{
		color: black;
		font-size: 15px;
		padding: 10px 0px;
	}
`

export default StoreLayout