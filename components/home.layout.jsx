import styled from '@emotion/styled'

const HomeLayout = styled.div`
	& > div:nth-child(2) {
		display: flex;
		justify-content: center;
		flex-direction: row;
		& > div {
			width: 500px;
			display: flex;
			justify-content: center;
			flex-direction: column;
			text-align: center;
			img {
				min-width: 200px;
				max-width: 100%;
				filter: drop-shadow(0px 2px 10px rgba(0,0,0,0.15));
			}
			p {
				text-align: left;
				margin: 20px 0px;
				margin-bottom: 35px;
			}
		}
	} 
`

export default HomeLayout