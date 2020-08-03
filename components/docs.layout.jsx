import styled from '@emotion/styled'

const DocsLayout = styled.div`
	display: flex;
	min-height: 100%;
	padding: 0 10%;
	& > div:nth-child(1) {
		flex: 1;
		box-shadow: 0px 1px 3px rgba(0,0,0,0.2);
		border-radius: 8px;
		min-height: 300px;
		height: 100%;
		flex: 1;
		min-width: 20%;
		max-width: 100px;
		padding: 20px;
	}
	& > div {
		margin: 20px;
		overflow: auto;
		flex: 3;
	}
`

export default DocsLayout