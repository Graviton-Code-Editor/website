import Navbar from '../components/navbar.jsx'
import HomeLayout from '../components/home.layout.jsx'
import Title from '../components/title.jsx'
import Footer from '../components/footer.jsx'
import Button from '../components/button.jsx'
import SecondButton from '../components/second_button.jsx'
import Head from 'next/head'
import Link from 'next/link'
import GravitonScreenshot from '../public/screenshot.png'

function Home() {
	return (
		<div style={{height: '100%'}}>
			<Head>
				<title>Graviton Editor</title>
			</Head>
			<Navbar/>
			<HomeLayout>
				<div className="container">
					<div className="horizontal" style={{ 'padding': '50px 5px'}}>
						<div className="image">
							<img alt="Gravitonn Screenshot" src={GravitonScreenshot}/>
						</div>
						<div className="right-text"> 
							<Title>Built for all kind of developers</Title>
							<p>Graviton Editor is an open source, free and cross-platform code editor</p>
							<Link href="/download">
								<Button>DOWNLOAD</Button>
							</Link>
							
							<Link href="/browser" >
								<SecondButton>Use Browser version</SecondButton>
							</Link>
						</div>
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
							<p>Available for Windows, MacOS, Linux and any device running the Web.</p>
						</div>
						<Footer/>
					</div>
				</div>
			</HomeLayout>
		</div>
	)
}

export default Home
