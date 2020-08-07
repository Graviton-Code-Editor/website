import styled from '@emotion/styled'

const DocsLayout = styled.div`
	display: flex;
	min-height: 100%;
	padding: 0 10%;
	@media only screen and (min-width: 600px) {
		& > div {
			margin: 20px;
			overflow: auto;
			flex: 3;
		}
	}
`

export default DocsLayout