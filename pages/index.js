import Navbar from '../components/navbar.jsx'
import HomeLayout from '../components/home.layout.jsx'
import Title from '../components/title.jsx'
import Footer from '../components/footer.jsx'
import Button from '../components/button.jsx'
import Head from 'next/head'

function Home() {
	return (
		<HomeLayout>
			<Head>
				<title>Graviton Editor</title>
			</Head>
			<Navbar/>
			<div>
				<div className="container">
					<div className="top-text"> 
						<p>A <b>modern</b> code editor.</p>
						<a target="_blank" href="https://github.com/Graviton-Code-Editor/Graviton-App/releases">
							<Button>DOWNLOAD</Button>
						</a>
					</div>
					<div className="image">
						<img src="screenshot.png"/>
					</div>
					<div className="footer">
						<div>
							<a title="Source Code" target="_blank" href="https://github.com/Graviton-Code-Editor/Graviton-App">
								<img alt="Source Code" id="github_link" src="github_mark.png"/>
							</a>
							<a title="Twitter Account" target="_blank" href="https://twitter.com/gravitoneditor">
								<img alt="Twitter Account" id="twitter_link" src="twitter.svg"/>
							</a>
							<a title="Discord Server" target="_blank" href="https://discord.com/invite/gg6CTYA">
								<img alt="Discord Server" id="discord_link" src="discord.svg"/>
							</a>
						</div>
						<div>
							<p>Available for Windows, MacOS and Linux.</p>
						</div>
						<Footer/>
					</div>
				</div>
			</div>
		</HomeLayout>
	)
}

export default Home
