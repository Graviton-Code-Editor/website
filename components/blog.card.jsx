import styled from '@emotion/styled'

const BlogCard = styled.div`
	padding: 15px;
	width: 250px;
	cursor: pointer;
	max-width: auto;
	margin: 10px;
	border-radius: 10px;
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
		background: rgb(252, 252, 252);
		box-shadow: 0px 1px 7px rgba(0,0,0, 0.17);
		transition: 0.12s;
	}
	.date{
		color: gray;
		font-size: 12px;
	}
	@media only screen and (max-width: 600px) {
		margin: 0 auto;
	}
`

export default BlogCard