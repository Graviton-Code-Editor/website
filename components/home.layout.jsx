import styled from '@emotion/styled'

const HomeLayout = styled.div`
	& > div:nth-child(2) {
		display: flex;
		justify-content: center;
		flex-direction: row;
		.container {
			display: flex;
			justify-content: center;
			flex-direction: column;
			text-align: center;
			max-width: 80%;
			p {
				text-align: left;
				margin: 20px 0px;
				margin-bottom: 35px;
				flex: 1;
				max-height: 40px;
			}
			& .image {
				display: flex;
				justify-content: center;
				flex-direction: column;
				text-align: center;
				img {
					filter: drop-shadow(0px 2px 10px rgba(0,0,0,0.15));
					width: 450px;
					max-width: 100%;
				}

			}
		}
	} 
	
`

export default HomeLayout