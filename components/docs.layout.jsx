import styled from '@emotion/styled'

const DocsLayout = styled.div`
	display: flex;
	justify-content: center;
	min-height: 100%;
	@media only screen and (min-width: 600px) {
		padding-left: 20px;
		& > div {
			max-height: calc(100vh - (150px + 20px))
			width: 100%;
			flex: 1;
			&:nth-child(1){
				display: flex;
				justify-content: flex-end;
			}
		}
		& .container {
			flex: 2;
			min-width: 25%;
			width: 850px;
			max-width: 75%;
			overflow: auto;
			& > div {
				display: flex;
				max-height: calc(100vh - 260px);
			}
		}
		& .markdown-container {
			padding: 0px 20px;
			overflow: auto;
			height: 100%;
		}
		& .spacing {
			margin-right: 35%;
			height:100%;
			width: 0px;
		}
	}
	@media only screen and (max-width: 600px) {
		& > div:nth-child(1){
			min-width: 0;
			width: 0;
		}
		& .markdown-container {
			overflow: auto;
			max-height: 100%
		}
		& .container {
			padding: 0 15px;
			width: 90%;
			max-width: 90%;
			height: 100%;
		}
	}
`

export default DocsLayout