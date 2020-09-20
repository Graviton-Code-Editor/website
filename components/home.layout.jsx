import styled from '@emotion/styled'

const HomeLayout = styled.div`
	min-width: 100%;
	min-height: 100%;
	display: flex;
	justify-content: center;
	flex-direction: row;
	.container {
		display: flex;
		justify-content: center;
		flex-direction: column;
		text-align: center;
		max-width: 80%;
		.top-text{
			display: flex;
			align-items: center;
			margin: 20px 0px;
			margin-bottom: 35px;
			p {
				text-align: left;
				flex: 1;
				max-height: 40px;
			}
		}
		.image {
			display: flex;
			justify-content: center;
			flex-direction: column;
			text-align: center;
			margin-bottom: 15px;
			img {
				filter: drop-shadow(0px 5px 15px rgba(0,0,0,0.35));
				width: 450px;
				max-width: 100%;
			}
		}
		.footer {
			display: flex;
			flex-direction: column;
			& > div {
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 5px 20px;
				a > img{
					margin: 0 6px;
					cursor: pointer;
				}
				#twitter_link{
					height: 45px;
				}
				#github_link{
					height: 30px;
				}
				#discord_link{
					height: 40px;
				}
				p {
					text-align: center;
				}
			}
		}
	}
`

export default HomeLayout