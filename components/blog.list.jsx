import styled from '@emotion/styled'

const BlogList = styled.div`
	display: flex;
	@media only screen and (max-width: 600px) {
		display: block;
	}
	justify-content: center;
	& > div {
		min-width: 20%;
		max-width: 100%;
		@media only screen and (max-width: 600px) {
			display: flex;
			flex-direction: column;
			width: 80%;
		}
	}
`

export default BlogList