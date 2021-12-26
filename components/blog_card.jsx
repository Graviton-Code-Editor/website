import styled from '@emotion/styled'

const BlogCard = styled.div`
	padding: 15px;
	width: 250px;
	cursor: pointer;
	border-radius: 10px;
	transition: 0.25s;
	margin: 0 10px;
	display: block;
	&:hover {
		background: rgb(252, 252, 252);
		box-shadow: 0px 1px 7px rgba(0,0,0, 0.17);
		transition: 0.12s;
	}
	@media only screen and (max-width: 600px) {
		margin: 0 auto;
	}
	& p, span {
		font-size: 12px;
		&.date{
			color: gray;
		}
	}
	& h2 {
		font-weight: bold;
		font-size: 15px;
	}	
`

export default BlogCard