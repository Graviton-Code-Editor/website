import styled from '@emotion/styled'

const StoreLayout = styled.div`
	padding: 15px 5px;
	display: flex;
	justify-content: center;
	min-width: 50%;
	margin: 0 15px;
	.info {
		padding: 12px 0px;
	}
	& .container {
		width: 50%;
		@media only screen and (max-width: 600px) {
			width: 90%;
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