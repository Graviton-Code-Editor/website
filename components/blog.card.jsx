import styled from '@emotion/styled'

const BlogCard = styled.div`
	padding: 20px;
	width: 100%;
	cursor: pointer;
	max-width: 300px;
	margin: 10px;
	border-radius: 3px;
	transition: 0.25s;
	& * {
		font-size: 12px;
	}
	& img {
		width: 100%;
	}
	& h4 {
		margin-bottom: 15px;
		font-weight: bold;
	}
	:hover {
		box-shadow: 0px 2px 7px rgba(0,0,0,0.1);
		transition: 0.15s;
	}
`

export default BlogCard