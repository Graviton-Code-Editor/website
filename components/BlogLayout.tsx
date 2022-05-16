import styled from "@emotion/styled";

const BlogLayout = styled.div`
	padding: 0 5px;
	display: flex;
	justify-content: center;
	min-width: 80%;
	& > div {
		min-width: 15%;
		width: auto;
		max-width: 800px;
		@media only screen and (max-width: 600px) {
			max-width: 100%;
		}
	}
`;

export default BlogLayout;
