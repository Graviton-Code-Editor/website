import styled from '@emotion/styled'

const BlogCard = styled.div`
	padding: 15px;
	width: 250px;
	cursor: pointer;
	max-width: 300px;
	margin: 10px;
	border-radius: 3px;
	transition: 0.25s;
	display: inline-block;
	& * {
		font-size: 12px;
	}
	& h2 {
		font-weight: bold;
		font-size: 15px;
	}
	:hover {
		box-shadow: 0px 2px 7px rgba(0,0,0,0.1);
		transition: 0.15s;
	}
	.date{
		color: gray;
		font-size: 12px;
	}
`

export default BlogCard