import styled from '@emotion/styled'

const DocsLayout = styled.div`
	display: flex;
	min-height: 100%;
	& .container {
		width: 100%;
		max-width: 100%;
	}
	@media only screen and (min-width: 600px) {
		padding-left:5%;
		padding-right: 2%;
		& > div {
			max-height: calc(100vh - (150px + 20px))
			width: 100%;
		}
		& .container {
			padding: 0 20px;
			width: calc(100% - 250px);
		}
		& .markdown-container {
			padding: 0px 20px;
			overflow: auto;
			max-height: calc(100vh - (150px + 60px));
		}
	}
	@media only screen and (max-width: 600px) {
		& .markdown-container {
			overflow: auto;
			max-height: 100%
		}
		& .container {
			padding: 0 15px;
			width: 90%;
			max-width: 90%;
		}
	}
`

export default DocsLayout