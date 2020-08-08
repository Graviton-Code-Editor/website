import styled from '@emotion/styled'

const DocsLayout = styled.div`
	display: flex;
	min-height: 100%;
	padding: 0 10%;
	& > div {
		margin: 20px;
		overflow: auto;
		
	}
	@media only screen and (min-width: 600px) {
		& > div {
			flex: 3;
		}
	}
	@media only screen and (max-width: 600px) {
		& > div {
			margin: 5px;
		}
	}
`

export default DocsLayout