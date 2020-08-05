import styled from '@emotion/styled'

const BlogLayout = styled.div`
	padding: 0 5px;
	display: flex;
	justify-content: center;
	min-width: 50%;
	& > div {
		min-width: 15%;
		width: auto;
		max-width: 90%;
	}
`

export default BlogLayout